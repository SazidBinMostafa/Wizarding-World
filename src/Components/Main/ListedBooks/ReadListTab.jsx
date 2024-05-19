import { useEffect, useState } from "react";
import AddedBookCard from "./AddedBookCard";
import { getStoredReadList } from "../../../Utilities/Utilities";

function ReadListTab() {
    const [allBooks, setAllBooks] = useState([]);
    const [readBooksId, setReadBooksId] = useState([]);
    const [readBooks, setReadBooks] = useState([]);
    const parent = 'Readlist';
    const [loading, setLoading] = useState(true);
    const readListBooksId = getStoredReadList();

    const loadBooks = async () => {
        const loadedBooks = await fetch('https://raw.githubusercontent.com/SazidBinMostafa/Wizarding-World-Resources/main/data.json');
        const data = await loadedBooks.json();
        setAllBooks(data)
        setLoading(false)
    }

    useEffect(() => {
        loadBooks();
        if (allBooks.length > 0 && readListBooksId) {
            const newReadBooks = readListBooksId.map(readBookId => allBooks.find(book => readBookId == book.bookId))
            setReadBooks(newReadBooks)

        }
    }, [loading, readBooksId])

    if (loading) {
        return <div className="flex items-center justify-center h-screen">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    return <section className="grid gap-8">
        {readBooks.map(book => <AddedBookCard key={book.id} book={book} parent={parent} setReadBooksId={setReadBooksId}></AddedBookCard>)}
    </section>
}

export default ReadListTab;