# 🎓 Student Networking Platform

A full-stack **student networking platform** designed to help students build their professional identity, discover peers based on skills and interests, showcase projects, and build meaningful academic and professional connections.

The platform is inspired by professional networking applications, but is specifically focused on creating a **student-centric ecosystem** for collaboration, discovery, and networking.

---

## 🚀 Live Demo

🌐 **Live Application:** Coming Soon

📂 **GitHub Repository:**
https://github.com/harshrai2910/Student_Linkedin_platform

---

## 📌 Overview

Students often have skills, projects, and interests but lack a dedicated platform to discover like-minded peers and build connections within their academic community.

This project addresses that problem by providing students with a platform where they can:

- 👤 Create and manage their professional profile
- 🛠️ Showcase their technical skills
- 💻 Share projects and achievements
- 🔎 Discover students based on skills and interests
- 🤝 Send and manage connection requests
- 📝 Create image-based posts
- 🌐 Explore other students and their profiles
- 🔐 Securely authenticate and access protected resources

The goal is not to simply clone LinkedIn, but to build a **student-focused networking ecosystem** with features designed around student collaboration and discovery.

---

# ✨ Key Features

## 👤 User Authentication

- User registration and login
- Session-based authentication
- Password hashing using **bcrypt**
- Protected routes using authentication middleware
- Secure user session management

---

## 🧑‍💻 Student Profiles

Users can create and manage their professional identity through:

- Profile picture
- Username
- Bio
- Skills
- Education-related information
- Projects
- Other profile information

This allows students to maintain a centralized professional profile.

---

## 🛠️ Skills-Based Discovery

Instead of limiting search to usernames, the platform allows students to discover other users based on their **skills**.

For example:

> Searching for `React` can help discover students who have React listed among their skills.

This makes the platform more useful for:

- Finding teammates
- Discovering developers
- Building project teams
- Connecting with students having similar interests

---

## 🔎 Global Search

Implemented a global search system that allows users to search for students based on relevant profile information.

### Features

- Username-based search
- Skill-based discovery
- Debounced search requests
- Dynamic search results

Debouncing helps reduce unnecessary API requests while the user is typing.

---

## 🤝 Connection System

Students can build their network through connection requests.

### Supported actions

- Send connection request
- Accept connection request
- Reject connection request
- View connections
- Manage connection status

This creates a basic networking layer between students.

---

## 📝 Posts

Users can share content with other students through posts.

### Supported functionality

- Create posts
- Image-based posts
- View posts
- Interact with content
- User-specific post ownership

The feature provides a simple social layer for sharing projects, achievements, and updates.

---

## 💻 Project Showcase

Students can showcase their projects directly on their profiles.

Projects can be used to demonstrate:

- Technical skills
- Development experience
- Personal projects
- Academic projects
- Areas of interest

This helps students build a stronger technical identity beyond simply listing skills.

---

# 🏗️ Tech Stack

## Frontend

- **React.js**
- JavaScript
- HTML5
- CSS3
- REST API integration

## Backend

- **Node.js**
- **Express.js**
- RESTful APIs
- MVC architecture
- Authentication middleware

## Database

- **MongoDB**
- **Mongoose**

## Authentication & Security

- Session-based authentication
- bcrypt password hashing
- Middleware-based route protection

## Development Tools

- Git
- GitHub
- VS Code
- Postman

---

# 🏛️ Architecture

The backend follows the **MVC (Model-View-Controller)** architecture.

```text
                    ┌─────────────────┐
                    │     React       │
                    │    Frontend     │
                    └────────┬────────┘
                             │
                             │ HTTP Requests
                             ▼
                    ┌─────────────────┐
                    │    Express.js   │
                    │      Routes     │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   Controllers   │
                    │ Business Logic  │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │     Models      │
                    │    Mongoose     │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │    MongoDB      │
                    │    Database     │
                    └─────────────────┘
```

---

# 📁 Project Structure

```text
Student_Linkedin_platform/
│
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── assets/
│       └── App.jsx
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── utils/
│   └── server.js
│
├── .gitignore
├── README.md
└── package.json
```

> The exact folder structure may vary as the project evolves.

---

# 🔌 API Architecture

The backend exposes **RESTful APIs** for different parts of the application.

Major API areas include:

