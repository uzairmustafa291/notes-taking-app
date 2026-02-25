# Vercel Deployment - Step by Step Guide

## Prerequisites Checklist
- ✅ GitHub repository created and code pushed
- ✅ MongoDB Atlas account with connection string
- ✅ Vercel account

## Step 1: Sign In to Vercel
1. Go to https://vercel.com
2. Click "Sign Up" or "Log In"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

## Step 2: Import Your Project
1. Click "Add New..." → "Project"
2. In "Import Git Repository", search for: `notes-taking-app` (or your repo name)
3. Click on your repository to select it
4. Click "Import"

## Step 3: Configure Project Settings
1. **Project Name:** Keep as is (or change if desired)
2. **Framework Preset:** Select "Other" (since we have custom setup)
3. **Root Directory:** Leave empty (default)
4. Click "Continue"

## Step 4: Add Environment Variables
Before deploying, you MUST add these environment variables:

1. Click "Environment Variables"
2. Add each variable:

### **Variable 1: MONGODB_URI**
- **Name:** `MONGODB_URI`
- **Value:** Your MongoDB Atlas connection string
  - Format: `mongodb+srv://username:password@cluster.mongodb.net/notes-db?retryWrites=true&w=majority`
  - Get this from: MongoDB Atlas → Databases → Connect → Drivers
- Click "Add"

### **Variable 2: JWT_SECRET**
- **Name:** `JWT_SECRET`
- **Value:** Create a strong random string (e.g., use: https://generate-random.org/)
  - Example: `your_super_secret_key_abc123xyz789`
- Click "Add"

### **Variable 3: FRONTEND_URL**
- **Name:** `FRONTEND_URL`
- **Value:** Leave temporary: `https://notes-app.vercel.app`
  - (Update after first deployment with actual URL)
- Click "Add"

### **Variable 4: NODE_ENV**
- **Name:** `NODE_ENV`
- **Value:** `production`
- Click "Add"

## Step 5: Deploy
1. Click "Deploy"
2. Wait 2-5 minutes for build to complete
3. You'll see a success message with your deployment URL

## Step 6: Verify Deployment
After deployment completes:

1. **Check API Health:**
   - Go to: `https://your-domain.vercel.app/api/health`
   - Should see: `{"message":"API is running"}`

2. **Test Frontend:**
   - Go to: `https://your-domain.vercel.app`
   - Should see your Notes App login page

3. **Test Registration:**
   - Try creating an account
   - If successful, MongoDB is connected ✅

## Troubleshooting Deploy Errors

### ❌ Build Failed - "Cannot find module"
**Solution:**
- Vercel is trying to install dependencies
- Go to Project Settings → Build & Development Settings
- **Build Command:** `cd frontend && npm run build`
- **Output Directory:** `frontend/dist`
- Click Save and Redeploy

### ❌ Database Connection Error
**Solution:**
- Verify MONGODB_URI is correct in Environment Variables
- In MongoDB Atlas:
  - Go to Network Access
  - Click Edit on 0.0.0.0/0
  - Ensure it says "Allow access from anywhere"
  - Save changes
- Redeploy from Vercel

### ❌ API returning 503 errors
**Solution:**
- Check MongoDB connection in Vercel Logs
- Ensure MONGODB_URI, JWT_SECRET are set
- Redeploy function

### ❌ "Frontend not connecting to API"
**Solution:**
- Update `FRONTEND_URL` to your actual Vercel domain
- Example: `https://notes-taking-app.vercel.app`
- Redeploy

## After Successful Deployment

### Update FRONTEND_URL (Important!)
1. After first deployment, you'll get a domain URL
2. Go back to Vercel → Settings → Environment Variables
3. Update `FRONTEND_URL` to your actual domain
4. Click Save
5. Click "Redeploy" in Deployments tab

### Share Your App
Your Notes App is now live at: `https://your-domain.vercel.app`

## Production Checklist
- ✅ MONGODB_URI added to Vercel
- ✅ JWT_SECRET set to random secure key
- ✅ FRONTEND_URL updated to actual domain
- ✅ NODE_ENV set to `production`
- ✅ API health endpoint working
- ✅ Can register new users
- ✅ Can create/view notes

## Monitoring Deployment

**View Logs:**
1. Go to Vercel Dashboard
2. Select your project
3. Go to "Deployments"
4. Click latest deployment
5. View "Logs" tab for debugging

**Redeploy:**
1. In Deployments tab
2. Click "..." on latest deployment
3. Click "Redeploy"

## Getting Help

If something goes wrong:
1. Check Vercel deployment logs
2. Verify all environment variables are set
3. Check MongoDB connection string
4. Ensure GitHub push was successful
5. Try redeploying from Vercel dashboard

---

**Your app will be live once you follow these steps! 🚀**
