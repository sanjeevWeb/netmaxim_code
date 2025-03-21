const { createBook, getBooks, getBookById, updateBook, deleteBook } = require('../controllers/book.controller')
const validateBook = require('../middlewares/vailidation.middleware')

const router = require('express').Router()

router.post('/books',validateBook, createBook )

router.get('/books', getBooks)

router.get('/books/:id', getBookById)

router.put('/books/:id', validateBook, updateBook)

router.delete('/books/:id', deleteBook)

module.exports = router