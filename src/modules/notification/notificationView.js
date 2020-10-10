import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Item from './notificationItem';
import {connect} from 'react-redux';
import { ClearNotification } from '../../redux/action/notificationAction';
import ActionButton  from 'react-native-action-button';



class NotificationView extends React.Component{
constructor(props){
    super(props);
    this.state={
        // selected: -1,
        // selectedValue : null,
        // DATA : [
        //     {
        //       id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        //       title: "First Item",
        //     },
        //     {
        //       id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        //       title: "Second Item",
        //     },
        //     {
        //       id: "58694a0f-3da1-471f-bd96-145571e29d72",
        //       title: "Third Item",
        //     },
        //   ]
    }
}
 
            componentDidMount(){
                const {notifications} = this.props;
            }

            clear = () => {
                // console.log('clear')
                this.props.ClearNotification();   
            }  

            render(){
            const {notifications} = this.props;
          //  console.log('view noooooo', notifications)

   // const{DATA} = this.state;

        return(

            <View style={styles.container}>
                 {notifications.length > 0 ? (
                <FlatList                
                    data={ notifications }                               
                    renderItem={({item}) => 
                    <Item 
                    variant={item.variant} 
                    type={item.type} 
                    message={item.title}/>}
                    keyExtractor={(item, index) => index.toString()}
                /> 
                ) : (
                <View style={{flex:0.9, alignItems:'center', justifyContent:'center', marginTop:50}}>
                    <Text style={{color: 'black', fontSize: 20,fontWeight: 'bold',}}>No Notifications!!</Text>
                </View>
                )}
           
          
           <ActionButton 
           buttonColor="#800080" 
           style={styles.btn}
           buttonText="CLEAR"
           buttonTextStyle={{fontSize:10}}
           onPress={this.clear}>               
            </ActionButton>            
            </View>
           
        );
    }
}

        mapStateToProps = (state) => ({
        //user: state.auth.user,
        notifications: state.notifications.notifications,
    });


export default connect(mapStateToProps,{ClearNotification})(NotificationView);

const styles = StyleSheet.create({
    container:{flex:1,
       backgroundColor:'#fff'
    },
    btn: {  
        flexDirection: 'row',
        justifyContent: 'flex-end'

    },
 
})