import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions,
  AppState,
  Alert,
  ActivityIndicator, TimePickerAndroid
} from 'react-native';

import { colors } from '../../../style';

import AsyncStorage from '@react-native-community/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import { YellowBox } from 'react-native';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
//import DateRangePicker from "react-native-daterange-picker";
import Item from './LogsItem';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-datepicker';
import { withNavigation } from "react-navigation";
import { connect } from 'react-redux';
import { getLogs } from '../../../redux/action/LogsAction';
import { getSensors } from '../../../redux/action/tankAction';

// YellowBox.ignoreWarnings(['DatePickerAndroid']);
//import DropdownAlert from 'react-native-dropdownalert';
/*console.warn = message => {
  if (message.indexOf('DatePickerAndroid') <= -1) {
    console.warn(message);
  } 
};*/

//YellowBox.ignoreWarnings(['componentWillReceiveProps']);

class LogsScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        type:[
            {label:'FillLevel', value:'fillLevel'},
            {label:'FillLevel1', value:'fillLevel1'},
            {label:'Motor', value:'motor'},
            {label:'Force Motor', value:'force-motor'}
        ],    
        moduleArray: [
            {label:'Fill Level Module', value:'Fill Level module'}
        
        ],
        selectedModule: 0,
        selectedModuleValue : 'Fill Level module',
        selectedType: 0,
        selectedTypeValue : 'motor',
        startDate: moment().subtract(7,'days'),
        endDate: moment().add(1,'day'),
        Index: 0
    }
  }  
  async componentDidMount () {
     const {tank,user,logs} = this.props; 
     const{type,startDate,endDate,selectedTypeValue,Index} = this.state;
   //  console.log('Mount',logs)
     let done = null;

     done = await this.props.getSensors(user.id);
    
    if (done === 'done'){
      console.log('action working');  
    }

    await this.props.getLogs(selectedTypeValue,tank[Index]._id,startDate,endDate);    

  }

    handleModuleChange = (item) => {
        const {tank}= this.props;
        console.log(['handle',tank])
        const {selectedTypeValue,startDate,endDate} = this.state;
        const i = tank.findIndex(s => s.name === item.value);
    this.setState({
      selectedModule: item.label,
      selectedModuleValue: item.value,
      Index:i
    });

     this.props.getLogs(selectedTypeValue,tank[i]._id,startDate,endDate);
  }

   async handleTypeChange (item) {    
        const {tank} = this.props;      
        const{startDate,endDate,selectedModuleValue} = this.state;       
       //console.log('Type',this.state);
        const i = tank.findIndex(s => s.name === selectedModuleValue);
        this.setState({
            selectedType: item.title,
            selectedTypeValue: item.value
            });
       //console.log('Logs',item.value,tank[i]._id,startDate,endDate)
        await this.props.getLogs(item.value,tank[i]._id,startDate,endDate);
      
    
  }

  startDateChange = (date) => {
       const {tank} = this.props;
       console.log('start',tank)
       const {selectedModuleValue,selectedTypeValue,endDate} = this.state;    
       const i = tank.findIndex(s => s.name === selectedModuleValue);
        this.setState({
        startDate: date
        })
      console.log('StartLogs',selectedTypeValue,tank[i]._id,date,endDate)
      //this.props.getLogs(selectedTypeValue,tank[i]._id,date,endDate);

  }
  endDateChange = (date) => {
     const {tank} = this.props;
     console.log('end',tank)
     const {selectedModuleValue,selectedTypeValue,startDate} = this.state;
     const i = tank.findIndex(s => s.name === selectedModuleValue);
    this.setState({
      endDate: date
    })

    this.props.getLogs(selectedTypeValue,tank[i]._id,startDate,date);
  }

  render() {
    const{tank,logs,logsLoading} = this.props;
    const {moduleArray,type,selectedTypeValue,selectedModuleValue, startDate,endDate} = this.state;  
    console.log('Module',logs);
    //console.log(logs);
    
    return (
      <View style={styles.container}>            
        
          <View style = {styles.filterView}>

          <View style={{borderRadius:8,width: wp('45%'),marginLeft:wp('3.5%')}}>
            <DropDownPicker
                      items={moduleArray}              
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
          
          <View style={{borderRadius:8,width: wp('45%'), marginLeft:wp('3.5%')}}>
            <DropDownPicker
                      items={type}              
                      defaultValue={selectedTypeValue}
                      containerStyle={{height: 40, width: wp('45%')}}
                      style={{backgroundColor: colors.secondary}}
                      itemStyle={{
                          //justifyContent: 'flex-start',
                          //backgroundColor: '#fff',
                          borderRadius: 5,
                          marginBottom: 5
                      }}
                      dropDownStyle={{backgroundColor: colors.secondary,elevation:50}}
                      labelStyle={{
                        fontSize: 14,
                        textAlign: 'left',
                        color: '#fff'
                    }}
                    arrowStyle={{marginRight: 10,backgroundColor:colors.whiteOne,borderRadius:10}}
                    onChangeItem={item => this.handleTypeChange(item)}
                  />
          </View >
                       
          </View>
          <View style={styles.datePickerView}>
            <Text style={styles.DatePickerText}>Start: </Text>
          <DatePicker
                style={styles.DatePicker}
                date={this.state.startDate}
                mode="date"
                display="default"
                placeholder="select date"
                format="YYYY-MM-DD"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateInput: styles.DatePickerInput,
                  dateIcon: styles.DatePickerIcon,
                  dateText : styles.DateText
                  
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.startDateChange(date)}}
          />
          <Text style={[styles.DatePickerText,{marginLeft: wp('4%')}]}>End: </Text>
          <DatePicker
                style={styles.DatePicker}
                date={this.state.endDate}
                mode="date"
                display="default"
                placeholder="select date"
                format="YYYY-MM-DD"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateInput: styles.DatePickerInput,
                  dateIcon: styles.DatePickerIcon,
                  dateText : styles.DateText
                  ,                  
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.endDateChange(date)}}
            />
            </View>

            {logsLoading ? (
              <View style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'black'}}>
                <ActivityIndicator size="large" color="#fff"/>
              </View>
            ) : (
              <SafeAreaView style={styles.flat}>
                {logs.length > 0 ? (
             <View>
                  {selectedTypeValue === 'motor' ? (
                    <FlatList  
                  //logs in reducer                           
                    data={ logs }                               
                    renderItem={({item}) => <Item updated_at={item.updated_at} created_at={item.created_at} duration={item.duration}
                    messagedata={item.motor} title= {this.state.selectedTypeValue}
                    />}
                    keyExtractor={(item, index) => index.toString()}
                  /> 
                    ) : 
                    selectedTypeValue === 'fillLevel' ? (
                      <FlatList  
                    //logs in reducer                           
                      data={ logs }                               
                      renderItem={({item}) => <Item updated_at={item.updated_at} created_at={item.created_at} duration={item.duration}
                      messagedata={item.fillLevel} title= {this.state.selectedTypeValue}
                      />}
                      keyExtractor={(item, index) => index.toString()}
                    /> 
                    ):
                    selectedTypeValue === 'fillLevel1' ? (
                      <FlatList  
                    //logs in reducer                           
                      data={ logs }                               
                      renderItem={({item}) => <Item updated_at={item.updated_at} created_at={item.created_at} duration={item.duration}
                      messagedata={item.fillLevel1} title= {this.state.selectedTypeValue}
                      />}
                      keyExtractor={(item, index) => index.toString()}
                    /> 
                    ):
                    selectedTypeValue === 'force-motor' ? (
                      <FlatList  
                    //logs in reducer                           
                      data={ logs }                               
                      renderItem={({item}) => <Item updated_at={item.updated_at} created_at={item.created_at} duration={item.duration}
                      messagedata={item.motor} title= {this.state.selectedTypeValue}
                      />}
                      keyExtractor={(item, index) => index.toString()}
                    /> 
                    ):
                    (
                      <View style={styles.TextView}>
                        <Text style={styles.Text}>No Logs</Text>
                      </View>
                    )
                    }
                    </View>
                    ):(
                      <View style={styles.TextView}>
                        <Text style={styles.Text}>No Logs</Text>
                      </View>
                    )}
                
              </SafeAreaView>
            )}            
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
    //state.reducer.variable
    user:state.auth.user,
    state:state,
    tank:state.tank.sensors,
    logs:state.logs.logs,
    sensorLoading:state.tank.sensorLoading,
    logsLoading:state.logs.logsLoading      
    })

export default connect(mapStateToProps,{getLogs,getSensors})(LogsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    width: wp('100%')
  },
  Dropdown: { width: wp('45%'), height: hp('5%'), marginHorizontal:wp('2.5%')},
  filterView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: hp('1.5%'),
    marginTop: hp('1.5%'),
    ...(Platform.OS !== 'android' && {
      zIndex: 10}),
  },
  datePickerView:{
    alignItems: 'center',
    flexDirection: 'row',
  },

  DatePicker:{width: wp('37%'), marginLeft:wp('1%')},
  DatePickerText:{marginLeft: wp('3%'), color: "#fff",fontWeight:'bold'},
  DatePickerInput:{marginLeft: wp('0%'),height:hp('3%')},
  DatePickerIcon: {top: hp('0%'), marginLeft: wp('0%')},
  DateText: {color: "#fff"},

  TextView:{marginTop: hp('30%'),alignItems: 'center', justifyContent: 'center'},
  Text:{color:'#fff', fontWeight:'bold',fontSize: hp('2%')},
  flat: {backgroundColor:'#000',flex:1,marginTop:20}
  

  
});
