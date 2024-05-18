import { Bar, BarChart, CartesianGrid, Cell, Tooltip, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";
import { getStoredReadList } from "../../../Utilities/Utilities";


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

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
    const allBooks = [];
    const [readBooks, setReadBooks] = useState([]);
    const [data, setData] = useState([]);

    const readListBooksId = getStoredReadList();

    useEffect(() => {
        const newReadBooks = readListBooksId.map(readBookId => allBooks.find(book => readBookId == book.bookId))
        setReadBooks(newReadBooks);

        const newData = [];
        for (const book of readBooks) {
            const bookData = {
                name: book.bookName,
                Pages: book.totalPages,
            };
            newData.push(bookData);
        }
        setData(newData);

    }, [readBooks])
    
    return <div className="w-full">
        <BarChart
            width={1250}
            height={500}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
            </Bar>
        </BarChart>
    </div>
}

export default PagesToRead;