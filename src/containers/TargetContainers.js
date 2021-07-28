import React from 'react';
import {connect} from 'react-redux';
import {changeInput, changeCategory} from "../modules/target";
import BookLists from "../components/BookLists";
import SearchBook from "../components/SeachBook";
import CategoryList from "../components/CategoryList";

const SearchTargetContainer = ({
    changeInput,
    changeCategory,
}) => {
    console.log(changeInput);
    return (
        <SearchBook onChangeCategory={changeCategory} onChangeInput={changeInput}/>
    );
};

const BookListContainer = ({
    input,
    category,
}) => {
    return (
        <BookLists category={category} input={input}/>
    );
};

const CategoryListContainer = ({
    category,
    changeCategory,
    changeInput,
}) => {
    return (
        <CategoryList
            selectedCategory={category}
            onChangeCategory={changeCategory}
            onChangeInput={changeInput}
        />
    );
}

export const SearchTarget = connect(
    ({target}) => ({
        input: target.input,
    }),
    {
        changeInput,
        changeCategory,
    }
)(SearchTargetContainer);

export const BookList = connect(
    ({target}) => ({
        input: target.input,
        category: target.category,
    }),
    {}
)(BookListContainer);

export const Category = connect(
    ({target}) => ({
        category: target.category,
    }),
    {
        changeCategory,
        changeInput,
    }
)(CategoryListContainer);