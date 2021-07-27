import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from "axios";


const BooksInformation = styled.div`
  height: 300px;
  width: 700px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 10px;
`;

const BookInfo = styled.div`
  display: flex;
  margin: 0 20px;
`;

const BookLink = styled('a')`
  text-decoration: none;
  color: black;
`;

const BookLists = ({input}) => {
    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(false);
    console.log(input);
    useEffect(() => {
        const booksData = async() => {
            setLoading(true);
            try {
                const {data: {documents}} = await axios({
                    method: 'get',
                    url: 'https://dapi.kakao.com/v3/search/book?target=title',
                    headers: {Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_KEY}`},
                    params: {
                        query: `${input}`,
                    }
                });
                setBooks(documents);
                setLoading(false);
            }
            catch(err) {
                return console.error(err);
            }
        }
        booksData();
    }, [input]);

    if(loading) {
        return (<div>Loading...</div>);
    }

    if(!books) {
        return null;
    }
    else if (Array.isArray(books) && books.length === 0){
        return (<div>No search result</div>);
    }

    return (
        <div>
            {books.map(({authors, contents, thumbnail, title, url}) => (
                <BooksInformation key={url}>
                    <BookInfo>
                        <p><BookLink href={url}>제목: {title},</BookLink></p>
                        <p>저자: {authors}</p>
                    </BookInfo>
                    <BookInfo>
                        <img src={thumbnail} alt="thumbnail"/>
                        <p>{contents}</p>
                    </BookInfo>
                </BooksInformation>
            ))}
        </div>
    );
}

// const BookLists = ({searchTarget, category}) => {
//     const [books, setBooks] = useState(null);
//     const [loading, setLoading] = useState(false);
//     useEffect(() => {
//         const booksData = async() => {
//             setLoading(true);
//             try {
//                 const {data: {documents}} = await axios({
//                     method: 'get',
//                     url: 'https://dapi.kakao.com/v3/search/book?target=title',
//                     headers: {Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_KEY}`},
//                     params: {
//                         query: `${searchTarget || category}`,
//                     }
//                 });
//                 setBooks(documents);
//                 setLoading(false);
//             }
//             catch(err) {
//                return console.error(err);
//             }
//         }
//         booksData();
//     }, [searchTarget, category]);
//
//     if(loading) {
//         return (<div>Loading...</div>);
//     }
//
//     if(!books) {
//         return null;
//     }
//     else if (Array.isArray(books) && books.length === 0){
//         return (<div>No search result</div>);
//     }
//
//     return (
//         <div>
//             {books.map(({authors, contents, thumbnail, title, url}) => (
//                 <BooksInformation key={url}>
//                     <BookInfo>
//                         <p><BookLink href={url}>제목: {title},</BookLink></p>
//                         <p>저자: {authors}</p>
//                     </BookInfo>
//                     <BookInfo>
//                         <img src={thumbnail} alt="thumbnail"/>
//                         <p>{contents}</p>
//                     </BookInfo>
//                 </BooksInformation>
//             ))}
//         </div>
//     );
// }

export default BookLists;