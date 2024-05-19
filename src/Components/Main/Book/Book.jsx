import {  useParams } from "react-router-dom";
import './Book.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredReadList, getStoredWishList, setStoredReadList, setStoredWishList } from "../../../../../B9A8/src/Components/Utilities/Utilities";
import { useEffect, useState } from "react";
import axios from "axios";



function Book() {

    const id = useParams().id;
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadBooks = async () => {
        const loadedBooks = await axios.get('https://raw.githubusercontent.com/SazidBinMostafa/Wizarding-World-Resources/main/data.json');
        await setBooks(loadedBooks.data)
        setLoading(false)
    }

    useEffect(()=>{
        loadBooks();
    },[])

    if(loading){
        return <div className="flex items-center justify-center h-screen">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    console.log(books)

    const book = books.find(book => book.bookId == id);
    const { bookId, bookName, author, image, category, rating, tags, about, totalPages, publisher, yearOfPublishing, } = book;

    const handleRead = () => {
        const storedReadList = getStoredReadList();

        if (storedReadList.includes(bookId)) {
            toast("Already added to read list");
        }
        else {
            toast("Added to Read list");
            setStoredReadList(bookId);
        }

    };

    const handleWish = () => {
        const storedWishList = getStoredWishList();
        const storedReadList = getStoredReadList();

        if (storedWishList.includes(bookId)) {
            toast("Already added to Wishlist");
        }
        else if (storedReadList.includes(bookId)) {
            toast("Books already added to Read list cannot be added to Wishlist");
        }
        else {
            toast("Added to Wishlist");
            setStoredWishList(bookId);
        }
    };

    return <>
        <ToastContainer />
        <div className="hero min-h-screen w-fit lg:px-32">
            <div className="hero-content flex-col lg:flex-row gap-14 items-start">
                <img src={image} className="lg:max-w-md rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <h3 className="text-2xl my-1">By: {author}</h3>
                    <hr />
                    <h3 className="text-2xl my-3">{category}</h3>
                    <hr />
                    <p className="py-6">{about}</p>
                    <h3 className="text-2xl flex items-center gap-2">Tag:  {tags.map((tag, idx) => <div key={idx} className="badge badge-accent badge-outline badge-lg">#{tag}</div>)}</h3>
                    <hr className="my-5" />
                    <table>
                        <tr>
                            <td>Number of Pages:</td>
                            <td>{totalPages}</td>
                        </tr>
                        <tr>
                            <td>Publisher:</td>
                            <td>{publisher}</td>
                        </tr>
                        <tr>
                            <td>Year of Publishing:</td>
                            <td>{yearOfPublishing}</td>
                        </tr>
                        <tr>
                            <td>Rating:</td>
                            <td>{rating}</td>
                        </tr>
                    </table>
                    <div className="flex gap-5 mt-5">
                        <button onClick={handleRead} className="btn text-lg btn-outline">Read</button>
                        <button onClick={handleWish} className="btn text-lg btn-accent text-white">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Book;