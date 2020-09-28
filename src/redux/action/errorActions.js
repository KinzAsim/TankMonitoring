
export const returnErrors = (message, status, id = null) => {
    //console.log('error')
    return {
        type : 'GET_ERRORS',
        payload : {
            message,
            status,
            id
        }
    };
};

export const clearErrors = () => {
    return {
        type : 'CLEAR_ERRORS'
    };
};

export const clearMessage = () => {
    return (dispatch,getState) => {
        
        dispatch({
            type: 'CLEAR_MESSAGE'
        })
    };
};