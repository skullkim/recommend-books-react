import React from 'react';
import {connect} from 'react-redux';
import {changeInput} from "../modules/target";
import BookLists from "../components/BookLists";
import SearchBook from "../components/SeachBook";

const SearchTargetContainer = ({
    changeInput,
}) => {
    console.log(changeInput);
    return (
        <SearchBook onChangeInput={changeInput}/>
    );
};

const BookListContainer = ({
    input,
}) => {
    return (
        <BookLists input={input}/>
    );
};

export const SearchTarget = connect(
    ({target}) => ({
        input: target.input,
    }),
    {
        changeInput,
    }
)(SearchTargetContainer);

export const BookList = connect(
    ({target}) => ({
        input: target.input,
    }),
    {}
)(BookListContainer);