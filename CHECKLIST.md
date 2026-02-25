# ✅ Installation & Setup Checklist

## 🎯 Pre-Requisites Check

Before starting, make sure you have:

- [ ] Node.js installed (check: `node --version`)
- [ ] npm installed (check: `npm --version`)
- [ ] MongoDB running locally OR MongoDB Atlas account
- [ ] A code editor (VS Code recommended)
- [ ] Browser (Chrome, Firefox, Safari, Edge)

---

## 📋 Installation Steps

### Step 1: Backend Setup (10 minutes)

- [ ] Open Terminal 1
- [ ] Navigate to backend folder:
  ```bash
  cd "c:\Users\lenovo\OneDrive\Desktop\notes copilot\backend"
  ```
- [ ] Install dependencies:
  ```bash
  npm install
  ```
- [ ] Wait for installation to complete
- [ ] Check that `.env` file exists (it should)
- [ ] Verify MongoDB is running locally on localhost:27017

### Step 2: Frontend Setup (10 minutes)

- [ ] Open Terminal 2
- [ ] Navigate to frontend folder:
  ```bash
  cd "c:\Users\lenovo\OneDrive\Desktop\notes copilot\frontend"
  ```
- [ ] Install dependencies:
  ```bash
  npm install
  ```
- [ ] Wait for installation to complete
- [ ] Check that `package.json` is present

### Step 3: Start Backend Server

- [ ] In Terminal 1, run:
  ```bash
  npm run dev
  ```
