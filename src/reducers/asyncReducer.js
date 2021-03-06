import { FETCH_POST, FETCHED_POST, FETCH_ERROR } from '../actions/ActionTypes';

const initialState = {
    userData: {},
    isFetching: false,
    isError: false
}

const asyncReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_POST:
            return Object.assign({}, state, {
                userData: {},
                isFetching: true,
                isError: false
            })
        case FETCHED_POST:
            return Object.assign({}, state, {
                userData: action.data,
                isFetching: false,
                isError: false
            })
        case FETCH_ERROR:
            return Object.assign({}, state, {
                userData: {},
                isFetching: false,
                isError: true
            })
        default:
            return state;
    }
}

export default asyncReducer;