import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

const SearchBox = styled.div`
  height: 50px;
  width: 300px;
  display: flex;
  align-items: center;
`;

const InputTarget = styled('input')`
  width: 200px;
  height: 30px;
`;

const SearchButton = styled(NavLink)`
    font-size: 1.3rem;
    color: black;
    height: 35px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SearchBook = ({search}) => {
    const [target, setTarget] = useState('');
    const inputTarget = useCallback((e) => {
        setTarget(e.target.value);
    }, [target]);

    return(
        <SearchBox>
            <InputTarget type="text" onChange={inputTarget}/>
            <SearchButton
                onClick={() => search(target)}
                to={`/${target}`}
            >
                <FaSearch/>
            </SearchButton>
        </SearchBox>
    )
}

export default SearchBook;