

export const addNotification = (data) => async(dispatch,getState) => {    
       // console.log('from action',data);
        dispatch({
            type:'Add_Notification',
            payload:data
        });
    }




export const NotificationAction = () => async (dispatch, getState) => {
    dispatch({
        type:'Clear_notification'
    })
}


