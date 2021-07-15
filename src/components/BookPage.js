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
        console.log(1111);
        setSearchTarget(target);
        setSelectedCategory('');
    }, [searchTarget]);

    const selectCategory = useCallback((category) => {
        setSelectedCategory(category);
        setSearchTarget('');
    }, [selectedCategory]);
    console.log(selectedCategory);
    return (
        <Main className="App">
            <SearchBook searchTarget={searchTarget} search={clickSearchBtn}/>
            <CategoryList selected={selectedCategory} selectCategory={selectCategory}/>
            <BookLists searchTarget={searchTarget} category={selectedCategory}/>
        </Main>
    );
}

export default BookPage;