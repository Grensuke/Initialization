# Backend & Frontend Authentication Setup

## Backend Setup

### 1. Install Dependencies

Navigate to the backend directory and install required packages:

```bash
cd backend
npm install bcryptjs cors
```

This adds the missing dependencies to your existing setup (express, mongoose, dotenv, nodemon).

### 2. Environment Configuration

Create a `.env` file in the backend directory with the following variables:

```env
MONGODB_URI=mongodb://localhost:27017/aeturnus
JWT_SECRET=your-secret-key-change-this-in-production
PORT=5000
```

**Important**: 
- Change `JWT_SECRET` to a strong random string in production
- Make sure MongoDB is running locally or update `MONGODB_URI` with your MongoDB connection string

### 3. Project Structure

The backend now has the following structure:

```
backend/
├── models/
│   └── User.js          (User schema with password hashing)
├── routes/
│   └── auth.js          (Authentication endpoints)
├── server.js            (Main server file with CORS and routes)
├── package.json         (Updated with new dependencies)
└── .env.example         (Environment variables template)
```

### 4. Authentication Endpoints

**POST /api/auth/register**
- Body: `{ email, password, confirmPassword }`
- Returns: JWT token and user info
- Creates new user account

**POST /api/auth/login**
- Body: `{ email, password }`
- Returns: JWT token and user info
- Authenticates existing user

**POST /api/auth/verify**
- Body: `{ token }`
- Returns: User info if token is valid
- Verifies JWT token

### 5. Starting the Backend

```bash
cd backend
npm start
```

Server will run on `http://localhost:5000`

---

## Frontend Setup

### 1. API Service

Created `src/services/api.js` with:
- `authAPI.register()` - Register new user
- `authAPI.login()` - Login user
- `authAPI.logout()` - Clear stored credentials
- `authAPI.getToken()` - Get stored JWT token
- `authAPI.getUser()` - Get stored user info
- `authAPI.isAuthenticated()` - Check if user is logged in

### 2. Updated Components

**Login Page (`src/pages/Login.jsx`)**
- Connected to backend login endpoint
- Stores JWT token and user info in localStorage
- Shows loading state while logging in
- Navigates to dashboard on success

**SignUp Page (`src/pages/SignUp.jsx`)**
- Connected to backend registration endpoint
- Frontend validation (password matching, length)
- Stores JWT token and user info in localStorage
- Shows loading state while signing up
- Navigates to onboarding on success

### 3. Frontend Project Structure

```
frontend/src/
├── services/
│   └── api.js           (API calls and auth management)
├── pages/
│   ├── Login.jsx        (Updated with API integration)
│   ├── SignUp.jsx       (Updated with API integration)
│   ├── Auth.css         (Styling for auth pages)
│   └── ...other pages
└── ...
```

---

## How It Works

### Registration Flow
1. User fills email, password, confirm password on SignUp page
2. Frontend validates inputs
3. Frontend sends POST to `/api/auth/register`
4. Backend hashes password with bcryptjs
5. Backend stores user in MongoDB
6. Backend returns JWT token
7. Frontend stores token and user info in localStorage
8. Frontend navigates to `/onboard`

### Login Flow
1. User fills email and password on Login page
2. Frontend validates inputs
3. Frontend sends POST to `/api/auth/login`
4. Backend retrieves user from MongoDB
5. Backend compares password with bcrypt
6. Backend returns JWT token if valid
7. Frontend stores token and user info in localStorage
8. Frontend navigates to `/dashboard`

---

## Authentication Usage in Other Components

To check if user is authenticated in other pages:

```jsx
import { authAPI } from '../services/api'

// Check if logged in
if (authAPI.isAuthenticated()) {
  const user = authAPI.getUser()
  const token = authAPI.getToken()
  // Use user data
}

// Logout
authAPI.logout()
```

---

## Testing

### Test Registration
1. Navigate to `http://localhost:5173/signup`
2. Enter email, password, confirm password
3. Click "Sign Up"
4. Should navigate to `/onboard` if successful

### Test Login
1. Navigate to `http://localhost:5173/login`
2. Enter email and password (from registration)
3. Click "Login"
4. Should navigate to `/dashboard` if successful

---

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check `MONGODB_URI` in `.env` is correct
- Try: `mongod` in a separate terminal

### CORS Error
- Make sure backend is running on port 5000
- Check frontend origin is `http://localhost:5173`
- Update `cors` origin in `backend/server.js` if needed

### Token Storage
- Tokens are stored in `localStorage`
- Check browser DevTools > Application > Local Storage
- Clear localStorage if testing new registrations

### Backend Port Already in Use
- Change `PORT` in `.env`
- Or kill process: `lsof -ti:5000 | xargs kill -9` (macOS/Linux)

---

## Next Steps

1. Create Protected Routes middleware
2. Add password reset functionality
3. Add email verification
4. Add refresh token logic
5. Create user profile endpoints
6. Add account linking endpoints for CP platforms
