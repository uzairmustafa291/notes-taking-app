# 🏗️ Application Architecture Overview

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                          USER BROWSER                            │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │              FRONTEND (React + Vite)                       │ │
│  │  ┌──────────────────────────────────────────────────────┐ │ │
│  │  │           React Router                               │ │ │
│  │  │  ┌─────────────────────────────────────────────────┐│ │ │
│  │  │  │ LoginPage    RegisterPage    DashboardPage    ││ │ │
│  │  │  │ (Auth)       (Auth)          (Protected)       ││ │ │
│  │  │  └─────────────────────────────────────────────────┘│ │ │
│  │  └──────────────────────────────────────────────────────┘ │ │
│  │                                                            │ │
│  │  ┌──────────────────────────────────────────────────────┐ │ │
│  │  │           Components                                │ │ │
│  │  │  Navigation, NoteCard, Modals, Toast              │ │ │
│  │  └──────────────────────────────────────────────────────┘ │ │
│  │                                                            │ │
│  │  ┌──────────────────────────────────────────────────────┐ │ │
│  │  │           Axios API Client                          │ │ │
│  │  │  - JWT Token Management                            │ │ │
│  │  │  - Request/Response Interceptors                   │ │ │
│  │  │  - Error Handling                                  │ │ │
│  │  └──────────────────────────────────────────────────────┘ │ │
│  └────────────────────────────────────────────────────────────┘ │
│                          Port: 3000                            │
└─────────────────────────────────────────────────────────────────┘
                                 │
                    HTTP/HTTPS   │  REST API Calls
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                    BACKEND (Node.js + Express)                  │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │              API Routes                                    │ │
│  │  ┌──────────────────────────────────────────────────────┐ │ │
│  │  │ Auth Routes          Note Routes                     │ │ │
│  │  │ POST   /auth/register │ GET    /notes              │ │ │
│  │  │ POST   /auth/login    │ POST   /notes              │ │ │
│  │  │                       │ PUT    /notes/:id          │ │ │
│  │  │                       │ DELETE /notes/:id          │ │ │
│  │  └──────────────────────────────────────────────────────┘ │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │         Controllers (Business Logic)                       │ │
│  │  ┌──────────────────────────────────────────────────────┐ │ │
│  │  │ authController            noteController            │ │ │
│  │  │ - Register                - Create Note             │ │ │
│  │  │ - Login                   - Get Notes               │ │ │
│  │  │ - Token Generation        - Update Note             │ │ │
│  │  │                           - Delete Note             │ │ │
│  │  └──────────────────────────────────────────────────────┘ │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │            Middleware                                      │ │
│  │  ┌──────────────────────────────────────────────────────┐ │ │
│  │  │ JWT Authentication      Error Handling              │ │ │
│  │  │ - Token Verification    - Validation Errors         │ │ │
│  │  │ - User Extraction       - Server Errors             │ │ │
│  │  │                         - Database Errors           │ │ │
│  │  └──────────────────────────────────────────────────────┘ │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │              Models (Schemas)                              │ │
│  │  ┌──────────────────────────────────────────────────────┐ │ │
│  │  │ User Model               Note Model                 │ │ │
│  │  │ - name                   - title                    │ │ │
│  │  │ - email (unique)         - content                  │ │ │
│  │  │ - password (hashed)      - userId (FK)             │ │ │
│  │  │ - timestamps             - timestamps              │ │ │
│  │  └──────────────────────────────────────────────────────┘ │ │
│  └────────────────────────────────────────────────────────────┘ │
│                          Port: 5000                             │
└─────────────────────────────────────────────────────────────────┘
                                 │
                    MongoDB     │  Mongoose ODM
                    Driver      │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                    DATABASE (MongoDB)                            │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                    notes-app (Database)                    │ │
│  │  ┌──────────────────────────────────────────────────────┐ │ │
│  │  │ users collection          notes collection          │ │ │
│  │  │ ┌────────────────────┐   ┌──────────────────────┐  │ │ │
│  │  │ │ _id: ObjectId      │   │ _id: ObjectId        │  │ │ │
│  │  │ │ name: string       │   │ title: string        │  │ │ │
│  │  │ │ email: string      │   │ content: string      │  │ │ │
│  │  │ │ password: hashed   │   │ userId: ObjectId(FK) │  │ │ │
│  │  │ │ createdAt: Date    │   │ createdAt: Date      │  │ │ │
│  │  │ │ updatedAt: Date    │   │ updatedAt: Date      │  │ │ │
│  │  │ └────────────────────┘   └──────────────────────┘  │ │ │
│  │  └──────────────────────────────────────────────────────┘ │ │
│  └────────────────────────────────────────────────────────────┘ │
│  Default: mongodb://localhost:27017/notes-app                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Authentication Flow

