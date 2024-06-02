
import { Book } from '../../interfaces/book';
import './Crud.css'

type Props={
    onClose:()=> void;
    data:Book;
}

const ViewBook = (props:Props) => {
    const {onClose,data}=props;

    return (
        <div id="myModal" className="modal">


            <div className="modal-content">
                <span className="close" onClick={onClose} >&times;</span>
                <h2>{data.title}</h2>
                <div>
                    <span> <strong>Id</strong>:{data.id}</span> <br />
                    <span> <strong>Title</strong>: {data.title}</span> <br />
                    <span> <strong>Author</strong>: {data.author}</span> <br />
                    <span> <strong>Price</strong>: {`Ksh. ${data.price}`}</span>
                </div>
            </div>

        </div>
    );

}
export default ViewBook;