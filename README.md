# 🚀 Lokesh Portfolio - Modern Full Stack Developer Portfolio

A premium, modern portfolio website showcasing my skills as a Full Stack Java Developer. Built with React.js frontend and Node.js/Express backend with MongoDB for contact form submissions.

## ✨ Features

- **Modern UI Design**: Premium dark/light theme with glassmorphism effects
- **Responsive Design**: Fully responsive across all devices
- **My Profiles Section**: Links to GitHub, LinkedIn, LeetCode, HackerRank, GeeksforGeeks
- **Projects Showcase**: Filterable project gallery with live demos
- **Credentials & Certifications**: Professional achievements and badges
- **Interactive Resume**: Downloadable PDF resume with detailed experience
- **Contact Form**: MongoDB-powered hire me form with email notifications
- **Smooth Animations**: Premium animations and transitions
- **SEO Optimized**: Meta tags and structured data

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **CSS3** - Custom styling with CSS variables
- **Responsive Design** - Mobile-first approach

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database for contact forms
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing

## 🚀 Live Demo

**Frontend**: [https://main-portfolio-lokesh.onrender.com](https://main-portfolio-lokesh.onrender.com)
**Backend API**: [https://portfolio-backend-lokesh.onrender.com](https://portfolio-backend-lokesh.onrender.com)

## 🏃‍♂️ Running Locally

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/l0kesh-y/main-portfolio.git
   cd main-portfolio
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

4. **Configure environment variables**
   ```bash
   cd server
   cp .env.example .env
   # Edit .env with your MongoDB URI
   ```

5. **Start the development servers**
   
   **Backend (Terminal 1):**
   ```bash
   cd server
   npm run dev
   ```
   
   **Frontend (Terminal 2):**
   ```bash
   npm start
   ```

6. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📦 Deployment

### Render Deployment

This project is configured for easy deployment on Render:

1. **Fork this repository**
2. **Connect to Render**
   - Go to [Render Dashboard](https://render.com)
   - Connect your GitHub account
   - Select this repository

3. **Deploy Frontend (Static Site)**
   - Service Type: Static Site
   - Build Command: `npm install && npm run build`
   - Publish Directory: `build`

4. **Deploy Backend (Web Service)**
   - Service Type: Web Service
   - Build Command: `cd server && npm install`
   - Start Command: `cd server && npm start`
   - Add Environment Variables:
     - `NODE_ENV`: production
     - `MONGODB_URI`: Your MongoDB connection string

5. **Setup MongoDB**
   - Use MongoDB Atlas (recommended)
   - Or deploy MongoDB on Render using Docker

### Environment Variables

#### Backend (.env)
```
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
```

## 📁 Project Structure

```
main-portfolio/
├── public/                 # Static files
├── src/
│   ├── components/        # Reusable components
│   ├── pages/            # Page components
│   ├── assets/           # Images and media
│   └── style.css         # Global styles
├── server/               # Backend API
│   ├── server.js         # Express server
│   ├── package.json      # Backend dependencies
│   └── .env.example      # Environment template
├── build/                # Production build
└── README.md
```

## 🎨 Customization

### Colors & Theme
- Edit CSS variables in `src/style.css`
- Modify `--primary`, `--accent` colors
- Adjust gradients and shadows

### Content
- **Personal Info**: Update `src/pages/Home.js`
- **Projects**: Edit `src/pages/Projects.js`
- **Experience**: Modify `src/pages/Resume.js`
- **Certifications**: Update `src/pages/Credentials.js`

### Profile Links
- Update social media links in `src/pages/Home.js`
- Modify profile statistics and URLs

## 📊 Performance

- **Lighthouse Score**: 95+ Performance
- **Bundle Size**: < 70KB (gzipped)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s

## 🔧 API Endpoints

### POST /api/hire
Submit a hire request form
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Tech Corp",
  "projectType": "Web Application",
  "budget": "₹50,000 - ₹1,00,000",
  "message": "Project description..."
}
```

### GET /api/contacts
Get all contact submissions (admin only)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: lokeshyuvaraj33@gmail.com
- **LinkedIn**: [linkedin.com/in/lokesh-y-6ba15628a](https://www.linkedin.com/in/lokesh-y-6ba15628a/)
- **GitHub**: [github.com/Lokesh777777](https://github.com/Lokesh777777)

---

⭐ **If you like this project, please give it a star!**