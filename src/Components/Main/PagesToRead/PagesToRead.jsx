import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";
import { getStoredReadList } from "../../../Utilities/Utilities";
import PropTypes from 'prop-types';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'Fuchsia'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


function PagesToRead() {
    const [allBooks, setAllBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    

    const [readBooks, setReadBooks] = useState([]);
    const [data, setData] = useState([]);

    const readListBooksId = getStoredReadList();

    useEffect(()=>{
        const loadBooks = async () => {
            try{
                const loadedBooks = await fetch('https://raw.githubusercontent.com/SazidBinMostafa/Wizarding-World-Resources/main/data.json');
            const data = await loadedBooks.json();
            setAllBooks(data)
            setLoading(false)
            }
            catch(error){console.log(error)}
        }

        
        loadBooks()
    },[])
    
    useEffect(() => {
        if(!loading){
            const newReadBooks = readListBooksId.map(readBookId => allBooks.find(book => readBookId == book.bookId))
        setReadBooks(newReadBooks);

        }
    }, [loading, allBooks])

    useEffect(()=>{
        const newData = [];
        for (const book of readBooks) {
            const bookData = {
                name: book.bookName,
                Pages: book.totalPages,
            };
            newData.push(bookData);
        }
        setData(newData);
        
    },[readBooks])

    if (loading) {
        return <div className="flex items-center justify-center h-screen">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    
    return <div className="w-full" >
        <ResponsiveContainer width="100%" height={800} >
        <BarChart
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"  angle={-90} height={300} textAnchor="end" interval={0}/>
            <YAxis />
            <Tooltip />
            <Bar dataKey="Pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
            </Bar>
        </BarChart>
        </ResponsiveContainer>
    </div>
}

export default PagesToRead;


TriangleBar.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    

}