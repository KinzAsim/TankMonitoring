import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { colors, fonts } from '../../../style';
import { createDispatchHook } from 'react-redux';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

class Item extends React.Component{
    constructor(props) {
        super(props);
    }
//colors.primary,colors.secondary
    render() {
        const {created_at,updated_at,messagedata,title} = this.props; 
       // console.log('messagedata',messagedata)
       //colors={["#0F5E9C",colors.secondary]}        
        return(
          <LinearGradient colors={["#0F5E9C","#800080"]}  style={{borderRadius:30,width:wp('93%'),marginBottom:10, marginLeft:wp('3.5%'),marginVertical:hp('0.1%')}}>
            <View
            //key={item.id}
            style={styles.itemThreeContainer}
            //onPress={() => this._openArticle(item)}
            >
            <View style={styles.itemThreeSubContainer}>
              <View style={styles.itemThreeContent}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>{title}: </Text>
                <Text style={styles.itemThreeBrand}> 
                  {
                  messagedata === 1 ? 
                  (
                  <Text>ON</Text>
                  )
                  :
                  (
                  <Text>OFF</Text>
                  )}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.title} numberOfLines={1}>From: </Text>
                <Text style={styles.itemThreeSubtitle} numberOfLines={1}>{created_at}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.title} numberOfLines={1}>To: </Text>
                <Text style={styles.itemThreeSubtitle} numberOfLines={1}>{updated_at}</Text>
              </View>
                <View>
                 
                </View>
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
    color: '#fff',
    fontWeight: 'bold'
  }
});
