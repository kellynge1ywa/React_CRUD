import { useState } from "react";
import { Book } from "../../interfaces/book";
import {v4 as uuid} from 'uuid'

const AddBook=()=>{
    // const [newBook, setNewBook]=useState<Book[]>([]);
    const [title, setTitle]=useState("");
    const [author, setAuthor]=useState("");
    const [price, setPrice]=useState(0);

    const addNewBook=async ()=>{
        if(title !=="" && author !=="" && price > 0){
            const newBook:Book={id:uuid(), title:title,author:author,price:price}
           await fetch('http://localhost:3000/books',{
            method:'Post',
            headers:{
                'content-Type':'application/json',
            },
            body:JSON.stringify(newBook),
           }).then((res)=>res.json)
           .then(()=> alert("Book added!!"));
        }

    }

    const handleTitleChange=(event:any)=>{
        setTitle(event.target.value)

    }

    const handleAuthorChange=(event:any)=>{
        setAuthor(event.target.value);
    }

    const handlePriceChange=(event:any)=>{
        setPrice(event.target.value);
    }
    

    return (
        <div>
            <h2>Add books</h2>
            <div>
                <form onSubmit={addNewBook}>
                    <div>
                        <label>Title</label>
                        <input type="text" value={title} placeholder="Enter book title..." onChange={handleTitleChange} />
                    </div>
                    <div>
                        <label>Author</label>
                        <input type="text" value={author} placeholder="Enter book author..."
                        onChange={handleAuthorChange} />
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="number" value={price} placeholder="Enter price..."
                        onChange={handlePriceChange} />
                    </div>
                    <button>Add book</button>
                </form>
            </div>
        </div>
    );

}
export default AddBook;