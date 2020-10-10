import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {loadUser} from '../../redux/action/authAction';
import {connect} from 'react-redux';

class AuthLoadingScreen extends React.Component {

  componentDidMount(){
    this.submitAsync();
  }

  componentDidUpdate(prevProps){
    if(this.props !== prevProps){
        const{isAuthenticated} = this.props;
        if(isAuthenticated){
            //    console.log('authenticated')
               this.props.navigation.navigate('App');
           }
       }
    }

     submitAsync = async () => {
        let userToken = await AsyncStorage.getItem('userToken');
        console.log('token',userToken);
                  if(userToken){
                     await this.props.loadUser(userToken);
                     this.props.navigation.navigate('App');
                  }
                  else{
                      this.props.navigation.navigate('auth');
                  }
     };
 
     

     render(){
         return(
             <View>
               <ActivityIndicator/>
             </View>
         );
     }
 }
 
 const mapStateToProps = (state) => ({
     isAuthenticated:state.auth.isAuthenticated
 });

 export default connect(mapStateToProps,{loadUser})(AuthLoadingScreen);