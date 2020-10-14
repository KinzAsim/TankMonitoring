const initState = {
    logsLoading:false,
    logs:[]
};

const LogReducer = (state = initState , action) => {
   // console.log('LogReducer',action.payload.data)

    switch(action.type)
    {
        case 'UPDATE_LOGS':
           return {
              ...state,
              logsLoading: true
            }   
        case 'GET_LOGS':
            return {
                ...state,
                logs:action.payload.data,
                logsLoading: false,
              
            } 
        default: 
            return state;    
    }

}

export default LogReducer;