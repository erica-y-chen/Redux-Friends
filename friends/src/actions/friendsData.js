import axios from 'axios';
export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const getFriend = () => dispatch => {
    dispatch({ type: FETCHING });

    axios
        .get('https://localhost:5000/api/friends')
        .then(res => {
            dispatch({
                type: SUCCESS,
                payload: res.data
            });
        })

        .catch(err => {
            dispatch({
                type:FAILURE,
                payload: err
            });
        });
};