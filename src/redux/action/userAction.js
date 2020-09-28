import { 
    USER_LOADING,   
    GET_USERS,
} from '../action/types';



export const getUsers = () => {
 
    return (dispatch, getState) => {

        dispatch({
            type : USER_LOADING
        })

        axios.get(`${url}/users/`)
        .then(res => dispatch({
            type : GET_USERS,
            payload : res.data
        }))
        .catch(err => {
        });
    }
};