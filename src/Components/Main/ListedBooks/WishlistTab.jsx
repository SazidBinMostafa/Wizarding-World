import { useEffect, useState } from "react";
import AddedBookCard from "./AddedBookCard";
import { getStoredWishList } from "../../../Utilities/Utilities";

function WishlistTab() {
    const allBooks = [];
    const [wishlist, setWishlist] = useState([]);
    const parent = 'Wishlist';

    const wishlistBooksId = getStoredWishList();

    useEffect(() => {
        const newWishlist = wishlistBooksId.map(wishBookId=> allBooks.find(book=> wishBookId == book.bookId))
        setWishlist(newWishlist)
    },[])


    return <section className="grid gap-8">
        {wishlist.map(book => <AddedBookCard key={book.id} book={book} parent={parent} setWishlist={setWishlist}></AddedBookCard>)}
    </section>
}

export default WishlistTab;