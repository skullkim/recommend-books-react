import React from 'react';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import BookPage from "./components/BookPage";


function App() {
    return <Route path={'/:result?'} component={BookPage}/>
}

export default App;
