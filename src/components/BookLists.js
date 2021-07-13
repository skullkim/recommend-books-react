import React, {useState, useEffect} from 'react';
import axios from "axios";

const BookLists = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const booksData = async() => {
            try {
                setLoading(true);
                const {data: {documents}} = await axios({
                    method: 'get',
                    url: 'https://dapi.kakao.com/v3/search/book?target=title',
                    headers: {Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_KEY}`},
                    params: {
                        query: '프로그래밍',
                    }
                });
                setLoading(false);
                setBooks(documents);
            }
            catch(err) {
               return console.error(err);
            }
        }
        booksData();
    }, []);

    if(loading) {
        return(<div>Loading...</div>);
    }



    return (
        <div>
            {books.map(({authors, contents, thumbnail, title}) => (
                <div>
                    <div>{authors}</div>
                    <div>{contents}</div>
                    <img src={thumbnail} alt={"thumbnail"}/>
                    <div>{title}</div>
                </div>
            ))}
        </div>
    );
};

export default BookLists;