# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# to create new project in vite please follow this one template line and deal is done 
npm create vite@latest dev-tinder-ui -- --template react

# About this app 
This app is for giving the platform to the developers to connect and do some development together 
# dev-tinder-ui

# creating a new repo in the github 
echo "# dev-tinder-ui" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/tanujkathuria/dev-tinder-ui.git
git push -u origin master

# ui libraries 
tailwind css 
https://daisyui.com/ for the components 

# to make the login work along with the cors 
install cors in the back end node js api 
add the middleware to allow cors origin with origin and credentials true 
call the post api with withCredential:true

# implement the react redux 
 npm install @reduxjs/toolkit react-redux --> 1 
 create a new store --> 2 
 add the provider in the app.js file and wrap everything iinside the provider --> 3
 create the slice and export the actions and reducer from there 
 add the reducer in the store 
 use selector to get the data in the other component 
 use dispatcher to dispatch the event to the redux store 
