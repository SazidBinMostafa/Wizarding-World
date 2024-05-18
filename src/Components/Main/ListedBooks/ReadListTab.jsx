import { useEffect, useState } from "react";
import AddedBookCard from "./AddedBookCard";
import { getStoredReadList } from "../../../Utilities/Utilities";

function ReadListTab() {
    const allBooks = [];
    const [readBooks, setReadBooks] = useState([]);
    const parent = 'Readlist';

    const readListBooksId = getStoredReadList();

    useEffect(() => {
        const newReadBooks = readListBooksId.map(readBookId=> allBooks.find(book=> readBookId == book.bookId))
        setReadBooks(newReadBooks)
    },[])


    return <section className="grid gap-8">
        {readBooks.map(book => <AddedBookCard key={book.id} book={book} parent={parent} setReadBooks={setReadBooks}></AddedBookCard>)}
    </section>
}

export default ReadListTab;