const getStoredReadList = () => {
    const storedReadList = localStorage.getItem('Readlist');
    if (storedReadList) {
        return JSON.parse(storedReadList);
    }
    else {
        return [];
    }
}

const setStoredReadList = (id) => {
    const storedReadList = getStoredReadList();
    const newStoredReadList = [...storedReadList, id];
    if(storedReadList.includes(id)){
        return ;
    }
    else{
        localStorage.setItem('Readlist', JSON.stringify(newStoredReadList));
    }
}


const getStoredWishList = () => {
    const storedWishList = localStorage.getItem('Wishlist');
    if (storedWishList) {
        return JSON.parse(storedWishList);
    }
    else {
        return [];
    }
}

const setStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    const newStoredWishList = [...storedWishList, id];
    if(storedWishList.includes(id)){
        return ;
    }
    else{
        localStorage.setItem('Wishlist', JSON.stringify(newStoredWishList));
    }
}
const removeFromReadList = ({bookId, setReadBooksId}) => {
    const storedReadList = getStoredReadList();
    const newStoredReadList = storedReadList.filter(id => bookId != id);

    if(storedReadList.includes(bookId)){
        localStorage.setItem('Readlist', JSON.stringify(newStoredReadList));
        setReadBooksId(newStoredReadList)
    }
}

const removeFromWishList = ({bookId, setWishedBooksId}) => {
    const storedWishList = getStoredWishList();
    const newStoredWishList = storedWishList.filter(id => bookId != id);
    if(storedWishList.includes(bookId)){
        localStorage.setItem('Wishlist', JSON.stringify(newStoredWishList));
        setWishedBooksId(newStoredWishList)
    }
}
export { getStoredReadList, setStoredReadList, getStoredWishList, setStoredWishList, removeFromReadList, removeFromWishList}