
// const authors = require('../models/authors')
// const books = require('../models/books')

let authors = [
	{ id: 1, name: 'J. K. Rowling' },
	{ id: 2, name: 'J. R. R. Tolkien' },
	{ id: 3, name: 'Brent Weeks' }
]


let books = [
	{ id: 1, name: 'Harry Potter and the Chamber of Secrets', authorId: 1 },
	{ id: 2, name: 'Harry Potter and the Prisoner of Azkaban', authorId: 1 },
	{ id: 3, name: 'Harry Potter and the Goblet of Fire', authorId: 1 },
	{ id: 4, name: 'The Fellowship of the Ring', authorId: 2 },
	{ id: 5, name: 'The Two Towers', authorId: 2 },
	{ id: 6, name: 'The Return of the King', authorId: 2 },
	{ id: 7, name: 'The Way of Shadows', authorId: 3 },
	{ id: 8, name: 'Beyond the Shadows', authorId: 3 }
]

const authorResolver = {
    BookType: {
        author: (book) => {
            return authors.find(author => author.id === book.authorId)
        },
    },
    AuthorType: {
        books: (author) => {
            return books.filter(book => book.authorId === author.id)
        },
    },
    Query: {
        author: (parent, args) => authors.find(author => author.id === args.id),
        authors: () => authors,
        book: (parent, args) => books.find(book => book.id === args.id),
        books: () => books,
    },
    Mutation:{
        addAuthor:(parent, args) => {
            const author = { id: authors.length + 1, name: args.name }
            authors.push(author)

            return author
        },
        addBook:(parent, args) => {

            const book = { id: books.length + 1, name: args.name, authorId: args.authorid }
            books.push(book)
            return book
        }
    }
};

module.exports = authorResolver