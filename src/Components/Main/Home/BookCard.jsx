import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';



function BookCard({ book }) {
    const navigate = useNavigate();

    const { bookId, bookName, author, image, category, rating, tags } = book;
    
    const handleOnClick = () =>{
        navigate(`/book/${bookId}`)
    }
    return <>
        <div onClick={handleOnClick} className="card border w-80 bg-base-100 shadow-xl hover:cursor-pointer">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>

            <div className="card-body items-center text-center pt-3 pb-1">
                <div className="flex gap-3">
                    {tags.map((tag, idx) => <div key={idx} className="badge badge-accent badge-outline">{tag}</div>)}
                </div>
                <h2 className="card-title text-3xl">{bookName}</h2>
                <p>By: {author}</p>
            </div>
            <div className='flex justify-between mx-8 mb-5  border-t border-dashed pt-3'>
                <p>{category}</p>
                <p className='flex items-center gap-1'><span>{rating}</span><span className="material-symbols-outlined">star</span></p>
            </div>
        </div>
    </>
}

BookCard.propTypes = {
    book: PropTypes.object,
    bookName: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    rating: PropTypes.number,
    tags: PropTypes.array
}

export default BookCard;