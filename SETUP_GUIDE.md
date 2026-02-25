# Notes Taking Application - Complete Setup Guide

## 📋 Project Overview

A full-stack note-taking web application with user authentication, CRUD operations, and a responsive UI.

**Tech Stack:**
- Frontend: React (Vite) + Bootstrap 5
- Backend: Node.js + Express
- Database: MongoDB
- Authentication: JWT
- Styling: CSS3 + Bootstrap

---

## 🗂️ Project Structure

```
notes-copilot/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── models/
│   │   ├── User.js               # User schema
│   │   └── Note.js               # Note schema
│   ├── controllers/
│   │   ├── authController.js     # Auth logic
│   │   └── noteController.js     # Note logic
│   ├── routes/
│   │   ├── authRoutes.js         # Auth endpoints
│   │   └── noteRoutes.js         # Note endpoints
│   ├── middleware/
│   │   ├── auth.js               # JWT verification
│   │   └── errorHandler.js       # Error handling
│   ├── server.js                 # Express server
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navigation.jsx
    │   │   ├── AddNoteModal.jsx
    │   │   ├── EditNoteModal.jsx
    │   │   ├── DeleteConfirmation.jsx
    │   │   ├── NoteCard.jsx
    │   │   ├── ProtectedRoute.jsx
    │   │   └── ToastNotification.jsx
    │   ├── pages/
    │   │   ├── LoginPage.jsx
    │   │   ├── RegisterPage.jsx
    │   │   └── DashboardPage.jsx
    │   ├── api/
    │   │   └── api.js             # Axios config
    │   ├── styles/
    │   │   ├── App.css
    │   │   ├── AuthPages.css
    │   │   ├── Dashboard.css
    │   │   ├── NoteCard.css
    │   │   └── Toast.css
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── App.css
    ├── index.html
    ├── vite.config.js
    ├── tsconfig.json
    ├── package.json
    └── .env
```

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Step 1: Clone Repository & Navigate

```bash
cd "c:\Users\lenovo\OneDrive\Desktop\notes copilot"
```

### Step 2: Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file (Already created)
# Update MongoDB URI if needed in .env file

# Start backend server
npm run dev
```

**Backend runs on:** `http://localhost:5000`

### Step 3: Frontend Setup

```bash
# From root directory
cd frontend

# Install dependencies
npm install

# Start frontend development server
npm run dev
```

**Frontend runs on:** `http://localhost:3000`

---

## 🔧 Environment Variables

### Backend (.env)

```
MONGODB_URI=mongodb://localhost:27017/notes-app
PORT=5000
JWT_SECRET=your_jwt_secret_key_change_this_in_production
JWT_EXPIRE=7d
NODE_ENV=development
```

### Frontend (.env)

```
VITE_API_URL=http://localhost:5000/api
```

---

## 📝 API Endpoints

### Authentication Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |

### Note Routes (Protected)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all user's notes |
| POST | `/api/notes` | Create new note |
| GET | `/api/notes/:id` | Get single note |
| PUT | `/api/notes/:id` | Update note |
| DELETE | `/api/notes/:id` | Delete note |

---

## 🔐 Authentication Flow

1. **Register**
   - User submits name, email, password
   - Password hashed with bcrypt
   - JWT token generated and returned
   - Token stored in localStorage

2. **Login**
   - User submits email, password
   - Password compared with hashed password
   - JWT token generated and returned
   - Token used for subsequent requests

3. **Protected Routes**
   - Token extracted from Authorization header
   - Token verified with JWT_SECRET
   - User ID extracted from token
   - Request proceeds if valid

---

## 📊 Database Schemas

### User Schema
```javascript
{
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}
```

### Note Schema
```javascript
{
  title: { type: String, required: true },
  content: { type: String, required: true },
  userId: { type: ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}
```

---

## ✨ Features

### User Authentication
- ✅ Register with name, email, password
- ✅ Login with email, password
- ✅ Logout functionality
- ✅ Password hashing with bcrypt
- ✅ JWT-based authentication
- ✅ Protected routes

### Note Management
- ✅ Create notes with title and content
- ✅ View all user's notes
- ✅ Edit note title and content
- ✅ Delete notes with confirmation
- ✅ Notes display in grid layout
- ✅ Timestamps (created, updated)
- ✅ Sort by most recent first

### UI/UX
- ✅ Responsive Bootstrap design
- ✅ Toast notifications
- ✅ Loading states
- ✅ Error handling
- ✅ Confirmation dialogs
- ✅ Modal forms
- ✅ Smooth animations

### Code Quality
- ✅ MVC architecture
- ✅ RESTful API principles
- ✅ Input validation
- ✅ Error handling middleware
- ✅ Clean code structure
- ✅ Well-commented code

---

## 🛠️ Available Commands

### Backend
```bash
# Development mode
npm run dev

# Production mode
npm start
```

### Frontend
```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🧪 Testing the Application

### Create Test User
1. Go to http://localhost:3000
2. Click "Register here"
3. Fill in details:
   - Name: John Doe
   - Email: john@example.com
   - Password: password123

### Create Test Note
1. Login with test user
2. Click "+ Add Note"
3. Enter title and content
4. Click "Create Note"

### Test CRUD Operations
- **Create:** Add new note
- **Read:** View notes on dashboard
- **Update:** Click edit on any note
- **Delete:** Click delete with confirmation

---

## 🔒 Security Best Practices

- ✅ Passwords hashed with bcrypt (10 salt rounds)
- ✅ JWT tokens with expiration (7 days)
- ✅ Environment variables for secrets
- ✅ Input validation with express-validator
- ✅ CORS enabled for frontend origin
- ✅ Password not returned in API responses
- ✅ User authorization checks on notes
- ✅ Error messages don't expose sensitive info

---

## 📱 Responsive Design

- Mobile: 320px and up
- Tablet: 768px and up
- Desktop: 1024px and up
- Bootstrap grid system for layouts
- Responsive navigation bar
- Mobile-optimized forms

---

## 🚨 Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check MONGODB_URI in .env
- Default: `mongodb://localhost:27017/notes-app`

### Port Already in Use
```bash
# Backend (Port 5000)
# Find and kill process or change PORT in .env

# Frontend (Port 3000)
# Vite will use next available port
```

### Token Issues
- Clear localStorage: DevTools > Application > localStorage > Clear all
- Re-login to get new token

### CORS Errors
- Ensure backend is running on http://localhost:5000
- Check CORS middleware in backend

---

## 📦 Dependencies

### Backend
- express: 4.18.2
- mongoose: 7.0.0
- bcryptjs: 2.4.3
- jsonwebtoken: 9.0.0
- dotenv: 16.0.3
- cors: 2.8.5
- express-validator: 7.0.0

### Frontend
- react: 18.2.0
- react-dom: 18.2.0
- react-router-dom: 6.11.0
- axios: 1.3.0
- bootstrap: 5.3.0
- react-bootstrap: 2.7.0
- date-fns: 2.29.0

---

## 🎯 Performance Optimization

- Lazy loading routes
- Optimized MongoDB queries with indexing
- State management with React hooks
- Image optimization
- CSS minification in production build
- API response caching possibilities

---

## 📄 License

ISC

---

## 👨‍💻 Author

Built as a production-ready note-taking application.

---

## 📞 Support

For issues or questions, check:
1. Console for error messages
2. Network tab (DevTools) for API calls
3. Backend server logs
4. MongoDB connection status

---

**Happy Note Taking! 📝**
