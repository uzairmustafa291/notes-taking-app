# Production Deployment Checklist

## Backend Deployment (Heroku/Railway/Render)

1. **Update Environment Variables**
   ```
   MONGODB_URI=<production-mongodb-uri>
   JWT_SECRET=<strong-random-secret>
   NODE_ENV=production
   PORT=auto-assigned
   ```

2. **Create Procfile** (for Heroku)
   ```
   web: node server.js
   ```

3. **Update package.json scripts**
   ```json
   "start": "node server.js",
   "dev": "nodemon server.js"
   ```

4. **Deploy**
   ```bash
   git push heroku main
   ```

## Frontend Deployment (Vercel/Netlify)

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Update API URL** in axios config
   ```javascript
   const API_URL = 'https://your-backend-url/api';
   ```

3. **Deploy to Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

   Or connect GitHub repo to Vercel dashboard

## MongoDB Cloud Setup

1. **Sign up at MongoDB Atlas**
2. **Create cluster**
3. **Create database user**
4. **Whitelist IP address**
5. **Get connection string**
6. **Update MONGODB_URI**

## Security Hardening for Production

- Enable HTTPS only
- Set strong JWT_SECRET (min 32 characters)
- Enable MongoDB authentication
- Implement rate limiting
- Add request logging
- Set proper CORS origins
- Enable request validation
- Implement API versioning

---

For detailed deployment instructions, refer to platform-specific guides.
