import express from 'express';
import BookController from '../controller/bookController';
import BookService from '../services/bookService';

const router = express.Router();

const bookService = new BookService()
const bookController  =new BookController(bookService)
// Get all books
router.get('/',(req,res)=> bookController.getAllBooks(req,res));

// Add a new book
router.post('/',(req,res)=> bookController.createBook(req,res) );

// get a book 
router.get('/:id',(req,res)=> bookController.getBookById(req,res))

// update a book 
router.put('/:id',(req,res)=> bookController.updateBook(req,res) )

// remove a book 
router.delete('/:id',(req,res)=> bookController.deleteBook(req,res))

export default router;