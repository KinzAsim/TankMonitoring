 import React from 'react';
 import {ActivityIndicator, View} from 'react-native';
 import AsyncStorage from '@react-native-community/async-storage';
 import {loadUser} from '../../redux/action/authAction';
 import {connect} from 'react-redux';



class AuthLoadingScreen extends React.Component{
     
    componentDidMount(){
    this.submitAsync();
    }
     
    //fetch API
    componentDidUpdate(prevProps){
       if(this.props !== prevProps){
           const{isAuthenticated} = this.props;
        //    console.log(isAuthenticated);

           if(isAuthenticated){
            //    console.log('authenticated')
               this.props.navigation.navigate('home');
           }
       }
    }

     submitAsync = async () => {
        let userToken = await AsyncStorage.getItem('userToken');
        console.log('token',userToken);
                  if(userToken){
                     await this.props.loadUser(userToken);
                     this.props.navigation.navigate('home');
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