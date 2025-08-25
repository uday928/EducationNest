import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongoDB.js'
import { clerkWebhooks, stripeWebhooks } from './controllers/webhooks.js'
import educatorRouter from './routes/educatorRoutes.js'
import { clerkMiddleware } from '@clerk/express'
import connectCloudinary from './configs/cloudinary.js'
import courseRouter from './routes/courseRoutes.js'
import userRouter from './routes/userRoutes.js'


// Initialize Express

const app=express()

// connections:
await connectDB() //to connect project with mongoDB
await connectCloudinary() //to connect project with cloudinary storage

// Middleware

app.use(cors()) //to connect backend with any other domain

app.use(clerkMiddleware()) //to add auth property in all the request

// Routes

app.get('/',(req,res)=>res.send("API working"))

app.post('/clerk',express.json(),clerkWebhooks) 

app.use('/api/educator',express.json(),educatorRouter) //route for educatorRoutes

app.use('/api/course',express.json(),courseRouter) //route for courseRoutes

app.use('/api/user',express.json(),userRouter) //route for user

// old : app.post('/stripe',express.raw({type:'application/json'}),stripeWebhooks) //payment gateway

app.post('/webhooks',express.raw({type:'application/json'}),stripeWebhooks)

//Port

const PORT = process.env.PORT || 5000 //fetch port from env if not there then default port is 5000

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
