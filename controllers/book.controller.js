const { v4: uuid } = require('uuid')
let stroredArray = []

const createBook = (req, res, next) => {
    const { title, author, year } = req.body;

    const newBook = { id: uuid(), title, author, year }

    stroredArray.push(newBook)

    return res.status(201).send({ message: 'Book stored successfully', newBook })
}
const getBooks = (req, res, next) => {


    return res.status(200).send(stroredArray)
}
const getBookById = (req, res, next) => {
    const { id } = req.params

    const book = stroredArray.find((book) => book.id === id)

    if (!book) {
        return res.status(404).send({ message: 'Book not found' })
    }

    return res.status(200).send(book)
}

const updateBook = (req, res, next) => {
    const { id } = req.params
    const { title, author, year } = req.body;

    const book = stroredArray.find((book) => book.id === id)

    if (!book) {
        return res.status(404).send({ message: 'Book not found' })
    }

    for (let i = 0; i < stroredArray.length; i++) {
        if (stroredArray[i].id == id) {
            stroredArray[i].title = title
            stroredArray[i].author = author
            stroredArray[i].year = year
        }
    }

    return res.status(200).send({ message: 'Book updated successfully' })
}
const deleteBook = (req, res, next) => {
    const { id } = req.params

    const book = stroredArray.find((book) => book.id === id)

    if (!book) {
        return res.status(404).send({ message: 'Book not found' })
    }

    const newStoredArray = stroredArray.filter((book) => book.id !== id)
    console.log(newStoredArray)
    stroredArray = newStoredArray
    console.log('storedArray', stroredArray)

    return res.status(200).send({ message: 'Book deleted successfully' })
}

module.exports = {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
}