```
┌─────────────┐
│   User      │
└──────┬──────┘
       │ 1. Register/Login Credentials
       │
       ▼
    ┌──────────────────────┐
    │ Frontend             │
    │ (React)              │
    └──────────┬───────────┘
               │
               │ 2. POST /auth/register or /auth/login
               │
               ▼
    ┌──────────────────────┐
    │ Backend              │
    │ authController       │
    │ - Validate input     │
    │ - Check credentials  │
    │ - Generate JWT       │
    └──────────┬───────────┘
               │
               │ 3. JWT Token Returned
               │
               ▼
    ┌──────────────────────┐
    │ Frontend             │
    │ - Store JWT in       │
    │   localStorage       │
    │ - Redirect to        │
    │   Dashboard          │
    └──────────┬───────────┘
               │
               │ 4. API Requests with JWT
               │    Authorization: Bearer <token>
               │
               ▼
    ┌──────────────────────┐
    │ Backend              │
    │ Middleware           │
    │ - Verify JWT         │
    │ - Extract User ID    │
    │ - Allow Request      │
    └──────────┬───────────┘
               │
               │ 5. Process Request (CRUD)
               │
               ▼
    ┌──────────────────────┐
    │ MongoDB              │
    │ - Query based on     │
    │   userId             │
    │ - Return user data   │
    └──────────┬───────────┘
               │
               │ 6. Response
               │
               ▼
    ┌──────────────────────┐
    │ Frontend             │
    │ - Display data       │
    │ - Update UI          │
    │ - Show notifications │
    └──────────────────────┘
```

---

## Data Flow: Creating a Note

```
User Input
   │
   ▼
┌──────────────────────────────────┐
│ DashboardPage Component          │
│ - Title & Content Input          │
│ - Add Note Button                │
└────────┬─────────────────────────┘
         │
         │ Opens AddNoteModal
         │
         ▼
┌──────────────────────────────────┐
│ AddNoteModal Component           │
│ - Form Validation                │
│ - Calls notesAPI.createNote()    │
└────────┬─────────────────────────┘
         │
         │ POST /api/notes
         │ { title, content }
         │
         ▼
┌──────────────────────────────────┐
│ Backend: Express Server          │
│ 1. Middleware: JWT verification  │
│ 2. Controller: noteController    │
│    - Validate input              │
│    - Create note object          │
│    - Set userId from token       │
└────────┬─────────────────────────┘
         │
         │ note.save()
         │
         ▼
┌──────────────────────────────────┐
│ MongoDB Database                 │
│ - Insert document to notes       │
│   collection                     │
│ - Return saved note with _id     │
└────────┬─────────────────────────┘
         │
         │ Response: 201 Created
         │ { message, note }
         │
         ▼
┌──────────────────────────────────┐
│ Frontend: Axios                  │
│ - Receive response               │
│ - Call onNoteAdded callback      │
└────────┬─────────────────────────┘
         │
         │ Update state
         │
         ▼
┌──────────────────────────────────┐
│ DashboardPage Component          │
│ - Add note to state              │
│ - Re-render with new note        │
│ - Close modal                    │
│ - Show success toast             │
└──────────────────────────────────┘
```

---

## Component Hierarchy

```
App
├── Navigation
│   ├── Navbar
│   └── Logout Button
│
├── Routes
│   ├── /login → LoginPage
│   │   ├── Form (email, password)
│   │   └── Link to Register
│   │
│   ├── /register → RegisterPage
│   │   ├── Form (name, email, password)
│   │   └── Link to Login
│   │
│   └── /dashboard → ProtectedRoute → DashboardPage
│       ├── Header with "+ Add Note" button
│       ├── AddNoteModal
│       │   └── Form (title, content)
│       │
│       ├── Grid of NoteCards
│       │   ├── NoteCard 1
│       │   │   ├── Title & Content
│       │   │   ├── Meta (date)
│       │   │   ├── Edit Button → EditNoteModal
│       │   │   └── Delete Button → DeleteConfirmation
│       │   │
│       │   ├── NoteCard 2
│       │   └── ...
│       │
│       ├── EditNoteModal
│       │   └── Form (pre-filled title, content)
│       │
│       └── DeleteConfirmation
│           └── Confirm/Cancel buttons
│
└── ToastNotification Provider
    └── Toast notifications (success/error/info)
```

---

## State Management Flow

```
Frontend State Structure:

DashboardPage
├── notes: []                    # All user notes
├── loading: boolean             # Fetching state
├── showAddModal: boolean        # Add modal visibility
├── showEditModal: boolean       # Edit modal visibility
├── showDeleteModal: boolean     # Delete modal visibility
├── selectedNote: object         # Currently editing
├── deleteLoading: boolean       # Delete button loading
│
localStorage
├── token: string                # JWT token
└── user: object                 # User info (name, email)
```

