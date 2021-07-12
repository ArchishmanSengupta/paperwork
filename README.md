# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Dependencies
- material-ui/core  (npm install @material-ui/core)
- material-ui/icons (npm install @material-ui/icons)
- react-quill (npm install react-quill)
- firebase (npm install firebase)
- .env(npm install dotenv)

# Set up Firebase 
 1. Go to the firebase Console 
 2. Add firebase Project
 3. You may/may not keep the Google Analytics enabled
 4. Select an account-> Default Account for firebase
 5. Go to Cloud firestore 
 6. Select Create Database
 7. Start in test Mode ->next->enable
 8. Now go back to your Firebase App overview page , you will see iOS Android and Web App, click on the  Web App 
 9. Give a name and keep the box unchecked 
 10. Register
 11. Copy the Firebase apikey 
 12. now in terminal paste this: npm install dotenv
 13. Make a .env file and paste this with your apikey

 ``` API_KEY= YOUR_API_KEY```
 14. Save and voila! you are good to go