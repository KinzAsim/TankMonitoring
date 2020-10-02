import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, ScrollView} from 'react-native';
import { Card } from 'react-native-elements';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import DialogInput from 'react-native-dialog-input';
import {connect} from 'react-redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import {ThresholdUpper,ThresholdLower} from '../../../redux/action/thresholdAction';


class ThresholdScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Modules:[
                {label:'Fill Level module', value:'Fill Level module'}
            ],
            selectedModule:0,
            selectedModuleValue: 'Fill Level module',
            dialogVisible1: false,
            dialogVisible2:false,
            dialogVisible3:false,
            dialogVisible4:false,
            Index:0
          };
       }

    //    componentDidMount () {
    //        const {tank}=this.props;
    //    }

          showDialog1 = () => {
            this.setState({ dialogVisible1: true});
          };
                                             
          showDialog2 = () => {
            this.setState({ dialogVisible2: true });       
          };
          showDialog3 = () => {
            
                this.setState({ dialogVisible3: true });       
          };
          showDialog4 = () => {
           
                this.setState({ dialogVisible4: true });       
          };         
          
          closeDialog1 = () => {
                this.setState({ dialogVisible1: false});              
          }  
          closeDialog2 = () => {   
                this.setState({ dialogVisible2: false});
          } 
          closeDialog3 = () => {   
                this.setState({ dialogVisible3: false});
          }  
          closeDialog4 = () => {   
                this.setState({ dialogVisible4: false});
          }
          
          sendInput1 = (inputText) => {
            //console.log('upper-1',inputText);          
            const {tank} = this.props;    
            //console.log('Threshold',threshold,type,id)
            const{selectedModuleValue}=this.state; 
            const i = tank.findIndex(x => x.name === selectedModuleValue);   
            this.props.ThresholdUpper(inputText,'OH_U',tank[i]._id);
            this.closeDialog1();                  
            };
            sendInput2 = (inputText) => {
                // console.log('lower-1',inputText);
                const {tank} = this.props;  
                const{selectedModuleValue}=this.state; 
                const i = tank.findIndex(x => x.name === selectedModuleValue);
                this.props.ThresholdLower(inputText,'OH',tank[i]._id);
                this.closeDialog2();
    
            };
            sendInput3 = (inputText) => {
             // console.log('upper-2',inputText);
              const {tank} = this.props;    
             // console.log('Threshold',upperThreshold,type,id)
              const{selectedModuleValue}=this.state; 
              const i = tank.findIndex(x => x.name === selectedModuleValue);   
              this.props.ThresholdUpper(inputText,'UG_U',tank[i]._id);
              this.closeDialog3();
            };
            sendInput4 = (inputText) => {
                console.log('lower-2',inputText);
                const{tank}= this.props;
                const{selectedModuleValue}=this.state;
                const i = tank.findIndex(x => x.name === selectedModuleValue);
                this.props.ThresholdLower(inputText,'UG',tank[i]._id);
                this.closeDialog4();
            };
          
          handleChange = (item) => {
            const {tank,selectedModuleValue} = this.props;
           // console.log('threshold',tank)
            const i = tank.findIndex(x => x.name === item.value);         
            this.setState({
            selectedModule:item.label,
            selectedModuleValue:item.value,
            Index:i
            })
         
          }
        
    render(){
        const {Modules,selectedModuleValue,Index} = this.state;
        const {tank} = this.props;
       // console.log('Tank',tank)

        return(
            <View style={styles.container}>
                 <View style={{borderRadius:8,width: wp('35%'), marginLeft:wp('28%'), marginTop:10}}>
            <DropDownPicker
                      items={Modules}              
                      defaultValue={selectedModuleValue}
                      containerStyle={{height: 40, width: wp('45%')}}
                      style={{backgroundColor:'#fff'}}
                      itemStyle={{
                          //justifyContent: 'flex-start',
                          //backgroundColor: '#fff',
                          borderRadius: 5,
                          marginBottom: 5
                      }}
                      dropDownStyle={{backgroundColor: '#fff',elevation:50}}
                      labelStyle={{
                        fontSize: 14,
                        textAlign: 'left',
                        color: '#000'
                    }}
                    arrowStyle={{marginRight: 10,backgroundColor:"#fff",borderRadius:10}}
                    onChangeItem={item => this.handleChange(item)}
                  />
                 </View >
                <View style={styles.card}>
                    <View style={{marginTop:70}}>
                    <Text style={styles.text}>UPPER_TANK THRESHOLD</Text>
                    <View style={{flexDirection:'row'}}>
                    <Card containerStyle={[styles.cardMainContainer,{backgroundColor:'#fff', width:200, height:200
                    }]}>
                <Card.Title>Upper_Level</Card.Title>
                    <View style={{flexDirection:'row',marginHorizontal:20}}>
                        <View style={styles.IconView}>
                              <Icon1 name="propane-tank-outline" size={50} color="#0F5E9C"/>
                        </View>                             
                        <View style={{justifyContent:'center'}}>
                             <Text style={styles.text1}> {tank[Index].upperThreshold}</Text>
                        </View>          
                        </View>
                <View style={{marginTop:20, marginLeft:20}}>
                    <TouchableOpacity onPress={() => this.showDialog1()}>
                    <Text>Set Thresholds</Text>
                    </TouchableOpacity>
                    <DialogInput isDialogVisible={this.state.dialogVisible1}
                        title={"Set Threshold"}
                        message={"Do you want to reset threshold?"}
                        hintInput ={"HINT INPUT"}
                        submitInput={ (inputText) => {this.sendInput1(inputText)} }
                        closeDialog={ () => this.closeDialog1()}>
                    </DialogInput>                  
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
                             <Text style={styles.text1}> {tank[Index].threshold}</Text>
                        </View>          
                     </View>     
                     <View style={{marginTop:20, marginLeft:20}}>
                    <TouchableOpacity onPress={() => this.showDialog2()}>
                    <Text>Set Thresholds</Text>
                    </TouchableOpacity>
                    <DialogInput isDialogVisible={this.state.dialogVisible2}
                        title={"Set Threshold"}
                        message={"Do you want to reset threshold?"}
                        hintInput ={"HINT INPUT"}
                        submitInput={ (inputText) => {this.sendInput2(inputText)} }
                        closeDialog={ () => this.closeDialog2()}>
                    </DialogInput>                  
                    </View>        
                    </Card>
                    </View>
                    </View>
                
                    
                    <View style={{marginTop:50}}>
                    <Text style={styles.text}>LOWER_TANK THRESHOLD</Text>
                    <View style={{flexDirection:'row'}}>
                    <Card containerStyle={[styles.cardMainContainer,{backgroundColor:'#fff', width:200, height:200
                    }]}>
                <Card.Title>Upper_Level</Card.Title>
                    <View style={{flexDirection:'row-reverse',marginHorizontal:20}}>
                        <View style={styles.IconView}>
                              <Icon1 name="propane-tank-outline" size={50} color="#0F5E9C"/>
                        </View> 
                            
                        <View style={{alignItems:'baseline'}}>
                             <Text style={styles.text1}>{tank[Index].upperThreshold_lowerTank}</Text>
                        </View>          
                     </View> 
                     <View style={{marginTop:20, marginLeft:20}}>
                    <TouchableOpacity onPress={() => this.showDialog3()}>
                    <Text>Set Thresholds</Text>
                    </TouchableOpacity>
                    <DialogInput isDialogVisible={this.state.dialogVisible3}
                        title={"Set Threshold"}
                        message={"Do you want to reset threshold?"}
                        hintInput ={"HINT INPUT"}
                        submitInput={ (inputText) => {this.sendInput3(inputText)} }
                        closeDialog={ () => this.closeDialog3()}>
                    </DialogInput>                  
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
                             <Text style={styles.text1}>{tank[Index].threshold_lowerTank}</Text>
                        </View>          
                     </View>     
                    <View style={{marginTop:20, marginLeft:20}}>
                    <TouchableOpacity onPress={() => this.showDialog4()}>
                    <Text>Set Thresholds</Text>
                    </TouchableOpacity>
                    <DialogInput isDialogVisible={this.state.dialogVisible4}
                        title={"Set Threshold"}
                        message={"Do you want to reset threshold?"}
                        hintInput ={"HINT INPUT"}
                        submitInput={ (inputText) => {this.sendInput4(inputText)} }
                        closeDialog={ () => this.closeDialog4()}>
                    </DialogInput>                  
                    </View> 
                    </Card>
                   
                    </View>
       
                    </View>       
                </View>        
            </View>
        
        );
    }
}

        const mapStateToProps = (state) => ({
            user:state.auth.user,
            tank:state.tank.sensors,
            threshold:state.threshold.sensors
        })

export default connect(mapStateToProps,{ThresholdUpper,ThresholdLower})(ThresholdScreen);


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',        
    },
    card:{  
        flex:0.96,
        marginTop:30,
        marginLeft:0,
        marginRight:20,
        backgroundColor:'#fff',
        elevation:10
    },
    cardMainContainer:{
        elevation:60,
        marginLeft:5
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
        color:'#800080',
        marginTop:20
    },
    text2: {
        fontSize:15,
        marginBottom:2
    }
})