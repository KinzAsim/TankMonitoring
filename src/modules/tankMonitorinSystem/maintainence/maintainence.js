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
            Index:2
            
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
            Index:i
            })
    }

    changeMotor = () => {
        const{tank,user}= this.props;  
        const{selectedModuleValue} = this.state;
        const i = tank.findIndex(x => x.name === selectedModuleValue);

        if(tank[i].maintenance === false){
            this.props.motorMaintainence(1,tank[i]._id);
        }
        else if(tank[i].maintenance === true){
            this.props.motorMaintainence(0,tank[i]._id);
        }
    }

    
    render(){
        const{Modules,selectedModuleValue,Index}= this.state;
        const{tank,user}=this.props;
    //    console.log('tank',tank)

        return(
            <View style={styles.container}>
                <View style={{borderRadius:8,width: wp('45%'),marginLeft:wp('3.5%')}}>
            <DropDownPicker
                      items={Modules}              
                      defaultValue={selectedModuleValue}
                      containerStyle={{height: 40, width: wp('45%')}}
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
            
          </View >
           
            <TouchableOpacity onPress={() => this.changeMotor()}> 
            <View style={styles.IconView1}>    
                <Icon name="poweroff" size={60} color="#0F5E9C"/>           
            </View>
            </TouchableOpacity>
            <View >
            {tank[Index].maintenance === false ?
                     (
                      <Text style={styles.text1}>Enabled</Text>) :
                         (
                      <Text style={styles.text1}>Disabled</Text>
                        )}  
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
       alignItems:'center',
       marginHorizontal:hp('10%'),
       marginVertical:wp('10%'),
       paddingTop:20
    },
    IconView1: {
        width:150,
        height:150,
        borderRadius:75,
        elevation:30,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:hp('15%'),
        marginVertical:wp('15%')
    },
    text1: {       
        fontSize:40,
        fontWeight:'bold',
        color:'#800080'
    },
})