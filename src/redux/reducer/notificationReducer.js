
const initState = {
    notifications:[]
};

const NotificationReducer = (state = initState, action) => {
  //  console.log('notification',action.payload)
    switch(action.type){
        case 'Add_Notification':
            return{
                ...state,
                notifications : actions.payload
            }
        case 'Clear_notification': 
        return{
            ...state
        }
        default : 
            return state;    
            
    }
}


export default NotificationReducer;