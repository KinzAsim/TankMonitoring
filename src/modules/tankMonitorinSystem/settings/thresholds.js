import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Card } from 'react-native-elements';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';




class ThresholdScreen extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={{marginTop:70}}>
                    <Text style={styles.text}>UPPER_TANK THRESHOLD</Text>
                    <View style={{flexDirection:'row-reverse'}}>
                    <Card containerStyle={[styles.cardMainContainer,{backgroundColor:'#fff', width:200, height:200
                    }]}>
                <Card.Title>Upper_Level</Card.Title>
                    <View style={{flexDirection:'row-reverse',marginHorizontal:20}}>
                        <View style={styles.IconView}>
                              <Icon1 name="propane-tank-outline" size={50} color="#0F5E9C"/>
                        </View> 
                            
                        <View style={{justifyContent:'center'}}>
                             <Text style={styles.text1}>57</Text>
                        </View>          
                     </View>                    
                </Card>

                    <Card containerStyle={[styles.cardMainContainer,{backgroundColor:'#fff', width:200
                    }]}>
                        <Card.Title>Lower_level</Card.Title>
                        <View style={{flexDirection:'row-reverse',marginHorizontal:20}}>
                        <View style={styles.IconView}>
                              <Icon1 name="propane-tank-outline" size={50} color="#0F5E9C"/>
                        </View> 
                            
                        <View style={{alignItems:'baseline'}}>
                             <Text style={styles.text1}>5</Text>
                        </View>          
                     </View>     

                    </Card>
                    </View>
                    </View>
                
                    
                    <View style={{marginTop:50}}>
                    <Text style={styles.text}>LOWER_TANK THRESHOLD</Text>
                    <View style={{flexDirection:'row-reverse'}}>
                    <Card containerStyle={[styles.cardMainContainer,{backgroundColor:'#fff', width:200, height:200
                    }]}>
                <Card.Title>Upper_Level</Card.Title>
                    <View style={{flexDirection:'row-reverse',marginHorizontal:20}}>
                        <View style={styles.IconView}>
                              <Icon1 name="propane-tank-outline" size={50} color="#0F5E9C"/>
                        </View> 
                            
                        <View style={{alignItems:'baseline'}}>
                             <Text style={styles.text1}>107</Text>
                        </View>          
                     </View>                    
                </Card>

                    <Card containerStyle={[styles.cardMainContainer,{backgroundColor:'#fff', width:200
                    }]}>
                        <Card.Title>Lower_level</Card.Title>
                        <View style={{flexDirection:'row-reverse',marginHorizontal:20}}>
                        <View style={styles.IconView}>
                              <Icon1 name="propane-tank-outline" size={50} color="#0F5E9C"/>
                        </View> 
                            
                        <View style={{alignItems:'baseline'}}>
                             <Text style={styles.text1}>2357</Text>
                        </View>          
                     </View>     

                    </Card>
                    </View>
                    </View>
                    
                </View>                
            </View>
        );
    }
}

export default ThresholdScreen;


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',        
    },
    card:{  
        flex:0.96,
        marginTop:30,
        marginLeft:20,
        marginRight:20,
        backgroundColor:'#fff',
        elevation:10
    },
    cardMainContainer:{
        elevation:60
    },
    text:{
        alignSelf:'center', 
        color:'#2389DA', 
        fontWeight:'bold',
        fontSize:25,
       
    },
    IconView:{
        backgroundColor:'#fff',
        elevation:10,
        marginTop:20,
        marginLeft:10                  
    },
    text1: {
        fontSize:40,
        fontWeight:'bold',
        color:'#2389DA',
        marginTop:20
    },
    text2: {
        fontSize:15,
        marginBottom:2
    }
})