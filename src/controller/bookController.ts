import { Request, Response } from "express"
import BookService from "../services/bookService"

class BookController {
    private bookService: BookService

    constructor(bookService: BookService) {
        this.bookService = bookService
    }

    async getAllBooks(req: Request, res: Response) {
        try {
            const books = await this.bookService.getAllBooks()
            if (books) {
                res.status(200).json({ message: "Books fetched Successfully", books })
            } else {
                res.status(404).json({ message: "Books not found" })
            }
        } catch (error) {
            res.status(500).json({ message: 'Faled to fetch books', error })
        }
    }

    async getBookById(req: Request, res: Response) {
        try {
            const book = await this.bookService.getBookById(req.params.id)
            if (book) {
                res.status(200).json({ message: "Book fetched successfully", book })
            } else {
                res.status(404).json({ message: "Book not found" })
            }
        } catch (error) {
            res.status(500).json({ message: "failed to fetch book", error })
        }
    }

    async createBook(req: Request, res: Response) {
        try {
            console.log(req.body)
            const book = await this.bookService.createBook(req.body)
            res.status(200).json({ message: "Book created successfully", book })
        } catch (error) {
            res.status(500).json({ message: 'failed to create book', error })
        }
    }
    async updateBook(req: Request, res: Response) {
        try {
            const book = await this.bookService.updateBook(req.params.id, req.body)
            if (book) {
                res.status(200).json({ message: 'Book updated successfully', book })
            } else {
                res.status(404).json({ message: 'Book not found' })
            }
        } catch (error) {
            res.status(500).json({ message: "Faled to update book", error })
        }
    }

    async deleteBook(req: Request, res: Response) {
        try {
            const isDeleted = await this.bookService.deleteBook(req.params.id)
            if (isDeleted) {
                res.status(200).json({ message: 'Book deleted successfully' })
            } else {
                res.status(404).json({ message: "Book not found" })
            }
        } catch (error) {
            res.status(500).json({ message: "Failed to delete book", error })
        }
    }
    
}

export default BookController