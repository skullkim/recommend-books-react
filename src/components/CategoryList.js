import React from 'react';
import styled, {css} from 'styled-components';

const categories = ['전체', '프로그래밍', '경재', '경영', 'IT'];

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
                    key={category}
                    selected = {selected === category}
                    onClick={() => selectCategory(category)}
                >
                    {category}
                </Category>
            )}
        </CategoryBox>
    );
}

export default CategoryList;