
const initState = {
    notifications:[],
    count:0
};

const NotificationReducer = (state = initState, action) => {
//   console.log('notification', action.payload)
    switch(action.type){
        case 'Add_Notification':
            return{
                ...state,
                notifications : [action.payload, ...state.notifications],
                count : state.count + 1
            }
        case 'Clear_notification': 
        return{
            ...state,
            notifications : [],
            count : 0
        }
        default : 
            return state;    
            
    }
}


export default NotificationReducer;