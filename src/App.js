import styled from "styled-components";
import React, {useState, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import BookLists from "./components/BookLists";
import SearchBook from "./components/SeachBook";
import CategoryList from "./components/CategoryList";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
   const [searchTarget, setSearchTarget] = useState('');
   const [selectedCategory, setSelectedCategory] = useState('전체');
   const clickSearchBtn = useCallback((target) => {
       console.log(1111);
       setSearchTarget(target);
   }, [searchTarget]);

   const selectCategory = useCallback((category) => {
       setSelectedCategory(category);
   }, [selectedCategory]);

  return (
    <Main className="App">
        <SearchBook searchTarget={searchTarget} search={clickSearchBtn}/>
        <CategoryList selected={selectedCategory} selectCategory={selectCategory}/>
        <BookLists searchTarget={searchTarget}/>
    </Main>
  );
}

export default App;
