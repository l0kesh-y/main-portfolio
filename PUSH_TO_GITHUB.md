# 📤 Push to GitHub Repository

## Step-by-Step Commands

Run these commands in your terminal from the portfolio project directory:

```bash
# 1. Initialize git repository (if not already done)
git init

# 2. Add your GitHub repository as remote origin
git remote add origin https://github.com/l0kesh-y/main-portfolio.git

# 3. Add all files to staging
git add .

# 4. Create initial commit
git commit -m "🚀 Initial commit: Modern Full Stack Portfolio

✨ Features:
- Premium dark/light theme with glassmorphism effects
- My Profiles section (GitHub, LinkedIn, LeetCode, HackerRank, GeeksforGeeks)
- Projects showcase with filtering
- Credentials & certifications display
- Interactive resume with PDF download
- MongoDB-powered hire me contact form
- Fully responsive design
- SEO optimized
- Deployment ready for Render

🛠️ Tech Stack:
- Frontend: React 18, React Router, Lucide Icons
- Backend: Node.js, Express, MongoDB, Mongoose
- Styling: CSS3 with modern animations
- Deployment: Render, Netlify, Vercel ready"

# 5. Set main branch
git branch -M main

# 6. Push to GitHub
git push -u origin main
```

## Verification

After pushing, you should see:
- All files uploaded to: https://github.com/l0kesh-y/main-portfolio
- Repository ready for Render deployment
- README.md with complete documentation

## Next Steps - Render Deployment

1. **Go to Render**: https://render.com
2. **Connect GitHub account**
3. **Deploy Backend**:
   - Create Web Service
   - Connect repository: `l0kesh-y/main-portfolio`
   - Build Command: `cd server && npm install`
   - Start Command: `cd server && npm start`
   - Add environment variables:
     - `NODE_ENV`: `production`
     - `MONGODB_URI`: `your-mongodb-atlas-uri`

4. **Deploy Frontend**:
   - Create Static Site
   - Connect repository: `l0kesh-y/main-portfolio`
   - Build Command: `npm install && npm run build`
   - Publish Directory: `build`

## 🔗 Your Live URLs (after deployment)
- **Portfolio**: https://main-portfolio-lokesh.onrender.com
- **API**: https://portfolio-backend-lokesh.onrender.com

---

🎉 **Ready to deploy your legendary portfolio!**