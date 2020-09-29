import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import login from './../modules/auth/login';
import TankTabNavigator from './TankTabNavigator';
import AuthLoadingScreen from '../modules/auth/AuthLoadingScreen';
import NotificationIcon from './notificationIcon';
import logScreen from '../modules/tankMonitorinSystem/logs/logView';
import NotificationView from '../modules/notification/notificationView';
import NotificationPusher from './notificationpusher';


const Auth_Stack = createStackNavigator({
    auth: {
        screen: login,        
    },   
   
},
{
    defaultNavigationOptions:()=>({
        headerShown:false
    })
}
     
);
const App_Stack = createStackNavigator({
    pusher : {
        screen: NotificationPusher
    },
    home: {
        screen: TankTabNavigator        
    },
    notification: {
        screen: NotificationView
    },
    },
    {
        defaultNavigationOptions: ({navigation}) =>({
         title: 'Tank Monitoring System',
    
        headerTitleStyle: {
         color:'white'
        },
         headerShown:true,
         
         headerBackImage:()=>false,
    
         headerStyle: {
            backgroundColor:'#000',   
        }, 
                
        headerRight:()=>  <NotificationIcon navigationProps={navigation}/>        
      
        }),
    },
    {
        initialRouteName:"pusher",
    },
);



export default createAppContainer(
    createSwitchNavigator(
        {
        AuthLoading:AuthLoadingScreen,    
        auth:Auth_Stack,
        App:App_Stack,
        },
        {
            initialRouteName:'AuthLoading',
        }
 )
);
