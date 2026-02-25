# 📚 API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication Header
```
Authorization: Bearer <JWT_TOKEN>
```

---

## Auth Endpoints

### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (201):**
```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "64c9f8e4a1b2c3d4e5f6g7h8",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Login User
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "64c9f8e4a1b2c3d4e5f6g7h8",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

---

## Note Endpoints (All require authentication)

### Get All Notes
```http
GET /notes
Authorization: Bearer <JWT_TOKEN>
```

**Response (200):**
```json
{
  "message": "Notes retrieved successfully",
  "count": 2,
  "notes": [
    {
      "_id": "64c9f8e4a1b2c3d4e5f6g7h8",
      "title": "My First Note",
      "content": "This is my first note content",
      "userId": "64c9f8e4a1b2c3d4e5f6g7h7",
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

### Create Note
```http
POST /notes
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "title": "My Note",
  "content": "Note content here"
}
```

**Response (201):**
```json
{
  "message": "Note created successfully",
  "note": {
    "_id": "64c9f8e4a1b2c3d4e5f6g7h8",
    "title": "My Note",
    "content": "Note content here",
    "userId": "64c9f8e4a1b2c3d4e5f6g7h7",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### Get Single Note
```http
GET /notes/:id
Authorization: Bearer <JWT_TOKEN>
```

**Response (200):**
```json
{
  "message": "Note retrieved successfully",
  "note": {
    "_id": "64c9f8e4a1b2c3d4e5f6g7h8",
    "title": "My Note",
    "content": "Note content here",
    "userId": "64c9f8e4a1b2c3d4e5f6g7h7",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### Update Note
```http
PUT /notes/:id
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "title": "Updated Title",
  "content": "Updated content"
}
```

**Response (200):**
```json
{
  "message": "Note updated successfully",
  "note": {
    "_id": "64c9f8e4a1b2c3d4e5f6g7h8",
    "title": "Updated Title",
    "content": "Updated content",
    "userId": "64c9f8e4a1b2c3d4e5f6g7h7",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:35:00.000Z"
  }
}
```

### Delete Note
```http
DELETE /notes/:id
Authorization: Bearer <JWT_TOKEN>
```

**Response (200):**
```json
{
  "message": "Note deleted successfully"
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "message": "Validation Error",
  "errors": [
    {
      "field": "email",
      "msg": "Please provide a valid email"
    }
  ]
}
```

### 401 Unauthorized
```json
{
  "message": "No token provided, authorization denied"
}
```

### 403 Forbidden
```json
{
  "message": "Not authorized to access this note"
}
```

### 404 Not Found
```json
{
  "message": "Note not found"
}
```

### 500 Internal Server Error
```json
{
  "message": "Internal Server Error"
}
```

---

## Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Server Error |

---

## Testing with cURL

### Register
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Get Notes
```bash
curl -X GET http://localhost:5000/api/notes \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Create Note
```bash
curl -X POST http://localhost:5000/api/notes \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Note",
    "content": "Note content"
  }'
```

---

## Rate Limiting & Best Practices

- No built-in rate limiting (add express-rate-limit for production)
- JWT tokens valid for 7 days
- Credentials should not be sent in URLs
- Always use HTTPS in production
- Implement request logging for debugging

---

For more details, check the code comments in the controller files.
