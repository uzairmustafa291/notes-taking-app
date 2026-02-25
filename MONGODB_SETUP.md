# MongoDB Setup Guide

## Getting Your MongoDB Connection String

### Option 1: MongoDB Atlas (Cloud - Recommended)

1. **Create MongoDB Atlas Account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up for free account
   - Click "Create Project"

2. **Create a Cluster**
   - Click "Create Deployment"
   - Choose "M0 Sandbox" (FREE tier)
   - Select your region
   - Click "Create Deployment"
   - Wait 2-3 minutes for cluster to initialize

3. **Create Database User**
   - Go to "Database Access" in left menu
   - Click "Add New Database User"
   - Choose "Password" auth
   - Enter username and password (save these!)
   - Click "Add User"

4. **Add IP Whitelist**
   - Go to "Network Access" in left menu
   - Click "Add IP Address"
   - Select "Allow access from anywhere" (0.0.0.0/0)
   - Click "Confirm"

5. **Get Connection String**
   - Go back to "Databases"
   - Click "Connect" on your cluster
   - Choose "Drivers"
   - Copy the connection string
   - Replace `<username>` and `<password>` with your credentials
   - It should look like:
   ```
   mongodb+srv://username:password@cluster0.abc123.mongodb.net/notes-db?retryWrites=true&w=majority
   ```

---

## Setting Up Environment Variables

### For Local Development

1. **Edit `backend/.env.local`**
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/notes-db?retryWrites=true&w=majority
   JWT_SECRET=your_super_secret_key_here
   FRONTEND_URL=http://localhost:3000
   NODE_ENV=development
   ```

2. **Test locally**
   ```bash
   cd backend
   npm run dev
   ```
   You should see: `✅ MongoDB Connected: cluster0.abc123.mongodb.net`

### For Vercel Deployment

1. **Go to Vercel Dashboard**
   - Open https://vercel.com/dashboard
   - Select your project
   - Click "Settings"

2. **Add Environment Variables**
   - Click "Environment Variables"
   - Add these variables:
   
   | Key | Value |
   |-----|-------|
   | `MONGODB_URI` | `mongodb+srv://username:password@cluster.mongodb.net/notes-db?retryWrites=true&w=majority` |
   | `JWT_SECRET` | `your_super_secret_key_here` |
   | `FRONTEND_URL` | `your-vercel-domain.vercel.app` |
   | `NODE_ENV` | `production` |

3. **Redeploy**
   - Go to "Deployments"
   - Click "Redeploy" on the latest deployment
   - Wait for build to complete

---

## Troubleshooting

### ❌ "MONGODB_URI environment variable is not set"
**Solution:** Add MONGODB_URI to Vercel Environment Variables (see above)

### ❌ "Authentication failed"
**Solution:** 
- Check username and password in connection string
- Verify database user exists in MongoDB Atlas
- Check user permissions

### ❌ "Timeout connecting to MongoDB"
**Solution:**
- Go to MongoDB Atlas → Network Access
- Click "Edit" on the 0.0.0.0/0 rule
- Make sure it says "Allow access from anywhere"
- For Vercel IPs specifically, use: 76.32.63.0/24

### ❌ "Connection refused"
**Solution:**
- Verify cluster is running in MongoDB Atlas
- Check your internet connection
- Wait for cluster to fully initialize (2-3 minutes)

---

## Getting Your Credentials

**Username:** Use the one you created in "Database Access"

**Password:** Same as Database Access credentials (NOT your MongoDB account password)

**Database Name:** Can be any name (e.g., `notes-db`). MongoDB creates it automatically.

---

## Example MONGODB_URI

```
Before: mongodb+srv://<username>:<password>@cluster0.abc123.mongodb.net/notes-db?retryWrites=true&w=majority
After:  mongodb+srv://john:mypassword123@cluster0.abc123.mongodb.net/notes-db?retryWrites=true&w=majority
```

Replace:
- `<username>` → your database user username
- `<password>` → your database user password
- Keep everything else the same

---

## Test Your Connection

After setting up, test with:

```bash
cd backend
npm run dev
```

Look for this message:
```
✅ MongoDB Connected: cluster0.abc123.mongodb.net
```

If you see this, everything is working! 🎉