| Module         | Purpose                               |
| -------------- | ------------------------------------- |
| Authentication | Registration, login, logout           |
| Users          | User profile management               |
| Search         | Student and skill discovery           |
| Connections    | Connection requests and relationships |
| Posts          | Creating and retrieving posts         |
| Projects       | Managing showcased projects           |
| Profile        | Updating profile information          |

The APIs are organized using Express routes and controllers to maintain separation of concerns.

---

# 🔐 Security

Security considerations implemented in the application include:

- 🔒 Password hashing using bcrypt
- 🛡️ Protected API routes
- 🔑 Session-based authentication
- 🚫 Authentication middleware
- 🌱 Environment variables for sensitive configuration
- 🔐 Separation of configuration from source code

Sensitive credentials such as database URLs and session secrets should **never be committed to GitHub**.

---

# ⚡ Search Optimization

The global search functionality uses **debouncing** to prevent excessive API calls.

Instead of sending a request for every keystroke:

```text
R
Re
Rea
Reac
React
```

the application waits for the user to stop typing before making the API request.

This improves:

- API efficiency
- Server performance
- User experience
- Network utilization

---

# 🧩 Core User Flow

```text
Register
   │
   ▼
Login
   │
   ▼
Create Profile
   │
   ├──────────────► Add Skills
   │
   ├──────────────► Add Projects
   │
   └──────────────► Create Posts
                      │
                      ▼
                Discover Students
                      │
                      ▼
              Search by Skills
                      │
                      ▼
             Send Connection Request
                      │
                      ▼
                Build Network
```

---

# 🛠️ Installation & Setup

## 1. Clone the repository

```bash
git clone https://github.com/harshrai2910/Student_Linkedin_platform.git
```

```bash
cd Student_Linkedin_platform
```

---

## 2. Install Backend Dependencies

```bash
cd server
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file inside the `server` directory.

Example:

```env
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
```

> Add the environment variables required by your current backend configuration.

---

## 4. Start the Backend

```bash
npm start
```

or, if using nodemon:

```bash
npm run dev
```

---

## 5. Install Frontend Dependencies

Open another terminal:

```bash
cd client
npm install
```

---

## 6. Start the Frontend

```bash
npm run dev
```

The frontend will then be available through the local development URL provided by Vite.

---

# 🌐 Deployment

The application can be deployed using platforms such as:

### Frontend

- Vercel
- Netlify

### Backend

- Render
- Railway

### Database

- MongoDB Atlas

For production deployment, make sure that:

- Frontend API URLs point to the deployed backend
- Backend environment variables are configured on the hosting platform
- CORS is configured correctly
- MongoDB Atlas allows the deployed backend to connect
- Localhost URLs are removed from production API configuration

---

# 📊 Project Highlights

- ✅ Full-stack MERN application
- ✅ RESTful API architecture
- ✅ MVC backend structure
- ✅ 20+ API endpoints
- ✅ Secure authentication
- ✅ bcrypt password hashing
- ✅ Protected routes
- ✅ Debounced global search
- ✅ Skill-based student discovery
- ✅ Connection request system
- ✅ Image-based posts
- ✅ Modular profile management
- ✅ MongoDB database integration

---

# 🎯 Future Improvements

The platform can be further extended with:

- 💬 Real-time messaging
- 🔔 Real-time notifications
- 👥 Student communities
- 📚 College-based networking
- 🔍 Advanced filtering
- ⭐ Student/project recommendations
- 📊 Profile analytics
- 🏆 Achievement and certification system
- 📅 Collaboration/event system
- 🤖 AI-powered student recommendations
- 📱 Progressive Web App / mobile application

---

# 🧠 What I Learned

Through this project, I gained practical experience in:

- Designing RESTful APIs
- Building a full-stack MERN application
- Implementing MVC architecture
- Authentication and authorization
- MongoDB schema design
- Mongoose relationships
- Middleware development
- API integration with React
- Search optimization using debouncing
- Git and GitHub workflow
- Environment variable management
- Full-stack application deployment

---

# 🚧 Project Status

🟢 **Active Development**

The core networking functionality is implemented, while additional features and production improvements are planned for future iterations.

---

# 👨‍💻 Developer

**Harsh Rai**

BCA Student | MERN Stack Developer

Interested in:

- Full-Stack Development
- Data Structures & Algorithms
- Backend Development
- System Design
- Developer Tools

---

# ⭐ Support

If you find this project interesting, consider giving the repository a ⭐ on GitHub.

Feedback and suggestions are always welcome!

---

## 📄 License

This project is created for **educational and portfolio purposes**.
