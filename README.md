<div align="center">

  <img src="./public/images/ghostform.png" alt="Ghost Form Logo" width="120" />

  # Ghost Form

  ### *A privacy-first, open-source form backend for static websites.*

  <br/>

  [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
  [![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
  [![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

  <br/>

  [Live Demo](#) • [Documentation](#) • [Report Bug](https://github.com/khdcoder/Ghost-Form/issues) • [Request Feature](https://github.com/khdcoder/Ghost-Form/issues)

</div>

---

## 🌟 About The Project

Frontend developers often struggle to handle form submissions on static websites without relying on paid, third-party services. **Ghost Form** solves this by providing a lightweight, self-hosted backend that seamlessly captures, stores, and manages form submissions. 

Built with a focus on **developer experience** and **data privacy**, it features a premium, spacious UI and a robust Node.js + Prisma backend.

---

## ✨ Features

- 🔒 **Privacy-First**: Your data stays on your server. No third-party tracking.
- ⚡ **Lightweight & Fast**: Built with vanilla Node.js, Express, and Prisma ORM.
- 🎨 **Premium UI**: Modern, spacious design with 16dp rounded corners and clean aesthetics.
- 📊 **Built-in Dashboard**: View all submissions in a clean, responsive table.
- 📥 **CSV Export**: Download your form data instantly with one click.
- 🛡️ **Spam Protection Ready**: Architecture supports easy addition of honeypot fields and rate limiting.

---

## 📸 Screenshots


### 📝 Form Submission Page
<img width="1348" height="636" alt="image" src="https://github.com/user-attachments/assets/3c824867-2be5-43b4-9498-c779aa54ac32" />

*A clean, modern form ready to be embedded in any static website.*

### 📊 Admin Dashboard
<img width="1349" height="635" alt="image" src="https://github.com/user-attachments/assets/2801a9af-3f67-4095-8eec-89f78ee6050f" />

*View, manage, and export your submissions with a single click.*

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **ORM**: Prisma
- **Frontend**: Vanilla JavaScript, HTML5, Custom CSS (Tailwind-inspired design system)

---

## 🚀 Getting Started

Follow these simple steps to get Ghost Form running on your local machine.

### Prerequisites
- Node.js (v18 or higher)
- MySQL Database (e.g., XAMPP, MySQL Workbench, or a cloud provider)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/khdcoder/Ghost-Form.git
   cd Ghost-Form
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**  
   Create a `.env` file in the root directory and add your database connection string:
   ```env
   DATABASE_URL="mysql://root:YOUR_PASSWORD@localhost:3306/ghost_form"
   PORT=3000
   ```

4. **Push the Database Schema**
   ```bash
   npx prisma db push
   ```

5. **Start the Server**
   ```bash
   node src/server.js
   ```
   The server will start on `http://localhost:3000`.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/forms` | Create a new form (Requires `{ "slug": "your-form-name" }` in body) |
| `POST` | `/api/submit/:slug` | Submit data to a specific form |
| `GET` | `/api/submissions/:slug` | Fetch all submissions for a specific form |

---

## 🗺️ Roadmap

- [x] **Month 1**: Core backend, Prisma MySQL integration, and Premium UI Dashboard.
- [ ] **Month 2**: Email notifications (Nodemailer) and advanced spam protection (Honeypot).
- [ ] **Month 3**: Webhooks support (Discord/Zapier) and Docker deployment configuration.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/khdcoder">khdcoder</a></sub>
</div>
