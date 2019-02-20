import store from '../store';

export const fetch_post = () => {
    return {
        type: 'FETCH_POST'
    }
}

export const fetched_post = (data) => {
    return {
        type: 'FETCHED_POST',
        data: data
    }
}

export const fetch_error = () => {
    return {
        type: 'FETCH_ERROR'
    }
}

export const thunk_action_creator = (username) => {
    const user = username.replace(/\s/g, '');
    store.dispatch(fetch_post);

    return (dispatch, getState) => {
        return fetch(`https://api.github.com/users/${user}`)
        .then( data => data.json())
        .then( data => {
            if(data.message === "Not Found"){
                throw new Error("No such user found!!");
            }else{
                dispatch(fetched_post(data));
            }
        })
        .catch( error => dispatch(fetch_error()))
    } 

}