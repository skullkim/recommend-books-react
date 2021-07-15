import React, {useState, useCallback} from 'react';
import styled from "styled-components";
import BookLists from "./BookLists";
import SearchBook from "./SeachBook";
import CategoryList from "./CategoryList";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BookPage = () => {
    const [searchTarget, setSearchTarget] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('책');
    const clickSearchBtn = useCallback((target) => {
        setSearchTarget(target);
        setSelectedCategory('');
    }, [searchTarget]);

    const selectCategory = useCallback((category) => {
        setSelectedCategory(category);
        setSearchTarget('');
    }, [selectedCategory]);
    return (
        <Main className="App">
            <SearchBook search={clickSearchBtn}/>
            <CategoryList selected={selectedCategory} selectCategory={selectCategory}/>
            <BookLists searchTarget={searchTarget} category={selectedCategory}/>
        </Main>
    );
}

export default BookPage;