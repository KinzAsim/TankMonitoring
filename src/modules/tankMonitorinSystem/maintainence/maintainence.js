import React from 'react';
import {View,StyleSheet,TouchableOpacity, Text} from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import {motorMaintainence,getSensors} from '../../../redux/action/tankAction';
import DropDownPicker from 'react-native-dropdown-picker';
import {colors} from '../../../style';


class maintainenceScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Modules: [
              {label:'Fill Level Module', value:'Fill Level module'}
           ],
            selectedModule:0,
            selectedModuleValue: 'Fill Level module',
            loading: true,
            Index:2,
            pressStatus :false
            
        }
    }

    async componentDidMount () {
        const {user} = this.props;    
        const done = await this.props.getSensors(user.id);
        if(done=='done'){
            console.log('done');
        }
    }   
    handleModuleChange = (item) => {        
           const {tank} = this.props;
           const i = tank.findIndex(x => x.name === item.value);         
            this.setState({
            selectedModule:item.label,
            selectedModuleValue:item.value,
            Index:i,
            })
    }

    changeMotor = () => {
        const{tank,user}= this.props;  
        const{selectedModuleValue} = this.state;
        const i = tank.findIndex(x => x.name === selectedModuleValue);

        if(tank[i].maintenance === false){
            console.log('motor',tank[i].motor === 1)
            this.props.motorMaintainence(1,tank[i]._id);
        }
        else if(tank[i].maintenance === true){
            this.props.motorMaintainence(0,tank[i]._id);
        }
    }

    changeColor = () => {
        const{tank}= this.props; 
        const{selectedModuleValue} = this.state;
        const i = tank.findIndex(x => x.name === selectedModuleValue);
       
    }
    
    render(){
        const{Modules,selectedModuleValue,Index,color1}= this.state;
        const{tank,user}=this.props;
    //    console.log('tank',tank)

        return(
            <View style={styles.container}>
                 <View style={styles.card}>
                 <View style={{borderRadius:8, marginHorizontal:wp('25%'), marginTop:hp('2%')}}>
            <DropDownPicker
                      items={Modules}              
                      defaultValue={selectedModuleValue}
                      containerStyle={{height: 40, width: wp('85%')}}
                      style={{backgroundColor: colors.secondary}}
                      itemStyle={{
                          justifyContent: 'flex-start',
                          //backgroundColor: '#fff',
                          borderRadius: 5,
                          marginBottom: 5
                      }}
                      dropDownStyle={{backgroundColor: colors.secondary}}
                      labelStyle={{
                        fontSize: 14,
                        textAlign: 'left',
                        color: '#fff'
                    }}
                    arrowStyle={{marginRight: 10,backgroundColor:colors.whiteOne,borderRadius:10}}
                    onChangeItem={item => this.handleModuleChange(item)}
                  />
            
            </View>

           <Text style={{marginTop:30,fontSize:20,fontWeight:"bold"}}>Maintenance Mode</Text>

            <TouchableOpacity onPress={() => this.changeMotor()}> 
            <View style={styles.IconView1}>    
                <Icon name="poweroff" size={60} color={tank[Index].maintenance === true  ? "red" : "green"}/>           
            </View>
            </TouchableOpacity>
            <View style={{alignItems:'center'}}>
            {tank[Index].maintenance === false ?
                     (
                      <Text style={styles.text1}>Enabled</Text>) :
                         (
                      <Text style={styles.text1}>Disabled</Text>
                        )}  
                    </View>
                </View>
            </View>
           
        )
    }
    
}

const mapStateToProps = (state) => ({
    //state.reducer.variable
    user:state.auth.user,
    state:state,
    tank:state.tank.sensors,
    sensorLoading:state.tank.sensorLoading       
    })


export default connect(mapStateToProps,{motorMaintainence,getSensors})(maintainenceScreen);


const styles = StyleSheet.create({
    container: {
       flex:1,
       backgroundColor:'#fff',   
       paddingTop:20
    },
    IconView1: {
        width:150,
        height:150,
        borderRadius:75,
        elevation:30,
        marginTop:100,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
       
    },
    text1: {       
        fontSize:40,
        fontWeight:'bold',
        color:'#800080'
    },
    text2: {       
        fontSize:40,
        fontWeight:'bold',
        color:'red'
    },
    card:{  
        flex:0.96,
        paddingTop:20,
        marginTop:hp('3%'),
        marginLeft:wp('4%'),
        marginRight:wp('4%'),
        backgroundColor:'#fff',
        alignItems:'center',
        elevation:10
    },
    text1: {       
        fontSize:50,
        fontWeight:'bold',
        color:'#800080',
        marginTop:20,
    },
})