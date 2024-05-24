import { useEffect, useState } from "react";
import AddedBookCard from "./AddedBookCard";
import { getStoredWishList } from "../../../Utilities/Utilities";
import PropTypes from 'prop-types';

function WishlistTab({sortBy}) {
    const [allBooks, setAllBooks] = useState([]);
    const [wishedBooksId, setWishedBooksId] = useState([]);
    const [wishedBooks, setWishedBooks] = useState([]);
    const parent = 'Wishlist';
    const [loading, setLoading] = useState(true);
    const wishListBooksId = getStoredWishList();

    const loadBooks = async () => {
        const loadedBooks = await fetch('https://raw.githubusercontent.com/SazidBinMostafa/Wizarding-World-Resources/main/data.json');
        const data = await loadedBooks.json();
        setAllBooks(data)
        setLoading(false)
    }
    const sortWishedBooks = () =>{
        let sortedBooks = [...wishedBooks];
        if(sortBy === 'Rating'){
            sortedBooks.sort((a, b)=> b.rating - a.rating)
        }
        else if(sortBy === 'Number_of_pages'){
            sortedBooks.sort((a, b)=> b.totalPages - a.totalPages)
        }
        else if(sortBy === "Published_year"){
            sortedBooks.sort((a, b)=> b.yearOfPublishing - a.yearOfPublishing)
        }
        return sortedBooks;
    }

    useEffect(() => {
        loadBooks();
        if (allBooks.length > 0 && wishListBooksId) {
            const newReadBooks = wishListBooksId.map(readBookId => allBooks.find(book => readBookId == book.bookId))
            setWishedBooks(newReadBooks)

        }
    }, [loading, wishedBooksId]);

    if (loading) {
        return <div className="flex items-center justify-center h-screen">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    const sortedWishedBooks = sortWishedBooks()
    console.log(sortBy)
    return <section className="grid gap-8">
        {sortedWishedBooks && sortedWishedBooks.map(book => <AddedBookCard key={book.id} book={book} parent={parent} setWishedBooksId={setWishedBooksId}></AddedBookCard>)}
    </section>
}

export default WishlistTab;

WishlistTab.propTypes = {
    sortBy: PropTypes.string,
}