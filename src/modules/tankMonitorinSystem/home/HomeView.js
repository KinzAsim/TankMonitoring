import React from 'react';
import {StyleSheet, ScrollView, Text,YellowBox, LogBox,SafeAreaView, StatusBar, ActivityIndicator,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements';
import { View} from 'react-native-ui-lib';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import  Svg, {Circle}  from 'react-native-svg';
import Icon4 from 'react-native-vector-icons/AntDesign';
import DropDownPicker from 'react-native-dropdown-picker';
import {connect} from 'react-redux';
import {getSensors} from '../../../redux/action/tankAction';
//import AnimatedWave from "react-native-animated-wave";



//YellowBox.ignoreWarnings(['']);
//LogBox.ignoreAllLogs(' Possible Unhandled Promise Rejection');


 class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state= {
         Modules: [
           {label:'Fill Level Module', value:'Fill Level module'}
        ],
         selectedModule:0,
         selectedModuleValue: 'Fill Level module',
         loading: true,
         isDialogVisible1: false,
         isDialogVisible2: false,
         sensorIndex: null,
         Index:2,
         country: 'tank'
        }
    }
    
    async componentDidMount () {
        const {user} = this.props;
        console.log('user data',user);
        const done = await this.props.getSensors(user.id);
        if(done=='done'){
            console.log('done');
        }
    }   
        handleChange = (item) => {        
           const {tank} = this.props;
           const i = tank.findIndex(x => x.name === item.value);
         //  console.log('sensor',i);
            this.setState({
            selectedModule:item.label,
            selectedModuleValue:item.value,
            Index:i
            })
    }
    render(){
        const {Modules,selectedModuleValue,Index} = this.state;
        const {user,state,tank,sensorLoading} = this.props; 
        //console.log('state',tank);
        console.log('sensorloading',sensorLoading);

        if(tank[Index] === undefined){
            return(
                <View style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'black'}}>
                    <StatusBar  backgroundColor="black"/>
                     <ActivityIndicator size="large" color="#fff"/>
                </View>
            );
        }
        else{
            return(
            <SafeAreaView style={styles.container}>  
              <StatusBar  backgroundColor="black"/>

              {sensorLoading ? (
                    <View style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'black'}}>
                     <ActivityIndicator size="large" color="#fff"/>
                    </View>
                ): (
                  
            <ScrollView style={styles.container}> 
                 
                    <DropDownPicker
                    items={Modules}
                    defaultValue={selectedModuleValue}
                    style={{borderColor:'#0F5E9C',backgroundColor:'#000'}}
                    containerStyle={{
                        height:40, 
                        width:wp('86.3%'),                                              
                        borderWidth:1,
                        paddingLeft:50,
                        marginTop:10,
                        marginBottom:20}}
                    itemStyle={{
                        justifyContent:'flex-start',
                        borderRadius:5,                       
                        marginBottom:5,                                             
                    }}
                    dropDownStyle={{                       
                        elevation:50,                          
                        backgroundColor:'#000',
                        marginLeft:wp('10.5%'),
                        height:40,
                        borderColor:'#0F5E9C' 
                    }}
                    labelStyle={{
                        fontSize:14,
                        textAlign:'left',
                        color:'#fff'                                       
                    }}
                    //mapping
                    onChangeItem={item => this.handleChange(item)}
                    ></DropDownPicker>
                    
                   
                    <View style={styles.drop}>
                       
                       <Icon1 name="cup-water" size={90}color="#0F5E9C"width="100" height="100"/>
                        {/* <AnimatedWave
                        sizeOvan={100}
                // onPress={() => alert("Hello")}
                        colorOvan={'#bebebe'}
                        zoom={5}
                        /> */}
                    </View>

                    {/* <Svg style={styles.containerWave}height="15" width="15">
                    <Circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="blue"
                        strokeWidth="1.5"
                        fill="#2389DA"
                      
                    />
                    </Svg> */}

                    <Card
                    containerStyle={[styles.cardMainContainer,{backgroundColor:'#000',borderColor:'#2389DA', marginTop:50,height:100
                    }]}
                    > 
                    <Card.Title style={styles.cardTitle}>UPPER TANK FILLLEVEL</Card.Title>
                    <View style={{justifyContent:'center',flexDirection:'row-reverse'}}>
                    <View style={styles.IconView}
                    >
                    <Icon3 name="graphic-eq" size={40} color="#0F5E9C"/>
                    </View>
                       <Text style={styles.text}>{tank[Index].fillLevel}</Text>
                    </View>                                    
                    </Card>
        
                    <Card
                    containerStyle={[styles.cardMainContainer,{backgroundColor:'#000',borderColor:'#2389DA', height:100}]}>
                        <Card.Title style={styles.cardTitle}>LOWER TANK FILLLEVEL</Card.Title>
                        <View style={{justifyContent:'center', flexDirection:'row-reverse'}}>
                    <View style={styles.IconView}>
                        <Icon3 name="graphic-eq" size={40} color="#0F5E9C"/>
                    </View>
                        <Text              
                        style={styles.text}>{tank[Index].fillLevel1}</Text>  
                        </View>                
                    </Card>
        
                    <Card
                    containerStyle={[styles.cardMainContainer1,{backgroundColor:'#000',borderColor:'#2389DA', width:250, height:80, marginTop:60}]}>
                        <Card.Title style={styles.cardTitle1}>MOTOR STATUS</Card.Title>
                    <View style={{justifyContent:'center',flexDirection:'row-reverse'}}>
                        <View style={styles.IconView1}>
                        <Icon4 name="poweroff" size={20} color="#0F5E9C"/>
                        </View>
                    <TouchableOpacity>
                    {tank[Index].motor === 1 ?
                     (
                      <Text style={styles.text1}>ON</Text>) :
                         (
                      <Text style={styles.text1}>OFF</Text>
                        )}
                    </TouchableOpacity>
                       
                    </View>                
                    </Card>
    
                    {/* <Card 
                    containerStyle={[styles.cardMainContainer,{backgroundColor:colors.whiteOne,borderColor:colors.whiteOne}]}>
                        <Card.Title style={styles.cardTitle}>FILL LEVEL</Card.Title>
                        <View style={{justifyContent:'center',flexDirection:'row-reverse'}}>
                        <View style={styles.IconView}>
                        <Icon name="bomb" size={30} color="#900"/>
                    </View>
                        <Text style={styles.text}>This is House</Text>  
                        </View>                                    
                    </Card> */}              
                </ScrollView>
                )}
          </SafeAreaView>
            )
        }
    }
}
      

        
        const mapStateToProps = (state) => ({
        //state.reducer.variable
        user:state.auth.user,
        state:state,
        tank:state.tank.sensors,
        sensorLoading:state.tank.sensorLoading       
        })


