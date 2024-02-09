import express from 'express'
import productRoutes from './routes/products.js'
import dotenv from 'dotenv'
import { connectDatabase } from './config/dbConnect.js'
import errorMiddleware from './middlewares/errors.js'

// Hangle Uncaught exceptions
process.on('uncaughtException', err => {
  console.log(`ERROR: ${err.message}`)
  console.log('Shutting down the server due to uncaught exception')
  process.exit(1)
})

const app = express()
dotenv.config({ path: 'backend/config/config.env' })

// Connecting to the database

connectDatabase()

// Middleware
app.use(express.json())

// Importing the routes

app.use('/api/v1', productRoutes)

// Middleware to handle errors
app.use(errorMiddleware)

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})

// Handle unhandled promise rejections
process.on('unhandledRejection', err => {
  console.log(`ERROR: ${err}`)
  console.log('Shutting down the server due to unhandled promise rejection')
  server.close(() => {
    process.exit(1)
  })
})
