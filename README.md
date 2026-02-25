# Notes Taking Application

A production-ready full-stack note-taking web application built with React, Node.js, Express, and MongoDB.

## 🌟 Features

- **User Authentication** - Secure JWT-based authentication with bcrypt password hashing
- **Note Management** - Create, read, update, and delete notes
- **Responsive Design** - Mobile-first Bootstrap 5 UI
- **Real-time Notifications** - Toast notifications for user feedback
- **Protected Routes** - Secured API endpoints and frontend routes
- **MVC Architecture** - Clean, scalable code structure
- **REST API** - RESTful API design principles

## 🛠 Tech Stack

- **Frontend**: React 18 + Vite
- **Backend**: Node.js + Express
- **Database**: MongoDB + Mongoose
- **Authentication**: JWT
- **Styling**: Bootstrap 5 + CSS3
- **API Client**: Axios

## 📁 Project Structure

```
notes-app/
├── backend/              # Node.js/Express backend
│   ├── config/          # Database configuration
│   ├── models/          # MongoDB schemas
│   ├── controllers/     # Business logic
│   ├── routes/          # API endpoints
│   ├── middleware/      # Auth & error handling
│   ├── server.js        # Express server
│   └── package.json
│
└── frontend/            # React frontend
    ├── src/
    │   ├── components/  # React components
    │   ├── pages/       # Page components
    │   ├── api/         # Axios configuration
    │   ├── styles/      # CSS modules
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    └── package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js v14+
- MongoDB running locally or Atlas account

### Install & Run

```bash
# Backend
cd backend
npm install
npm run dev          # Starts on port 5000

# Frontend (new terminal)
cd frontend
npm install
npm run dev          # Starts on port 3000
```

Open http://localhost:3000 in your browser.

## 📚 Documentation

- [Setup Guide](./SETUP_GUIDE.md) - Detailed installation and configuration
- [Quick Start](./QUICKSTART.md) - Get up and running in 5 minutes
- [API Documentation](./API_DOCS.md) - Complete API reference
- [Deployment](./DEPLOYMENT.md) - Production deployment guide

## 🔐 Security

- ✅ Passwords hashed with bcrypt (10 rounds)
- ✅ JWT tokens with 7-day expiration
- ✅ Input validation and sanitization
- ✅ CORS protection
- ✅ Secure error handling
- ✅ Environment variables for secrets

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Notes (Protected)
- `GET /api/notes` - Get all user notes
- `POST /api/notes` - Create note
- `PUT /api/notes/:id` - Update note
- `DELETE /api/notes/:id` - Delete note

## 🧪 Testing

1. Register a new account
2. Create, edit, and delete notes
3. Logout and login again
4. Verify data persistence

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for:
- Heroku deployment
- Vercel/Netlify frontend hosting
- MongoDB Atlas setup
- Environment configuration

## 📦 Dependencies

See `backend/package.json` and `frontend/package.json` for complete dependency list.

## 🤝 Contributing

Feel free to fork and submit pull requests for any improvements.

## 📄 License

ISC

## 👨‍💻 Author

Built as a modern, production-ready note-taking application.

---

**Ready to use! Start the dev servers and begin taking notes! 📝**
