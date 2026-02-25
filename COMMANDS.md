# 📋 Complete Command Reference

## 🚀 Installation

### Install All Dependencies
```bash
npm run install-all
```

### Install Backend Only
```bash
cd backend
npm install
```

### Install Frontend Only
```bash
cd frontend
npm install
```

---

## 🏃 Running Application

### Start Backend Server
```bash
cd backend
npm run dev
```
**Output:** Server running on port 5000

### Start Frontend Server
```bash
cd frontend
npm run dev
```
**Output:** App runs on http://localhost:3000

### Both Servers (Recommended)
Open two terminal windows:

**Terminal 1:**
```bash
cd backend && npm run dev
```

**Terminal 2:**
```bash
cd frontend && npm run dev
```

---

## 🏗️ Building for Production

### Build Frontend
```bash
cd frontend
npm run build
```
Creates optimized build in `frontend/dist/`

### Preview Production Build
```bash
cd frontend
npm run preview
```

---

## 🧹 Cleanup

### Remove node_modules
```bash
# Backend
cd backend && rm -r node_modules

# Frontend
cd frontend && rm -r node_modules
```

### Clear Cache
```bash
# npm cache
npm cache clean --force
```

---

## 🔍 Debugging

### Check Backend Server Status
```bash
curl http://localhost:5000/api/health
```

### View Backend Logs
```bash
cd backend
npm run dev
# Logs appear in terminal
```

### View Frontend Console
Open browser DevTools: `F12` → Console tab

### Check MongoDB Connection
```bash
# In backend server logs, look for:
# "MongoDB Connected: localhost" or connection URL
```

---

## 🧪 Testing with cURL

### Register User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Test User",
    "email":"test@example.com",
    "password":"password123"
  }'
```

### Login User
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email":"test@example.com",
    "password":"password123"
  }'
```

### Get Notes (Replace TOKEN with JWT)
```bash
curl -X GET http://localhost:5000/api/notes \
  -H "Authorization: Bearer TOKEN"
```

### Create Note (Replace TOKEN)
```bash
curl -X POST http://localhost:5000/api/notes \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title":"My Note",
    "content":"Note content here"
  }'
```

---

## 📊 Database Commands

### Connect to Local MongoDB
```bash
mongo
# or
mongosh
```

### View Databases
```bash
show databases
```

### Use Notes App Database
```bash
use notes-app
```

### View Collections
```bash
show collections
```

### Query Users
```bash
db.users.find().pretty()
```

### Query Notes
```bash
db.notes.find().pretty()
```

### Delete All Notes
```bash
db.notes.deleteMany({})
```

### Delete All Users
```bash
db.users.deleteMany({})
```

---

## 🔑 Environment Setup

### Backend .env Template
```bash
MONGODB_URI=mongodb://localhost:27017/notes-app
PORT=5000
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
NODE_ENV=development
```

### Update Backend .env
```bash
cd backend
# Edit .env file with your values
nano .env  # or use your editor
```

---

## 🐛 Troubleshooting Commands

### Check if Port is in Use
```bash
# Windows
netstat -ano | findstr :5000

# macOS/Linux
lsof -i :5000
```

### Kill Process on Port
```bash
# Windows
taskkill /PID <PID> /F

# macOS/Linux
kill -9 <PID>
```

### Verify Node Installation
```bash
node --version
npm --version
```

### Check MongoDB Connection
```bash
# From backend directory
node -e "require('mongoose').connect('mongodb://localhost:27017/notes-app').then(() => console.log('MongoDB Connected')).catch(e => console.log('MongoDB Error:', e))"
```

---

## 📦 Package Updates

### Check Outdated Packages
```bash
# Backend
cd backend && npm outdated

# Frontend
cd frontend && npm outdated
```

### Update Packages
```bash
# Backend
cd backend && npm update

# Frontend
cd frontend && npm update
```

---

## 🚢 Deployment Commands

### Build Everything for Production
```bash
# Backend is ready (no build needed)
cd backend && npm run start

# Frontend
cd frontend && npm run build
```

### Create Production Env Files
```bash
# Backend
cp backend/.env backend/.env.production
# Edit .env.production with production values

# Frontend
cp frontend/.env frontend/.env.production
# Edit .env.production with production API URL
```

---

## 🔗 Common URLs

| Service | URL |
|---------|-----|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:5000 |
| Backend Health | http://localhost:5000/api/health |
| MongoDB Local | mongodb://localhost:27017 |

---

## 💾 Backup Data

### Export Notes
```bash
mongoexport --db notes-app --collection notes --out notes_backup.json
```

### Import Notes
```bash
mongoimport --db notes-app --collection notes --file notes_backup.json
```

---

## ✨ Code Formatting (Optional)

### Install Prettier
```bash
cd backend && npm install --save-dev prettier
cd ../frontend && npm install --save-dev prettier
```

### Format Code
```bash
# Backend
cd backend && npx prettier --write .

# Frontend
cd frontend && npx prettier --write .
```

---

## 🔓 Log Out

Clear authentication:
```bash
# In browser DevTools Console:
localStorage.clear()
```

---

## 🆘 Need Help?

1. Check `SETUP_GUIDE.md` for detailed setup
2. Check `API_DOCS.md` for API reference
3. Check `QUICKSTART.md` for quick start
4. Review error messages in console
5. Check MongoDB connection
6. Verify environment variables

---

**All commands reference! Use this for quick lookup. 📚**
