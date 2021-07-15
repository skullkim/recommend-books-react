import React from 'react';
import styled, {css} from 'styled-components';

// const categories = ['전체', '프로그래밍', '경재', '경영', 'IT'];
const categories = [
    {name: '전체', target:'책'},
    {name: '프로그래밍', target:'프로그래밍'},
    {name: '경제', target: '경제'},
    {name: '경영', target: '경영'},
    {name: 'IT', target: 'IT'},
];

const CategoryBox = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-evenly;
`;

const Category = styled.div`
  margin-right: 10px;
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
                >
                    {category.name}
                </Category>
            )}
        </CategoryBox>
    );
}

export default CategoryList;