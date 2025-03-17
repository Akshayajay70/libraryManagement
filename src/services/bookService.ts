import { Book, BookDetail } from "../models/book";

class BookService {
    async getAllBooks(){
        return await Book.find()
    }
    async getBookById(id: string){
        return await Book.findById(id)
    }
    async createBook(BookData: Partial<BookDetail>){
        const book = new Book(BookData)
        return book.save() 
    }
    async updateBook(id:string, BookData: Partial<BookDetail>){
        return await Book.findByIdAndUpdate(id, BookData, {new: true})
    }

    async deleteBook(id:string){
        const result = await Book.findByIdAndDelete(id)
        return result !== null 
    }
}
export default  BookService