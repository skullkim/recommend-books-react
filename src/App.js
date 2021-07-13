import styled from "styled-components";
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import BookLists from "./components/BookLists";
import SearchBook from "./components/SeachBook";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
   const [searchTarget, setSearchTarget] = useState('');
   const clickSearchBtn = (target) => {
       setSearchTarget(target);
   }
  return (
    <Main className="App">
        <SearchBook searchTarget={searchTarget} search={clickSearchBtn}/>
        <BookLists/>
    </Main>
  );
}

export default App;
