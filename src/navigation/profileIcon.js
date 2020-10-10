import React from 'react';
import {View,TouchableOpacity,StyleSheet,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

class ProfileIcon extends React.Component{
    constructor(props){
        super(props);
    }        

render(){ 
   const {navigationProps} = this.props;
    return(
        <TouchableOpacity style={styles.iconView} onPress={()=>navigationProps.navigate('profile')}>
            
            <Image
                style={styles.image}
                source={require('../../assets/images/account.png')}
            />
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
        borderColor:'#0F5E9C',
        borderRadius:30,
        padding:6
    },
    image:{
        width:25,
        height:25,
    }
});

