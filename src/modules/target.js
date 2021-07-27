const CHANGE_INPUT = 'target/CHANGE_INPUT';

export const changeInput = (input) => ({
    type: CHANGE_INPUT,
    input,
});

const initialState = {
    input: '책',
}

function target(state = initialState, action) {
    switch(action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input,
            }
        default:
            return state;
    }
}

export default target;