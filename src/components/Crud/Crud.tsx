import { useState } from 'react';
import './Crud.css'
import { Book} from '../../interfaces/book';
import BooksList from './BooksList';
import AddBook from './AddBook';

export interface ToggleForm{
    showAddBook:boolean,
   
   }


function Crud()
{
    const [showForm, setShowForm]=useState<ToggleForm["showAddBook"]>(false)
  
    const [books, setBooks]=useState<Book[]>([]);

    const handleShowAddForm=()=>{
        setShowForm(!showForm);
    }
    return (
        <div>
            <div>
            <div className="card-header">
                    {showForm ? null: <h2>Books</h2> }
                    
                    <div>
                        {showForm && < AddBook/>}
                        <button onClick={handleShowAddForm}>
                            {showForm ? "close form" : "Add Book" }
                        </button>
                    </div>
                </div>
            </div>
            { !showForm &&  <BooksList />}
           
            
        </div>
    );
}
export default Crud;