import { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

export function useReducerExample(initialCount = 0) {
    const [state, dispatch] = useReducer(reducer, { count: initialCount });
    return { state, dispatch };
}