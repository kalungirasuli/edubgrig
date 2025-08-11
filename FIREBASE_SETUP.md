# Firebase Setup Instructions

## 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter your project name (e.g., "edubridge-admin")
4. Enable Google Analytics (optional)
5. Click "Create project"

## 2. Enable Authentication

1. In your Firebase project, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Enable "Email/Password" authentication
5. Click "Save"

## 3. Create Admin User (Automatic)

The admin dashboard now includes an automatic admin creation feature:

1. Navigate to `http://localhost:3000/admin`
2. On the login page, click "Create Default Admin" button
3. This will automatically create an admin user with:
   - **Email**: `admin@edubridge.com`
   - **Password**: `admin123`

**Manual Creation (Alternative):**
1. Go to "Authentication" > "Users" tab in Firebase Console
2. Click "Add user"
3. Enter email: `admin@edubridge.com`
4. Enter password: `admin123` (or your preferred password)
5. Click "Add user"

## 4. Enable Firestore Database

1. Go to "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select your preferred location
5. Click "Done"

## 5. Enable Firebase Storage

1. Go to "Storage" in the left sidebar
2. Click "Get started"
3. Choose "Start in test mode" (for development)
4. Select the same location as your Firestore database
5. Click "Done"

## 6. Get Firebase Configuration

1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps" section
3. Click "Add app" and select "Web" (</>) 
4. Register your app with a nickname
5. Copy the Firebase configuration object

## 7. Update Firebase Configuration

Replace the configuration in `src/firebase/config.ts` with your actual Firebase config:

```typescript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

## 8. Set Up Firestore Security Rules (Optional)

For production, update your Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to read/write
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 9. Access Admin Dashboard

1. Start your development server: `npm start`
2. Navigate to `http://localhost:3000/admin`
3. Login with your admin credentials
4. Start managing your platform data!

## Admin Features

The admin dashboard includes:

- **Dashboard Overview**: Statistics and analytics
- **Student Management**: View and manage student registrations
- **Institution Management**: Add, edit, and manage educational institutions with logo uploads
- **Resource Management**: Manage educational resources and materials with thumbnail uploads
- **Blog Management**: Create and manage blog posts with featured image uploads
- **Partner Management**: Manage partnership information

### Image Upload Features

#### Institution Logo Upload
The admin can upload institution logos:
- Supported formats: JPG, PNG, GIF, SVG
- Recommended: Square images, max 2MB
- Images are stored in Firebase Storage under `/institutions/`
- Automatic image optimization and CDN delivery
- Old images are automatically deleted when updating

#### Content Image Uploads

**Blog Featured Images:**
- Upload featured images for blog posts
- Supported formats: JPG, PNG, GIF up to 5MB
- Images are stored in Firebase Storage under `/blogs/`
- Automatic preview and image management
- Images display in blog cards and can be removed/updated

**Resource Thumbnails:**
- Upload thumbnail images for educational resources
- Supported formats: JPG, PNG, GIF up to 5MB
- Images are stored in Firebase Storage under `/resources/`
- Thumbnails display in resource cards for better visual appeal
- Optional field - resources work without thumbnails

## Default Admin Credentials

- **Email**: admin@edubridge.com
- **Password**: admin123

**Important**: Change these credentials in production!

## Troubleshooting

1. **Authentication Error**: Make sure you've enabled Email/Password authentication in Firebase Console
2. **Firestore Error**: Ensure Firestore is enabled and rules allow authenticated access
3. **Configuration Error**: Double-check your Firebase configuration in `config.ts`

## Security Notes

- Always use environment variables for Firebase config in production
- Set up proper Firestore security rules
- Use Firebase Admin SDK for server-side operations
- Implement proper role-based access control