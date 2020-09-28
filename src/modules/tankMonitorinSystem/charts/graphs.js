import React from 'react';
import {View,StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class graphScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ChartList: [
                {label:'Tank Module 1', value:'Tank module 1'},
                {label:'Tank Module 2', value:'Tank module 2'},
              ],
              ChartType: [
                  {label:'Fill Level Chart',value:'Fill Level Chart'}
              ],
              selectedModule:0,
              selectedModuleValue: 'Tank module 1',
              loading: true,
              selectedTypeValue:'Fill level',
              selectedType:-1,
              Index:0,
              
             }
        
     }

    render(){
        const {ChartList,selectedModuleValue,ChartType}= this.state;
        return(
            <View style={styles.container}bounces={false}>
            <View style={styles.container}>
                <DropDownPicker
            items={ChartList}
            style={{borderColor:'red'}}
            defaultValue={selectedModuleValue}
            containerStyle={{
                height:40, 
                width:wp('86.3%'), 
                paddingLeft:5,
                marginTop:20,
                borderColor:'#000',
                borderRadius:5,
                marginBottom:20}}
            itemStyle={{
                justifyContent:'flex-start',
                borderRadius:5,
                marginBottom:5,
                width:wp('90%'),
                paddingLeft:30
            }}
            dropDownStyle={{
                backgroundColor:'#fff',
                elevation:50}}
            labelStyle={{
                fontSize:14,
                textAlign:'left'                   
            }}
           
            ></DropDownPicker>

            <View style={styles.dropcontainer}>
            <DropDownPicker
            items={ChartType}
            style={{borderColor:'red'}}
            defaultValue={selectedTypeValue}
            containerStyle={{
                height:40, 
                width:wp('46.3%'),              
                marginTop:20,
                borderColor:'#000',
                borderRadius:5,
                marginBottom:20}}
            itemStyle={{
                justifyContent:'flex-start',
                borderRadius:5,
                marginBottom:5,
                paddingLeft:30
            }}
            dropDownStyle={{
                backgroundColor:'#fff',
                elevation:50}}
            labelStyle={{
                fontSize:14,
                textAlign:'left'                   
            }}
            ></DropDownPicker>
            </View>

            <DropDownPicker
            items={ChartList}
            style={{borderColor:'red '}}
            defaultValue={selectedModuleValue}
            containerStyle={{
                height:40, 
                width:wp('46.3%'),              
                marginTop:20,
                borderColor:'#000',
                borderRadius:5,
                marginBottom:20}}
            itemStyle={{
                justifyContent:'flex-start',
                borderRadius:5,
                marginBottom:5,
                paddingLeft:30
            }}
            dropDownStyle={{
                backgroundColor:'#fff',
                elevation:50}}
            labelStyle={{
                fontSize:14,
                textAlign:'left'                   
            }}
           
            ></DropDownPicker>
            </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        paddingHorizontal:wp('3.5%')
    },
    dropContainer: {
        flex:1
    }
})