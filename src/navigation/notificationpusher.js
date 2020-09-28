import Pusher from 'pusher-js/react-native';
import React from 'react';
import { View, Platform,StatusBar} from 'react-native';
import { updateSensors } from '../redux/action/tankAction';
import {connect} from 'react-redux';
import PushNotification from 'react-native-push-notification';
import {addNotification} from '../redux/action/notificationAction';

var channel = null;


class NotificationPusher extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loading:true
        }
    }
    
//pusher 
async componentDidMount() {
    const {user,updateSensors,addNotification,notification} = await this.props;
    console.log('add', notification);

    var pusher = new Pusher('f00f0afe5cbf360133db', {
        cluster: 'ap2',
        forceTLS: true
    });
   // console.log('id', user.id)

    channel = pusher.subscribe(`${user.id}`);
    //console.log('channel',channel)

    channel.bind ('update',function(data) {   
       // console.log('pusher', data)     
        updateSensors(data);
    },
   
    channel.bind ('notification',function(data){ 
        //console.log('Notify',data)
        addNotification(data)

        if(Platform.OS === 'android'){
        PushNotification.localNotification ({
            id:0,
            ticker: "Notification",
            messgae:data.title,
            vibration:300
            });
            }
        })
    );
    this.setState=({
        loading: false
    });
    this.props.navigation.navigate('home');
    }

render() {
         const {notification,user}= this.props;
         const{loading}=this.state;
         console.log('state',notification);

    return(
     <StatusBar  backgroundColor="black"/>
        ); 
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
    notification: state.notifications.notifications,
})
    
export default connect(mapStateToProps,{updateSensors, addNotification})(NotificationPusher);