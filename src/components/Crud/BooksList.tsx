import { useEffect, useState } from 'react';
import { Book } from '../../interfaces/book';
import './Crud.css'
import ViewBook from './ViewBook';
import UpdateBook from './UpdateBook';

export interface ToggleForm{
    showAddBook:boolean,
   
   }



const BooksList=()=>{

    // const [showForm, setShowForm]=useState<ToggleForm["showEditBook"]>(false)
    
    const [books,setBooks]=useState<Book[]>([])
    const [showModal, setShowModal]=useState(false);
    const [showBook, setShowBook]=useState(null as Book | null);
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    useEffect(()=>{

        fetch('http://localhost:3000/books').then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setBooks(data)
        })
    },[])

    const handleDelete= async (id:string)=>{
        const response= await fetch(`http://localhost:3000/books/${id}`,{
            method:'Delete'
        })
        if (! response.ok) {
            throw new Error("Failed to delete item");
          }
         setBooks(books.filter((book)=> book.id !== id)) 
         alert("Do you want to delete this book!!!")
        
    }

    const viewBook=(data:Book)=>{
        setShowBook(data);
        setShowModal(true)
    }

    const updateBook=(toBeUpdated:Book)=>{
        setShowBook(toBeUpdated)
        setShowUpdateForm(true)
    }

    const closeModal=()=> setShowModal(false);
    const closeUpdateForm=()=> setShowUpdateForm(false);
    return (
        <div>
            <div>
                
                
                <div className='booksCard'>
                    {books.map((book)=>{
                       
                        return <div key={book.id}>
                        <span> <strong>Title:</strong> {book.title}</span> <br />
                        <span> <strong>Author:</strong> {book.author} </span><br />
                        <span> <strong>Price:</strong>{`Ksh.${book.price}`}</span>
                        <div>
                        <button onClick={()=>viewBook(book)}>View</button>
                        
                        <button onClick={()=> updateBook(book)}> Edit </button>
                        <button onClick={()=>handleDelete(book.id)}>Delete</button>
                    </div>
                    </div> 
                    })}
                       
                    

                </div>
            </div>
            <div>
               {showModal && showBook !== null &&  <ViewBook onClose={closeModal} data={showBook}/>}
            </div>
            <div>
                {showUpdateForm && showBook !== null &&  <UpdateBook onCloseUpdate={closeUpdateForm} toBeUpdated={showBook}/>}
            </div>
        </div>
    );
}
export default BooksList;