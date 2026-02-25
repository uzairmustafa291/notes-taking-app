# 🚀 Quick Start Guide

## Prerequisites
- Node.js installed
- MongoDB running locally or cloud instance
- npm/yarn package manager

## ⚡ Quick Start (5 minutes)

### 1. Install Backend Dependencies
```bash
cd backend
npm install
```

### 2. Start MongoDB
```bash
# If local MongoDB
mongod

# Or use MongoDB Atlas (cloud)
# Update MONGODB_URI in .env with your connection string
```

### 3. Start Backend Server
```bash
npm run dev
# Server starts at http://localhost:5000
```

### 4. Open New Terminal - Install Frontend Dependencies
```bash
cd frontend
npm install
```

### 5. Start Frontend Server
```bash
npm run dev
# App starts at http://localhost:3000
```

---

## ✅ Check if Running

- Backend: Open terminal and check for "Server running on port 5000"
- Frontend: Browser opens automatically at http://localhost:3000

---

## 🧪 Test the App

1. **Register New Account**
   - Name: John Doe
   - Email: john@test.com
   - Password: password123

2. **Create Notes**
   - Click "+ Add Note"
   - Add title and content
   - Click "Create Note"

3. **Manage Notes**
   - Edit by clicking "Edit"
   - Delete by clicking "Delete"
   - Notes appear in grid format

---

## 🔄 Workflow

### Terminal 1: Backend
```bash
cd backend
npm run dev
```

### Terminal 2: Frontend
```bash
cd frontend
npm run dev
```

### Browser
```
http://localhost:3000
```

---

## 📝 Default Configuration

| Component | URL |
|-----------|-----|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:5000 |
| MongoDB | mongodb://localhost:27017/notes-app |

---

## 🛑 Stop Application

- Press `Ctrl + C` in both terminals
- Or close the terminal windows

---

## 📂 Key Files to Know

**Backend:**
- `server.js` - Main entry point
- `package.json` - Dependencies & scripts
- `.env` - Environment variables

**Frontend:**
- `src/main.jsx` - React entry point
- `src/App.jsx` - Main app component
- `package.json` - Dependencies & scripts

---

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| Port 5000 in use | Change PORT in backend/.env |
| Port 3000 in use | Vite uses next available port |
| MongoDB connection error | Ensure MongoDB is running |
| CORS errors | Verify backend is running on :5000 |
| Login fails | Check MongoDB, ensure user is registered |

---

## 💡 Tips

- Keep browser DevTools open (F12) for debugging
- Check console for error messages
- Backend logs show request details
- Toast notifications show user feedback

---

**You're all set! Happy coding! 🎉**
