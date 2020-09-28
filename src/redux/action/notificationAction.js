

export const addNotification = (data) => async(dispatch,getState) => {    
        console.log('Notify',data);
        // dispatch({
        //     type:'Add_Notification',
        //     payload:data
        // });
    }




export const NotificationAction = () => async (dispatch, getState) => {
    dispatch({
        type:'Clear_notification'
    })
}


