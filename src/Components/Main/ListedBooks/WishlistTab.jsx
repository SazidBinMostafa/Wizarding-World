import { useEffect, useState } from "react";
import AddedBookCard from "./AddedBookCard";
import { getStoredWishList } from "../../../Utilities/Utilities";

function WishlistTab() {
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

    useEffect(() => {
        loadBooks();
        if (allBooks.length > 0 && wishListBooksId) {
            const newReadBooks = wishListBooksId.map(readBookId => allBooks.find(book => readBookId == book.bookId))
            setWishedBooks(newReadBooks)

        }
    }, [loading, wishedBooksId])

    if (loading) {
        return <div className="flex items-center justify-center h-screen">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    return <section className="grid gap-8">
        {wishedBooks.map(book => <AddedBookCard key={book.id} book={book} parent={parent} setWishedBooksId={setWishedBooksId}></AddedBookCard>)}
    </section>
}

export default WishlistTab;