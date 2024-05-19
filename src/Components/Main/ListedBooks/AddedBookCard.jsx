import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { removeFromReadList, removeFromWishList } from '../../../Utilities/Utilities';


function AddedBookCard({ book, parent, setReadBooksId, setWishedBooksId}) {
    const { bookId, bookName, author, image, category, rating, tags, about, totalPages, publisher, yearOfPublishing, } = book;
    
    const handleRemove = () =>{
        if(book){
            if(parent === 'Readlist'){
                removeFromReadList({bookId, setReadBooksId})
            }
            else if(parent === 'Wishlist'){
                removeFromWishList({bookId, setWishedBooksId})
            }
        }
    }
    console.log(book)
    return <>
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className="p-5"><img className="w-40" src={image} alt="Album" /></figure>
            <div className="card-body">
                <h1 className="card-title text-3xl">{bookName}</h1>
                <p>By: {author}</p>
                <div className="flex gap-3 items-center">
                    <h3 className='text-xl'>Tag:</h3>
                    {tags && tags.map((tag, idx) => <div key={idx} className="badge badge-accent badge-outline">#{tag}</div>)}
                </div>
                <div className="lg:flex">
                    <p className="flex items-center gap-1"><span className="material-symbols-outlined">today</span>Year of Publishing: {yearOfPublishing} </p>
                    <p className="flex items-center gap-1"><span className="material-symbols-outlined">group</span>Publisher: {publisher}</p>
                    <p className="flex items-center gap-1"><span className="material-symbols-outlined">auto_stories</span>Pages: {totalPages}</p>
                </div>
                <hr />
                <div className='flex flex-col lg:flex-row justify-between items-center mb-5 gap-3'>
                    <div className='flex flex-col lg:flex-row gap-3 items-center'>
                        <div className="badge badge-lg p-5 text-lg badge-accent badge-outline">Category: {category}</div>
                        <div className="badge badge-lg p-5 text-lg badge-warning badge-outline">Rating: {rating}</div>
                        <Link to={`/book/${bookId}`} className="btn text-base rounded-full btn-outline btn-success" >View details</Link>
                    </div>
                    <div>
                        <button onClick={handleRemove} className="btn btn-outline flex items-center rounded-full btn-error">Remove <span className="material-symbols-outlined">delete</span></button>
                    </div>
                </div>

            </div>
        </div>
    </>
}

AddedBookCard.propTypes = {
    book: PropTypes.object,
    bookName: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    rating: PropTypes.number,
    tags: PropTypes.array
}
export default AddedBookCard;