- [ ] Wait for message: "Server running on port 5000"
- [ ] You should see "MongoDB Connected: localhost"
- [ ] Keep this terminal open (don't close)

### Step 4: Start Frontend Server

- [ ] In Terminal 2, run:
  ```bash
  npm run dev
  ```
- [ ] Wait for Vite to start
- [ ] Browser should open automatically to http://localhost:3000
- [ ] If not, manually open http://localhost:3000

---

## 🧪 Testing Checklist

### Test 1: Registration

- [ ] On the login page, click "Register here"
- [ ] Fill in the form:
  - Name: John Doe
  - Email: john@test.com
  - Password: password123
  - Confirm: password123
- [ ] Click "Register"
- [ ] See "Registration successful" toast
- [ ] Automatically redirected to dashboard

### Test 2: Dashboard

- [ ] You're now on the Dashboard
- [ ] See "My Notes" heading
- [ ] See "+ Add Note" button
- [ ] See "No notes yet" message

### Test 3: Create Note

- [ ] Click "+ Add Note" button
- [ ] Modal appears
- [ ] Fill in:
  - Title: "My First Note"
  - Content: "This is my first note content"
- [ ] Click "Create Note"
- [ ] See "Note created successfully" toast
- [ ] Modal closes
- [ ] Note appears on dashboard

### Test 4: Create More Notes

- [ ] Click "+ Add Note" again
- [ ] Create another note:
  - Title: "Shopping List"
  - Content: "Milk, Bread, Eggs"
- [ ] Click "Create Note"
- [ ] See 2 notes on dashboard

### Test 5: Edit Note

- [ ] On any note card, click "Edit" button
- [ ] Modal opens with current content
- [ ] Change the title to: "My Updated Note"
- [ ] Change content to "Updated content here"
- [ ] Click "Update Note"
- [ ] See "Note updated successfully" toast
- [ ] Note updated on dashboard

### Test 6: Delete Note

- [ ] Click "Delete" button on any note
- [ ] Confirmation modal appears
- [ ] Click "Delete" to confirm
- [ ] See "Note deleted successfully" toast
- [ ] Note removed from dashboard

### Test 7: Logout

- [ ] Click "Logout" button in navbar
- [ ] Redirected to login page
- [ ] localStorage should be cleared

### Test 8: Login

- [ ] On login page, enter:
  - Email: john@test.com
  - Password: password123
- [ ] Click "Login"
- [ ] See "Login successful" toast
- [ ] Redirected to dashboard
- [ ] Your previously created notes are there

### Test 9: Protected Routes

- [ ] Logout again
- [ ] Manually try to visit: http://localhost:3000/dashboard
- [ ] Should redirect to login page

---

## 🔍 Verification Checklist

### Backend Verification

- [ ] Terminal shows "Server running on port 5000"
- [ ] "MongoDB Connected" message appears
- [ ] No errors in console
- [ ] http://localhost:5000/api/health returns success
- [ ] Can see logs for each API call

### Frontend Verification

- [ ] App loads at http://localhost:3000
- [ ] No errors in browser console (F12)
- [ ] Can see all components rendering
- [ ] Bootstrap styles are applied
- [ ] Responsive design works

### Database Verification

- [ ] Notes persist after refresh
- [ ] Each user only sees their own notes
- [ ] Timestamps are saved correctly
- [ ] MongoDB has data in collections

---

## 🐛 Troubleshooting Guide

### Problem: "Port 5000 already in use"

**Solution:**
```bash
# Find process on port 5000
netstat -ano | findstr :5000

# Kill the process (replace PID)
taskkill /PID <PID> /F

# Try npm run dev again
npm run dev
```

### Problem: "MongoDB connection refused"

**Solution:**
- Check if MongoDB is running
- If using local MongoDB: `mongod` in another terminal
- If using Atlas: Update MONGODB_URI in backend/.env

### Problem: "npm install taking too long"

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Try install again
npm install
```

### Problem: "Can't register or login"

**Solution:**
- Check backend console for errors
- Check browser console (F12)
- Verify MongoDB is running
- Try refreshing page

### Problem: "Notes not showing after login"

**Solution:**
- Check if browser can access http://localhost:5000
- Check CORS settings in backend/server.js
- Clear browser cache (Ctrl+Shift+Delete)
- Try logout and login again

### Problem: "Form validation errors"

**Solution:**
- Check error message in toast
- Ensure password is at least 6 characters
- Ensure passwords match in registration
- Use valid email format

---

## 📊 Expected Behavior

### Initial Load
- Login or Register page shows
- Form fields are visible
- Buttons are clickable

### After Registration
- Token stored in localStorage
- User redirected to dashboard
- Dashboard shows "No notes yet"

### After Creating Note
- Toast shows success message
- Note appears in grid
- Page shows 1 note

### After Multiple Notes
- Notes appear in grid layout
- Most recent note is first
- Each note has edit and delete buttons

### After Logout
- localStorage is cleared
- Token is removed
- User redirected to login page

### After Login Again
- User authenticated
- Dashboard shows all previous notes
- Notes data is preserved

---

## 📞 Debugging Commands

### Check Node Version
```bash
node --version
```
Expected: v14 or higher

### Check npm Version
```bash
npm --version
```
Expected: v6 or higher

### Start Backend with Verbose Logging
```bash
cd backend
npm run dev
```
Look for: "Server running on port 5000"

### Check MongoDB Connection
```bash
mongo
```
or
```bash
mongosh
```
Then:
```
show databases
use notes-app
show collections
db.users.find().pretty()
db.notes.find().pretty()
```

### Check Network Requests
- Open browser DevTools: F12
- Go to Network tab
- Perform any action
- See requests and responses

---

## ✨ Success Indicators

You'll know everything is working when:

✅ Backend terminal shows "Server running on port 5000"
✅ Frontend browser shows app at localhost:3000
✅ Can register new account
✅ Can create notes
✅ Can see notes on dashboard
✅ Can edit notes
✅ Can delete notes
✅ Can logout/login
✅ Notes persist after refresh
✅ No errors in console

---

## 🚀 Ready for Development

Once all above is working:

- [ ] You can start modifying code
- [ ] Backend changes auto-reload with nodemon
- [ ] Frontend changes auto-reload with Vite HMR
- [ ] Test changes in real-time

---

## 📝 Common Tasks

### Add Existing Notes to Dashboard
```bash
# Already done - just login with any existing account
```

### Reset All Data
```bash
# In MongoDB
db.users.deleteMany({})
db.notes.deleteMany({})
```

### Change Backend Port
Edit backend/.env:
```
PORT=3001
```
Then restart backend

### Change Frontend Port
Edit frontend/vite.config.js:
```
port: 3001
```
Then restart frontend

---

## 📚 Documentation Location

Access documentation in order:

1. **START_HERE.md** ← Read first
2. **QUICKSTART.md** ← Quick setup
3. **SETUP_GUIDE.md** ← Detailed setup
4. **API_DOCS.md** ← API reference
5. **COMMANDS.md** ← Commands reference

---

## 🎓 Learning Path

To understand the project:

1. Read PROJECT_SUMMARY.md
2. Read ARCHITECTURE.md
3. Review FILE_STRUCTURE.md
4. Look at backend/server.js
5. Look at frontend/src/App.jsx
6. Explore individual components

---

## ✅ Final Checklist

- [ ] Node.js and npm installed
- [ ] MongoDB is running
- [ ] Backend dependencies installed
- [ ] Frontend dependencies installed
- [ ] Backend server running on port 5000
- [ ] Frontend server running on port 3000
- [ ] App loads at http://localhost:3000
- [ ] Can register new account
- [ ] Can create, edit, delete notes
- [ ] Can logout and login
- [ ] No errors in console/terminal

---

## 🎉 You're All Set!

Everything is ready to use. Just follow the checklist above and start building!

**Questions?** Check the documentation files.

**Need help?** Review the troubleshooting section.

**Ready to code?** Start with the code in backend/ and frontend/

---

**Happy coding! 🚀📝**
