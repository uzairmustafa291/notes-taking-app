# Vercel Deployment Guide

## Prerequisites
- GitHub repository linked to Vercel
- MongoDB Atlas account (or your MongoDB URI)
- Vercel account

## Step-by-Step Deployment

### 1. Prepare Environment Variables

Add these environment variables in Vercel Project Settings:

```
MONGODB_URI = your_mongodb_connection_string
JWT_SECRET = your_secret_key_here
FRONTEND_URL = your_vercel_domain.vercel.app
NODE_ENV = production
```

### 2. Project Structure for Vercel

Your project is configured as:
```
/api              → Serverless API functions
/backend          → Backend source code (not deployed directly)
/frontend/dist    → Built frontend (deployed)
vercel.json       → Vercel configuration
```

### 3. Deploy via Git Push

Simply push to your repository:
```bash
git add .
git commit -m "Setup Vercel deployment"
git push origin main
```

Vercel will automatically:
1. Build the frontend: `npm run build` in `/frontend`
2. Deploy API from `/api/index.js`
3. Serve frontend from `/frontend/dist`

### 4. Verify Deployment

Check these endpoints:
- **API Health**: `https://your-domain.vercel.app/api/health`
- **Frontend**: `https://your-domain.vercel.app`
- **Auth Routes**: `https://your-domain.vercel.app/api/auth/[routes]`
- **Notes Routes**: `https://your-domain.vercel.app/api/notes/[routes]`

## Important Notes

- Make sure MONGODB_URI is accessible from Vercel's servers
- JWT_SECRET should be a strong random string
- CORS is already configured to accept requests from your frontend domain
- The API automatically detects if it's running in development or production

## Troubleshooting

**API returning 503 errors:**
- Check MongoDB connection string in environment variables
- Ensure MongoDB IP whitelist includes Vercel IPs (0.0.0.0/0)

**Frontend can't connect to API:**
- Verify FRONTEND_URL matches your actual domain
- Check browser console for CORS errors
- Ensure API endpoints are correctly formatted

**Build failing:**
- Check that all dependencies are in package.json
- Ensure frontend builds successfully locally
- Review build logs in Vercel dashboard

## Local Development

```bash
# Terminal 1: Backend
cd backend && npm run dev

# Terminal 2: Frontend
cd frontend && npm run dev
```

Both will run on localhost:5000 and localhost:3000 respectively.
