import React from 'react';
import {View,StyleSheet,Image,Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Card} from 'react-native-elements';
import{TouchableOpacity} from 'react-native-gesture-handler';
import{getSensors} from '../../redux/action/tankAction';
import {loadUser} from '../../redux/action/authAction';
import{connect} from 'react-redux';
import {signOut} from '../../redux/action/authAction';
import AsyncStorage from '@react-native-community/async-storage';

class ProfileScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Index:2
        }
    }        
    
    _signOut = async () => {
        AsyncStorage.removeItem('userToken')
        this.props.signOut();
        this.props.navigation.navigate('auth')
     };

render(){ 
    const{Index}=this.state;
    const{user}=this.props;
    //console.log('user',user)

    return(
        <View style={styles.container}>
        
        <View style={styles.view1}>
            <View style={styles.logoView}>
            <Image
                style={styles.logo}
                source={require('../../../assets/images/avatar.png')}
            />
            </View>
            <Card containerStyle={styles.card}>
                <View style={{alignItems:'center'}}> 
                    <Text style={styles.headingText}>{user.name}</Text>
                    <Text style={styles.text}>{user.email}</Text>
                </View>
                <View style={{alignItems:'center',marginTop:hp('10%')}}>
                    <TouchableOpacity style={styles.btn} onPress={()=>console.log('change password')}>
                        <Text style={{color:'#fff',fontWeight:'bold'}}>Change Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn,{backgroundColor:'transparent',marginTop:hp('2.2%')}]}
                     onPress={()=>this._signOut()}
                    >
                        <Text style={{color:'#800080',fontWeight:'bold'}}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </Card>
        </View>
        
        <View style={styles.view2}>
        </View>
    </View>
    );
}
}

    const mapStateToProps = (state) => ({
        user:state.auth.user,
        isAuthenticated:state.auth.isAuthenticated
    })

export default connect(mapStateToProps,{getSensors,signOut})(ProfileScreen);

const styles = StyleSheet.create({
    container: {
      flex:1,
      //justifyContent:'center',
      //alignItems:'center',
      //backgroundColor: '#fff',
    },
    view1:{
        height:hp('40%'),
        backgroundColor:'#800080',
        alignItems: 'center',
    },
    view2:{
        backgroundColor:'#dedee3'
    },
    logo:{
        width:90,
        height:90,
        borderRadius:45
    },
    logoView:{
        backgroundColor:'#fff',
        marginTop:hp('17%'),
        padding:3,
        borderColor:'#fff',
        borderRadius:50,
        elevation:5,
        zIndex: 6,
    },
    card:{
        backgroundColor:'#fff',
        borderWidth:0,
        //height:hp('10%'),
        width:wp('90%'),
        elevation:5,
        shadowRadius:15,
        zIndex: 5,
        marginTop:hp('-6%'),
        height:hp('55%'),
        borderRadius:15,
        alignItems:'center',
        paddingVertical: hp('5%')
    },
    btn:{
        width:wp('60%'),
        height:hp('6%'),
        backgroundColor:'#800080',
        paddingHorizontal:10,
        paddingVertical:10,
        marginTop:5,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#800080',
    },
    headingText:{
        fontWeight:'bold',
        fontSize:17,
        color:'#455A64',
        marginTop:hp('3%')
    },
    text:{
        //fontWeight:'bold',
        fontSize:14,
        color:'#455A64'
    },
   
  });