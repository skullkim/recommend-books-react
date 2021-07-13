import logo from './logo.svg';
import './App.css';
import BookLists from "./components/BookLists";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Main className="App">
      <BookLists/>
    </Main>
  );
}

export default App;
