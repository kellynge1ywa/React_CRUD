import { useState } from "react";
import { Book } from "../../interfaces/book";
import { v4 as uuid } from 'uuid'

type Props = {
    onCloseUpdate: () => void;
    toBeUpdated: Book;
}

const UpdateBook = (props: Props) => {

    const { onCloseUpdate, toBeUpdated } = props;
    // const [newBook, setNewBook]=useState<Book[]>([]);
    const [title, setTitle] = useState(props.toBeUpdated.title);
    const [author, setAuthor] = useState(toBeUpdated.author);
    const [price, setPrice] = useState(toBeUpdated.price);

    const updateBook = (updated:Book) => {
        if (title !== "" && author !== "" && price > 0) {
            updated = { id: updated.id, title: title, author: author, price: price }
            fetch(`http://localhost:3000/books/${toBeUpdated.id}`, {
                method: 'Put',
                headers: {
                    'content-Type': 'application/json',
                },
                body: JSON.stringify(updated),
            }).then((res) => res.json)
                .then(() => alert("Book Updated!!"));
        }

    }

    const handleTitleChange = (event: any) => {
        setTitle(event.target.value)

    }

    const handleAuthorChange = (event: any) => {
        setAuthor(event.target.value);
    }

    const handlePriceChange = (event: any) => {
        setPrice(event.target.value);
    }


    return (
        <div id="myModal" className="modal">


            <div className="modal-content">
                <span className="close" onClick={onCloseUpdate} >&times;</span>
                <div>
                    <div>
                        <h2>Update  {toBeUpdated.title}</h2>
                        <form onSubmit={()=>updateBook(toBeUpdated)}>
                            <div>
                                <label>Title</label>
                                <input type="text" value={title} placeholder="Update book title..." onChange={handleTitleChange} />
                            </div>
                            <div>
                                <label>Author</label>
                                <input type="text" value={author} placeholder="Update author..."
                                    onChange={handleAuthorChange} />
                            </div>
                            <div>
                                <label>Price</label>
                                <input type="number" value={price} placeholder="Enter price..."
                                    onChange={handlePriceChange} />
                            </div>
                            <button>Edit book</button>
                        </form>


                    </div>
                </div>

            </div>
    </div>
    )

}
export default UpdateBook;