const CHANGE_INPUT = 'target/CHANGE_INPUT';
const CHANGE_CATEGORY = 'target/CHANGE_CATEGORY';

export const changeInput = (input) => ({
    type: CHANGE_INPUT,
    input,
});

export const changeCategory = (category) => ({
    type: CHANGE_CATEGORY,
    category,
});

const initialState = {
    input: '',
    category: '책',
}

function target(state = initialState, action) {
    switch(action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input,
            }
        case CHANGE_CATEGORY:
            return {
                ...state,
                category: action.category,
            }
        default:
            return state;
    }
}

export default target;