import express from 'express'
import dotenv from 'dotenv'
const app = express()

dotenv.config({ path: 'backend/config/config.env' })

// Importing the routes
import productRoutes from './routes/products.js'

app.use('/api/v1', productRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})
