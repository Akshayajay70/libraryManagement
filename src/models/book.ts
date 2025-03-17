import mongoose, {Schema , Document} from "mongoose";

export interface BookDetail extends Document {
    title: string;
    author: string;
    publishedYear: number;
}

const BookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: Number, required: true }
});

export const Book = mongoose.model<BookDetail>('Book', BookSchema);