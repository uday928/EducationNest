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

    For Regular push:
        git add .
        git commit -m "Message"
        git push

create Jsconfig.json and 

{
    "exclude":["node_modules"]        
}
paste this to get auto improts
