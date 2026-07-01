# Firebase Setup Guide

To enable cloud sync across devices, you need to set up a Firebase project. This will allow your training data to sync automatically between all your devices.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter a project name (e.g., "Muscles Training Tracker")
4. Disable Google Analytics (optional, not needed for this app)
5. Click "Create project"

## Step 2: Register Your Web App

1. In your Firebase project dashboard, click the **Web icon** (`</>`)
2. Register your app with a nickname (e.g., "Training Tracker Web")
3. **Don't check** "Also set up Firebase Hosting"
4. Click "Register app"
5. Copy the Firebase configuration object

## Step 3: Update firebase-config.js

1. Open `firebase-config.js` in your repository
2. Replace the placeholder values with your actual Firebase config:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_ACTUAL_API_KEY",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123def456"
};
```

## Step 4: Enable Firestore Database

1. In Firebase Console, go to **Build → Firestore Database**
2. Click "Create database"
3. Choose **"Start in test mode"** (for now)
4. Select a Cloud Firestore location closest to you
5. Click "Enable"

## Step 5: Enable Anonymous Authentication

1. In Firebase Console, go to **Build → Authentication**
2. Click "Get started"
3. Click on the **"Sign-in method"** tab
4. Click on **"Anonymous"**
5. Toggle the **Enable** switch
6. Click "Save"

## Step 6: Update Firestore Security Rules (Important!)

1. In Firebase Console, go to **Firestore Database → Rules**
2. Replace the rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      // Allow users to read/write only their own data
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

3. Click "Publish"

## Step 7: Commit and Deploy

1. Commit your `firebase-config.js` changes to your repository
2. Push to GitHub
3. Your app will now sync to the cloud!

## How to Use Cloud Sync

### First Time Setup on a Device
1. Open the app on your device
2. The app will automatically create an anonymous user account
3. Click Menu (☰) → **☁️ Sync to Cloud** to upload your current data

### On Additional Devices
1. Open the app on your new device
2. **Export your data** from your first device (Menu → 📥 Export Data)
3. **Import the data** on your new device (Menu → 📤 Import Data)
4. Click **☁️ Sync to Cloud** to upload
5. From now on, data will sync automatically across all devices!

### Recovering Today's Data

If you've already entered data today, follow these steps to save it:

1. **On your current device**, click Menu (☰) → **📥 Export Data**
2. Save the JSON file somewhere safe (email it to yourself, save to cloud storage, etc.)
3. After Firebase is set up, click **📤 Import Data** and select the JSON file
4. Click **☁️ Sync to Cloud** to upload to Firebase
5. Your data is now safely backed up and will sync across devices!

## Troubleshooting

**"Firebase not configured" error:**
- Make sure you've updated `firebase-config.js` with your actual Firebase credentials
- Check that you've committed and pushed the changes to GitHub
- Wait a few minutes for GitHub Pages to deploy

**Data not syncing:**
- Check that you've enabled Anonymous Authentication in Firebase Console
- Verify Firestore security rules are set correctly
- Look at the browser console (F12) for any error messages

**Want to switch to email/password login instead of anonymous?**
- You can upgrade later! Just enable Email/Password in Firebase Authentication
- The app currently uses anonymous auth for simplicity
