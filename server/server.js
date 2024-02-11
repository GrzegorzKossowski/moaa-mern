import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import chalk from 'chalk'

// files upload
import path from 'path'
import { fileURLToPath } from 'url'

// cookies
import cookieParser from 'cookie-parser'

// security
import mongoSanitize from 'express-mongo-sanitize'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
// deprecated
// import xss from 'xss-clean'
import hpp from 'hpp'

// others
import { errorHandler, notFound } from './middleware/error.middleware.js'
// import { connectDB } from './config/db.js'

dotenv.config()

// create the app
const app = express()
// CORS section
app.use(cors())
// allow to read the body of req
app.use(express.json())
// allow to read body as form data
app.use(express.urlencoded({ extended: true }))
// allow to read cookies
app.use(cookieParser())

// >>>>>>>>>>>>>>>>> SECURITY
// https://www.npmjs.com/package/express-mongo-sanitize
// prevents NoSQL attack
app.use(mongoSanitize())
// https://www.npmjs.com/package/helmet
// Helmet helps secure Express apps by setting HTTP response headers.
app.use(helmet())
// set limits
const limiter = rateLimit({
  windowMs: 1000 * 60 * 10, // 10m
  max: 100
})
app.use(limiter)
// Prevent http param polution
app.use(hpp())
// deprecated! - prevent XSS attack, changes < char to &lt; symbol
// app.use(xss())

// conndect to MongoDB
// connectDB()

// create own __dirname (linux mint? walk-around)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// set static public folder
// app.use(express.static(path.join(__dirname, 'public'))) // <= doesnt work?
app.use('/static', express.static(path.join(__dirname, 'public')))

const VERSION = process.env.VERSION || 'v1'
// routes
app.get(['/', '/api', `/api/${VERSION}`], (req, res, next) => {
  res.send('API runs....')
})
import testRoutes from './routes/test.routes.js'
app.use(`/api/${VERSION}/tests`, testRoutes)

// use error handler at the end of actions
app.use(notFound)
app.use(errorHandler)

// set PORT
const PORT = process.env.PORT || 5000

// run server
const server = app.listen(PORT, () => console.log(`Server running on port ${chalk.yellow(process.env.PORT)} in ${chalk.green(process.env.NODE_ENV)} mode\nhttp://localhost:${PORT}/api/${VERSION}/tests`))

// if sth. goes wrong handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`${chalk.red("Error:")} ${err.message}`);
  server.close(() => process.exit(1))
})