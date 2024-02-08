import express from 'express'
import productRoutes from './routes/products.js'
import dotenv from 'dotenv'
import { connectDatabase } from './config/dbConnect.js'

const app = express()
dotenv.config({ path: 'backend/config/config.env' })

// Connecting to the database

connectDatabase()

// Middleware
app.use(express.json())

// Importing the routes

app.use('/api/v1', productRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})
