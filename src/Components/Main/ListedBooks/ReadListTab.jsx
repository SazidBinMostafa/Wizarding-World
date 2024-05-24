import { useEffect, useState } from "react";
import AddedBookCard from "./AddedBookCard";
import { getStoredReadList } from "../../../Utilities/Utilities";
import PropTypes from 'prop-types';

function ReadListTab({sortBy}) {
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

    const sortReadBooks = () => {
        let sortedBooks = [...readBooks];
        if (sortBy === "Rating") {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === "Number_of_pages") {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        } else if (sortBy === "Published_year") {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
        return sortedBooks;
    };

    useEffect(() => {
        loadBooks();
        if (allBooks.length > 0 && readListBooksId) {
            const newReadBooks = readListBooksId.map(readBookId => allBooks.find(book => readBookId == book.bookId))
            setReadBooks(newReadBooks)

        }
    }, [loading, readBooksId])

    const sortedReadBooks = sortReadBooks();

    if (loading) {
        return <div className="flex items-center justify-center h-screen">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    console.log(sortBy)
    return <section className="grid gap-8">
        {sortedReadBooks && sortedReadBooks.map(book => <AddedBookCard key={book.id} book={book} parent={parent} setReadBooksId={setReadBooksId}></AddedBookCard>)}
    </section>
}

export default ReadListTab;


ReadListTab.propTypes = {
    sortBy: PropTypes.string
}