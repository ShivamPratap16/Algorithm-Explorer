# 🚀 Algorithm Explorer



Welcome to **Algorithm Explorer**! This interactive project allows you to visualize various algorithms and understand their inner workings.

---

## 📌 Getting Started

### ✅ Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)

### 🔧 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/shivampratap16/Algorithm-Explorer.git
   cd Algorithm-Visualizer
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and configure it as follows:

```plaintext
# JWT Secret for signing tokens
JWT_SECRET=your_jwt_secret_here

# MongoDB connection string
MONGO_URL="mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Environment settings
NODE_ENV=development
FRONTEND_URL=http://localhost:5173/

# Google OAuth credentials
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
GOOGLE_CALLBACK=http://localhost:4000/auth/google/callback

# Server Port
PORT=4002
```

---

## 🔑 Setting Up Google OAuth

In `server/Passport/key.js`, ensure the OAuth credentials are configured correctly:

```javascript
module.exports = {
    google: {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    }
};
```

---

## 🚀 Running the Application

Start the application in **development mode**:

```bash
npm start
```

Open your browser and visit [http://localhost:3000](http://localhost:3000) to explore the application.

---

## 📜 Available Scripts

- `npm start` - Runs the app in development mode.
- `npm test` - Launches the test runner.
- `npm run build` - Builds the app for production.
- `npm run eject` - Removes the single build dependency.
![Algorithm Explorer](./client/public/image.png)
---

## 🤝 Contributing

We welcome contributions! 🚀 To contribute:

1. **Fork** the repository.
2. **Create** a new branch.
3. **Commit** your changes.
4. **Push** to your branch.
5. **Submit** a pull request.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🙌 Acknowledgments

A huge thanks to all contributors and the open-source community for their support! 🎉

---

💡 *Happy Coding! 🚀*

Shivam

