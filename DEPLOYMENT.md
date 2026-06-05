# 🚀 Deployment Guide - Lokesh Portfolio

This guide will help you deploy your portfolio to various platforms.

## 🌐 Render Deployment (Recommended)

### Prerequisites
- GitHub account with this repository
- MongoDB Atlas account (free tier available)

### Step 1: Setup MongoDB Atlas
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster
4. Create a database user
5. Get your connection string: `mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio`

### Step 2: Deploy Backend on Render
1. Go to [Render Dashboard](https://render.com)
2. Connect your GitHub account
3. Click "New" → "Web Service"
4. Select your repository: `main-portfolio`
5. Configure:
   - **Name**: `portfolio-backend-lokesh`
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`
   - **Environment Variables**:
     - `NODE_ENV`: `production`
     - `MONGODB_URI`: `your-mongodb-atlas-connection-string`
6. Click "Create Web Service"

### Step 3: Deploy Frontend on Render
1. Click "New" → "Static Site"
2. Select your repository: `main-portfolio`
3. Configure:
   - **Name**: `main-portfolio-lokesh`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`
4. Click "Create Static Site"

### Step 4: Update API URL
Update the API URL in `src/pages/HireMe.js`:
```javascript
const apiUrl = 'https://portfolio-backend-lokesh.onrender.com/api/hire';
```

## 📋 Manual Git Commands

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio deployment setup"

# Add remote repository
git remote add origin https://github.com/l0kesh-y/main-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## 🔧 Alternative Platforms

### Vercel + Railway
- **Frontend**: Deploy to Vercel (automatic with vercel.json)
- **Backend**: Deploy to Railway.app
- **Database**: MongoDB Atlas

### Netlify + Heroku
- **Frontend**: Deploy to Netlify (automatic with netlify.toml)
- **Backend**: Deploy to Heroku
- **Database**: MongoDB Atlas

### AWS
- **Frontend**: S3 + CloudFront
- **Backend**: EC2 or Lambda
- **Database**: DocumentDB or MongoDB Atlas

## 🌍 Environment Variables

### Production (.env)
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
```

### Development (.env)
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
```

## 🔒 Security Checklist

- [ ] Environment variables are secure
- [ ] CORS is configured for production domains
- [ ] Database credentials are not exposed
- [ ] HTTPS is enabled
- [ ] Rate limiting is implemented (optional)

## 📊 Performance Optimization

- [ ] Images are optimized
- [ ] Bundle size is under 100KB
- [ ] Lighthouse score > 90
- [ ] SEO meta tags are complete

## 🐛 Troubleshooting

### Common Issues
1. **CORS Error**: Update CORS origins in server.js
2. **API Not Found**: Check API URL in HireMe.js
3. **Database Connection**: Verify MongoDB URI
4. **Build Fails**: Check Node.js version compatibility

### Debug Commands
```bash
# Check build locally
npm run build

# Test backend locally
cd server && npm start

# Check logs on Render
# Go to your service dashboard and check logs
```

## 📞 Support

If you encounter issues:
1. Check the [GitHub Issues](https://github.com/l0kesh-y/main-portfolio/issues)
2. Contact: lokeshyuvaraj33@gmail.com
3. Check Render documentation

---

🎉 **Your portfolio should now be live at your Render URLs!**