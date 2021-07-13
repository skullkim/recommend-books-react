import React, {useState} from 'react';
import styled from 'styled-components';

const SearchBook = ({searchTarget, search}) => {
    const [target, setTarget] = useState('');
    const inputTarget = (e) => {
        setTarget(e.target.value);
    }
    return(
        <input type="text" onChange={inputTarget}/>
    )
}

export default SearchBook;