export default connect(mapStateToProps,{getSensors})(HomeScreen);


const styles = StyleSheet.create({
    container: {
       flex:1,
       backgroundColor:'#000',     
    },
    cardMainContainer: {
        borderColor:'#2389DA',
        borderRadius:30,             
        paddingHorizontal:15,
        borderWidth: 1,
        elevation:10,
        shadowRadius:10,
        //marginBottom:15,
    },
    cardMainContainer1: {
        borderRadius:100,
        alignItems:'center',
        paddingHorizontal:15,
        backgroundColor:'#2389DA',
        borderWidth: 1,
        elevation:5,
        shadowRadius:10,
        marginHorizontal:120,
        width:150,
        height:150,
        marginBottom:10,
    },
    cardTitle: {
        alignSelf:'flex-start',
        fontSize: 12,
        marginBottom: hp('0.0%'),
        color:'#fff'
    },
    cardTitle1: {
        fontSize:15,
        color:'#fff',
        marginBottom: hp('0.5%'),
     
    },
    IconView:{
        width:55,
        height: 55,
        borderRadius:65,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        elevation:10,
        marginLeft:hp('35%'),
      
             
    },
    IconView1: {
        width:35,
        height: 30,
        borderRadius:15,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:100
           
    },
    text: {
        marginBottom:5,
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
        
    },
    text1: {
        fontSize:30,
        marginLeft:15,
        fontWeight:'bold',
        color:'#fff'
    },
    containerWave: {
        
        backgroundColor:'#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor:'#2389DA'
    },
    waveBall: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 10,
        overflow: 'hidden',
    },
    drop: {
        marginTop:50,
        width:100,
        height:100,
        backgroundColor:'#2389DA',
        borderRadius:10,
        borderColor:'#fff',
        marginLeft:200,
        flex: 0.3,
        borderWidth: 3,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        
    }
})