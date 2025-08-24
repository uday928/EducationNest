import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongoDB.js'
import { clerkWebhooks } from './controllers/webhooks.js'


// Initialize Express

const app=express()

// connect to DB:
await connectDB()

// Middleware

app.use(cors()) //to connect backend with any other domain

// Routes

app.get('/',(req,res)=>res.send("API working"))
app.post('/clerk',express.json(),clerkWebhooks)

//Port

const PORT = process.env.PORT || 5000 //fetch port from env if not there then default port is 5000

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
