require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve static HTML files

// 1. Create a new form endpoint
app.post('/api/forms', async (req, res) => {
  try {
    const { slug } = req.body;
    const newForm = await prisma.form.create({ data: { slug } });
    res.json({ success: true, formId: newForm.id, slug: newForm.slug, endpoint: `${req.protocol}://${req.get('host')}/api/submit/${newForm.slug}` });
  } catch (error) {
    res.status(400).json({ error: 'Slug already exists or invalid' });
  }
});

// 2. Submit data to a specific form (The "Ghost" endpoint)
app.post('/api/submit/:slug', async (req, res) => {
  try {
    const form = await prisma.form.findUnique({ where: { slug: req.params.slug } });
    if (!form) return res.status(404).json({ error: 'Form not found' });

    const submission = await prisma.submission.create({
      data: {
        formId: form.id,
        data: req.body,
        ipAddress: req.ip
      }
    });
    res.json({ success: true, message: 'Submission received by Ghost Form!' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 3. Get submissions for dashboard
app.get('/api/submissions/:slug', async (req, res) => {
  try {
    const form = await prisma.form.findUnique({ 
      where: { slug: req.params.slug },
      include: { submissions: { orderBy: { createdAt: 'desc' } } }
    });
    if (!form) return res.status(404).json({ error: 'Form not found' });
    res.json({ success: true, submissions: form.submissions });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`👻 Ghost Form running on http://localhost:${PORT}`));