require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/book.route')
const authenticate = require('./middlewares/auth.middleware')
const PORT = process.env.PORT || 5000

const app = express()

// Global middleware for parsing request body or form-data
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cors())

// Logging Middleware, can be done with some third party lib like winston too.
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp} - ${req.method} ${req.originalUrl}`);
    next();
});

//Global middleware for authenticating request header
app.use(authenticate)

app.use('/', router)

//Global middleware for error-handling
app.use((err, req, res, next) => {
    console.error("Unexpected Error:", err);
    res.status(500).json({ error: "Something went wrong" });
});

app.listen(PORT, () => {
    console.log('app running at port 5000')
})