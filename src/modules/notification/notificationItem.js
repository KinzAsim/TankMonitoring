import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { colors, fonts } from '../../style';

class Item extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
       const {message}= this.props;
        console.log('Message', message);
        //<Text style={styles.text}>{message}</Text>
        return(
            <LinearGradient colors={["#44318D","#2A183B"]}  style={{borderRadius:30,width:wp('93%'),marginBottom:10, marginLeft:wp('3.5%'),marginVertical:hp('0.1%')}}>
            <View
            style={styles.itemThreeContainer}
            >
            <View style={styles.itemThreeSubContainer}>
              <View style={styles.itemThreeContent}>
                <Text style={styles.itemThreeBrand}> 
                  {message}
                </Text>
              </View>
                <View>                 
                </View>
              </View>
            </View>
          </LinearGradient>
        );
    }
}
export default Item;

const styles = StyleSheet.create({
  itemThreeContainer: {
    backgroundColor: 'transparent',
    padding: wp('3%'),
    borderRadius: wp('2.5%'),
    //width:wp('100%'),
    //shadowColor: colors.background,
    shadowOffset: {
      width: wp('0%'),
      height: hp('1%'),
    },
    //shadowOpacity: 0.25,
    //shadowRadius: wp('10%'),
    //elevation: wp('1%'),
    //marginVertical: hp('0.5%'),
    //marginHorizontal:wp('2%'),
  },
  itemThreeSubContainer: {
    flexDirection: 'row',
  },
  itemThreeContent: {
    flex: 1,
    paddingLeft: wp('2%'),
    justifyContent: 'space-between',
  },
  itemThreeBrand: {
    fontFamily: fonts.primaryRegular,
    fontSize: hp('1.8%'),
    color: colors.labelOne,
  },
  itemThreeSubtitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: hp('1.5%'),
    color: colors.whiteOne,
    marginTop: hp(0.3)
  },
  title: {
    fontFamily: fonts.primaryRegular,
    fontSize: hp('1.8%'),
    color: '#000',
    fontWeight: 'bold'
  }
});
