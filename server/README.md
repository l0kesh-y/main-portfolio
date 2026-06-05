# Portfolio Backend Server

Backend server for the Hire Me contact form using MongoDB.

## Setup

1. **Install MongoDB** (if not already installed):
   - Download from: https://www.mongodb.com/try/download/community
   - Or use MongoDB Atlas (cloud): https://www.mongodb.com/atlas

2. **Install dependencies**:
   ```bash
   cd server
   npm install
   ```

3. **Configure environment**:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your MongoDB connection string:
   ```
   MONGODB_URI=mongodb://localhost:27017/portfolio
   PORT=5000
   ```

   For MongoDB Atlas:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio
   ```

4. **Start the server**:
   ```bash
   npm start
   # or for development with auto-reload:
   npm run dev
   ```

## API Endpoints

### POST /api/hire
Submit a hire request.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Tech Corp",
  "projectType": "Web Application",
  "budget": "$5,000 - $10,000",
  "message": "I need a web app..."
}
```

### GET /api/contacts
Get all contact submissions (admin).

## MongoDB Schema

```javascript
{
  name: String (required),
  email: String (required),
  company: String,
  projectType: String,
  budget: String,
  message: String (required),
  createdAt: Date,
  status: 'new' | 'read' | 'replied'
}
```