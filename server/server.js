import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'

// import custom middleware

// connect to MongoDB
// ... not implemented yet

// import colorizer conslole logs
import chalk from 'chalk'

// configure dotenv
dotenv.config()

// connect to DB
// ... not implemented yet

// create the app
const app = express()
app.use(cors())
// allow to read the body of req
app.use(express.json())

// create routes
// example:
import testRoutes from './routes/test.route.js'
app.use('/api/v1/test', testRoutes)
import userRoutes from './routes/user.route.js'
app.use('/api/v1/users', userRoutes)
// ... others routes

// use error handler at the end of actions
import { errorHandler } from './middleware/error.js'
app.use(errorHandler)

// choose port
const PORT = process.env.PORT || 4000

// run server
const server = app.listen(PORT, () => console.log(`Server running on port ${chalk.yellow(process.env.PORT)} in ${chalk.green(process.env.NODE_ENV)} mode`))

// if sth. goes wrong handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`${chalk.red("Error:")} ${err.message}`);
  server.close(() => process.exit(1))
})