---

## Error Handling Flow

```
Frontend Error → Backend Error → Response

1. Network Error
   ├── Frontend catches with try-catch
   ├── Shows error toast
   └── Logs to console

2. Validation Error (400)
   ├── Backend validates input
   ├── Returns error array
   ├── Frontend displays in toast
   └── Form stays open

3. Authentication Error (401)
   ├── Backend checks JWT
   ├── Frontend intercepts
   ├── Clears localStorage
   ├── Redirects to login
   └── Shows "Session expired" message

4. Authorization Error (403)
   ├── User tries to access other's note
   ├── Backend checks userId
   ├── Returns 403 Forbidden
   ├── Frontend shows error toast
   └── Note action prevented

5. Server Error (500)
   ├── Unexpected server error
   ├── Backend logs error
   ├── Returns generic message
   ├── Frontend shows "Something went wrong"
   └── User can retry
```

---

## Security Layers

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend Security                    │
│  ├─ Protected Routes (ProtectedRoute component)        │
│  ├─ JWT stored in localStorage                         │
│  ├─ Input field validation                             │
│  └─ Form submission validation                         │
└─────────────────────────────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────┐
│                    Network Security                     │
│  ├─ HTTPS in production                                │
│  ├─ CORS enabled for authorized origins               │
│  ├─ API requests include Authorization header         │
│  └─ Axios interceptor adds token to all requests      │
└─────────────────────────────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────┐
│                    Backend Security                     │
│  ├─ JWT verification middleware                        │
│  ├─ User ID extraction from token                      │
│  ├─ Input validation with express-validator           │
│  ├─ Authorization checks (userId matching)             │
│  ├─ Password hashing with bcrypt                       │
│  └─ Error handling without info leakage               │
└─────────────────────────────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────┐
│                    Database Security                    │
│  ├─ MongoDB connection string in .env                  │
│  ├─ Mongoose schema validation                         │
│  ├─ Unique index on email                              │
│  ├─ Query filtering by userId                          │
│  ├─ Proper indexing for performance                    │
│  └─ No direct shell access needed                      │
└─────────────────────────────────────────────────────────┘
```

---

## Deployment Architecture

```
Production Setup:

┌───────────────────────────────────────────────────────┐
│                    CDN/Hosting                        │
│  (Vercel, Netlify, AWS Cloudfront)                   │
│  ├─ Static React build                               │
│  └─ Served at custom domain                          │
└─────────────┬───────────────────────────────────────┘
              │
              │ API Requests
              ▼
┌───────────────────────────────────────────────────────┐
│            Backend Hosting                            │
│  (Heroku, Railway, Render, AWS)                      │
│  ├─ Node.js + Express Server                         │
│  ├─ Environment variables configured                 │
│  └─ Auto-scaling if needed                           │
└─────────────┬───────────────────────────────────────┘
              │
              │ Database Connection
              ▼
┌───────────────────────────────────────────────────────┐
│            MongoDB Atlas (Cloud)                      │
│  ├─ Managed MongoDB service                          │
│  ├─ Automatic backups                                │
│  ├─ Redundancy & failover                            │
│  └─ Secure connection string                         │
└───────────────────────────────────────────────────────┘
```

---

## Request/Response Cycle

```
1. Frontend makes request:
   ┌────────────────────────────────┐
   │ axios.post('/notes', {         │
   │   title: 'My Note',            │
   │   content: 'Content here'      │
   │ })                             │
   └────────────────────────────────┘
                  │
                  │ Interceptor adds Authorization header
                  │
                  ▼
   ┌────────────────────────────────┐
   │ POST /api/notes                │
   │ Authorization: Bearer <token>  │
   │ {title, content}               │
   └────────────────────────────────┘

2. Backend receives request:
   ┌────────────────────────────────┐
   │ Express receives request       │
   │ CORS middleware checks origin  │
   │ bodyParser processes JSON      │
   │ Auth middleware verifies JWT   │
   │ Route handler calls controller │
   └────────────────────────────────┘

3. Controller processes:
   ┌────────────────────────────────┐
   │ Validate input                 │
   │ Create note object             │
   │ Set userId from JWT            │
   │ Save to MongoDB                │
   │ Return success response        │
   └────────────────────────────────┘

4. Frontend receives response:
   ┌────────────────────────────────┐
   │ response.data = {              │
   │   "message": "Created",        │
   │   "note": { complete note }    │
   │ }                              │
   │ Update component state         │
   │ Re-render with new note        │
   │ Show success toast             │
   └────────────────────────────────┘
```

---

**Architecture complete and ready for production! 🏗️**
