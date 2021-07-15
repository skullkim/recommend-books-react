import React from 'react';
import styled, {css} from 'styled-components';
import {NavLink} from 'react-router-dom';

// const categories = ['전체', '프로그래밍', '경재', '경영', 'IT'];
const categories = [
    {name: '전체', target:'책', url:'book'},
    {name: '프로그래밍', target:'프로그래밍', url:'programming'},
    {name: '경제', target: '경제', url:'economy'},
    {name: '경영', target: '경영', url:'management'},
    {name: 'IT', target: 'IT', url:'it'},
];

const CategoryBox = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-evenly;
`;

const Category = styled(NavLink)`
  margin-right: 10px;
  text-decoration: none;
  color: black;
  &:hover {
    cursor: grab;
  }
  ${props => props.selected && css`
    font-weight: bold;
    text-decoration: underline;
  `}
`;

const CategoryList = ({selected, selectCategory}) => {
    return (
        <CategoryBox>
            {categories.map(category =>
                <Category
                    key={category.name}
                    selected = {selected === category.target}
                    onClick={() => selectCategory(category.target)}
                    exact={category.target === '책'}
                    to={category.target === '책' ? '/' : `${category.url}`}
                >
                    {category.name}
                </Category>
            )}
        </CategoryBox>
    );
}

export default CategoryList;