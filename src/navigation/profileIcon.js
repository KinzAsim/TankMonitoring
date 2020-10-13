import React from 'react';
import {View,TouchableOpacity,StyleSheet,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Entypo';

class ProfileIcon extends React.Component{
    constructor(props){
        super(props);
    }        

render(){ 
   const {navigationProps} = this.props;
    return(
        <TouchableOpacity style={styles.iconView} onPress={()=>navigationProps.navigate('profile')}>
            <Icon style={styles.image} name="user" size = {20} color="#800080"/> 
            {/* <Image
                
                color="#000"
                source={require('../../assets/images/account.png')}
            /> */}
        </TouchableOpacity>
    );
}
}
export default ProfileIcon;

const styles= StyleSheet.create({
    iconView:{
        marginLeft:wp('4%'),
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#800080',
        borderRadius:30,
        padding:6
    },
    image:{
        width:25,
        height:25,
        padding:2
    }
});

