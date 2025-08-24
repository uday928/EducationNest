npm create vite@latest
cd client
npm install

npm run dev

update index.html, app.jsx and index.css

npm install react-router-dom react-youtube uniqid quill humanize-duration rc-progress react-simple-star-rating

npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

file structure:
    src:
        components
            educator
                <--diffrent components-->
            student
                <--diffrent components-->
        context (state and functions of entire application)
        pages
            educator
                <--diffrent Pages-->
            student
                <--diffrent pages-->
            
GitHub:
    
    git init
    git remote add origin https://github.com/uday928/EducationNest.git
    git add .
    git commit -m "Message"
    git push -u origin main

    to remove the file from github:
        git rm --cached <--Path-->

    For Regular push:
        git add .
        git commit -m "Message"
        git push

create Jsconfig.json and 

{
    "exclude":["node_modules"]        
}
paste this to get auto improts


to authanticate user... clerk authantication
to integrate sign in sign up features in website easily

sign in into clerk.com
give application name
select options from which user can sign-in in your app
hit create application
select react 
run given commands:
    what i have executed:
        npm install @clerk/clerk-react
    create .env file 
        VITE_CLERK_PUBLISHABLE_KEY=pk_test_bGl2aW5nLXJvYmluLTUuY2xlcmsuYWNjb3VudHMuZGV2JA
    update main.jsx 
    update student Navbar from where user will perform authantication steps

text-home-heading-large: custome tailwindcss classes update tailwind.config.js

rich-text class: added custom css properties in index.css

Install Quilljs
    commands:
        npm install quill@2.0.3
    CSS:
        import "quill/dist/quill.core.css";



<---------Backend------------>

create server.js

commands: npm init -y

npm install express nodemon dotenv cors cloudinary mongoose multer stripe svix@1.42.0 @clerk/express

:: why these packages:
    express
    nodemon    : restart the Backend sever when changes happen
    dotenv     : to use env variables
    cors       : connect Backend with any other domain
    cloudinary : to store the image in cloudinary storage 
    mongoose   : project with mongoDB database
    multer     : to upload the images 
    stripe     : payment gatway 
    svix       : DevOps
    clerk

After creating simple server on server.js test the API with postman

create folder structure: configs, controllers, middlewares, models, routes
create file: .env 

open mongoDB atlas
process connection with compass option
paste MONGODB_URI in .env 
go to network access in mongoDB website: create IP 0.0.0.0/0

update configs/mongoDB.js to connect database with server
