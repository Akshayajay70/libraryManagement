import connectDb from "./connection/db";
import express from "express";
import * as dotenv from "dotenv";
import bookRoutes from "./routes/bookRoutes";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

connectDb();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
//routes
app.use('/books', bookRoutes)

// start the server 
app.listen(port, ()=>{
    console.log(`Server runing at http://localhost:${port}`)
})