import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Item from './notificationItem';
import {connect} from 'react-redux';
import { addNotification } from '../../redux/action/notificationAction';



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
                console.log('clear')
              //  this.props.clear();   
            }  

            render(){
            const {notifications} = this.props;
            console.log('view noooooo', notifications)

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
           
           <View style={styles.btn}>
           <Button style={styles.btn}
                  title="CLEAR"              
                  onPress={this.clear}>                  
                </Button>
           </View>               
            </View>
        );
    }
}

        mapStateToProps = (state) => ({
        //user: state.auth.user,
        notifications: state.notifications.notifications,
    });


export default connect(mapStateToProps,null)(NotificationView);

const styles = StyleSheet.create({
    container:{
       backgroundColor:'#fff'
    },
    btn: {  
        marginTop:730,  
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 16,

    },
 
})