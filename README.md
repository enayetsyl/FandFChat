# F&F Chat - Real-Time Chat Application

## Introduction
F&F Chat is a real-time chat application built with React, Node.js, Express, MongoDB, and Socket.IO. It allows users to sign up, log in, and chat with others in real-time. The app is deployed on Render, making it accessible from anywhere.

## Features
✅ User authentication (Signup/Login)  
✅ Real-time messaging using Socket.IO  
✅ Display online users  
✅ Search users for conversation  
✅ Secure password hashing with bcrypt  
✅ Messages stored in MongoDB  
✅ Auto-scroll to the latest message  
✅ Animated shake effect for new messages  
✅ Deployed on Render for live access  

## Technology Stack

### Frontend:
- **React** – UI Framework
- **Zustand** – State Management
- **TailwindCSS & DaisyUI** – UI Styling
- **React Router DOM** – Routing
- **React Hot Toast** – Notifications
- **React Icons** – Icons

### Backend:
- **Node.js** – JavaScript Runtime
- **Express.js** – Backend Framework
- **MongoDB & Mongoose** – Database & ORM
- **Socket.IO** – Real-time Communication
- **JWT (jsonwebtoken)** – User Authentication
- **Bcrypt** – Password Hashing
- **Dotenv** – Environment Variable Management

## Installation & Setup

### Prerequisites
Ensure you have installed:
- Node.js (v16+)
- MongoDB (local or cloud-based)
- Git
- VS Code or any code editor

### Step 1: Clone the Repository
```bash
git clone https://github.com/enayetsyl/fandfchat.git
cd fandfchat
```

### Step 2: Install Dependencies

#### Backend:
```bash
npm install
```

#### Frontend:
```bash
cd frontend
npm install
```

### Step 3: Environment Variables Setup
Create a `.env` file in the root directory and add:
```bash
PORT=5000
MONGO_DB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Step 4: Run the Project
#### Start the backend:
```bash
npm run server
```

#### Start the frontend:
```bash
cd frontend
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to use the app.

## Usage Guide
1️⃣ Sign Up with your full name, username, password, and gender.  
2️⃣ Login to access the chat interface.  
3️⃣ Search for users using the search bar.  
4️⃣ Click on a user to start a conversation.  
5️⃣ Send messages in real-time.  
6️⃣ Logout when finished.  

## Live Demo
Try the deployed version of F&F Chat here:  
🔗 **[Live Site](#)**  

## GitHub Repository
🔗 **[GitHub Repo](https://github.com/enayetsyl/fandfchat)**  

## 🏆 **Author:** Md Enayetur Rahman

### Contact Information
- [LinkedIn](https://www.linkedin.com/in/md-enayetur-rahman/)
- [Facebook](https://www.facebook.com/profile.php?id=100094416483981)
- [X (Twitter)](https://x.com/enayetu_syl)
- [YouTube](https://www.youtube.com/@MdEnayeturRahman)
- [GitHub](https://github.com/enayetsyl/)
- [Medium](https://medium.com/@enayetflweb)
- [dev.to](https://dev.to/md_enayeturrahman_2560e3)
- [Leetcode](https://leetcode.com/u/XTl7hvNPIc/)
- [Hackerrank](https://www.hackerrank.com/profile/enayetflweb)
- [Codeforces](https://codeforces.com/profile/enayetsyl)
- [Email](mailto:enayetflweb@gmail.com)

## Conclusion
Building F&F Chat has been an exciting journey, allowing me to explore full-stack development, real-time data transfer, and authentication security. I hope this project inspires others to create their own real-time applications. 🚀🎉  

Happy Coding! 💻🔥
