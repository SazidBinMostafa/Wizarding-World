import BookCard from "./BookCard";
import { useEffect, useState } from "react";
import axios from "axios";

function Main(){

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        axios.get('data.json')
        .then(data => setBooks(data.data))
    },[])
    
    return <main className="mx-5 lg:mx-32">
        <div className="relative">
            <img src="https://harrypottershop.co.uk/cdn/shop/collections/books_hero_2048x.jpg?v=1620745683" alt="" />
            <div className="absolute flex flex-col items-center justify-center px-5 lg:px-32 h-full w-full top-0 text-white text-center font-bold bg-opacity-35 bg-[#00020a]" >
                <h3 className="text-3xl lg:text-5xl">Books</h3>
                <p className="text-sm lg:text-xl">Celebrate the Wizarding World and gift someone with the Harry Potter books so they can discover the magic again and again! Choose from hardbacks, paperbacks, boxed sets, and more with this bespoke collection of books.</p>
            </div>
        </div>
        <div className="mt-20 mb-8 text-center">
            <h3 className="font-bold text-5xl">Books</h3>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
            {books && books.map(book=> <BookCard key={book.id} book={book}></BookCard>)}
        </div>
    </main>
}

export default Main;