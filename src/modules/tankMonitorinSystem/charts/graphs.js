import React from 'react';
import {View,StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { LineChart, Grid, XAxis,BarChart} from 'react-native-svg-charts'
// import {
//     LineChart,
//     BarChart,
//     PieChart,
//     ProgressChart,
//     ContributionGraph,
//     StackedBarChart
//   } from "react-native-chart-kit";
  
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class graphScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ChartList: [
                {label:'Module', value:'Tank Module 1'},
              ],
            ChartType: [
                  {label:'fillLevel',value:'fillLevel'},
                  {label:'Motor',value:'motor'},

              ],
            ChartRange: [
                {label: 'Past Week', value: 'week'},
                {label: 'Past Month', value: 'month'},
                {label: 'Year Chart', value: 'year'},
              ],
              selectedModule:0,
              selectedModuleValue: 'Tank Module 1',
              selectedType: -1,
              selectedTypeValue: 'fillLevel',
              selectedRange: 0,
              selectedRangeValue: 'week',
            //   selectedType: -1,
            //   selectedTypeValue: 'Day',
              loading: true,
              Index:0,
              
             }
        
     }

    render(){
        const {ChartList,selectedModuleValue,ChartType, ChartRange,selectedRangeValue, selectedTypeValue}= this.state;
        console.log('chart', selectedTypeValue)
        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
        const data1 = [ 14, -1, 10, -95, -94, -24, -8, 85, -1, 35, -53, 53, -78, 66, 96, 33, -26, -32, 73, 8 ]
        const data2 = [ 24, 28, 93, 77, -42, -62, 52, -87, 21, 53, -78, -62, -72, -6, 89, -70, -94, 10, 86, 84 ]   
        const barData = [
            {
                data: data1,
                svg: {
                    stroke: 'rgb(134, 65, 244)',
                },
            },
            {
                data: data2,
                svg: {
                    stroke: '#2389DA',
                },
            },
        ]
 
        // const colors = ['#8800cc', '#aa00ff', '#cc66ff', '#eeccff']
        // const keys = ['apples', 'bananas', 'cherries', 'dates']
        // const svgs = [
        //     { onPress: () => console.log('apples') },
        //     { onPress: () => console.log('bananas') },
        //     { onPress: () => console.log('cherries') },
        //     { onPress: () => console.log('dates') },
        // ]
        return(
            <View style={styles.container}bounces={true}>
            <View style={{flexDirection:'row-reverse',marginHorizontal:50}}>
                <DropDownPicker
            items={ChartList}
            style={{elevation:50}}
            defaultValue={selectedModuleValue}
            containerStyle={{
                height:40, 
                width:wp('26.3%'), 
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
                fontSize:15,
                color:'#800080',
                textAlign:'left'                   
            }}
           
            ></DropDownPicker>
               <DropDownPicker
            items={ChartType}
            style={{elevation:50}}
            defaultValue={selectedTypeValue}
            containerStyle={{
                height:40, 
                width:wp('26.3%'), 
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
                color:'#2389DA',
                textAlign:'left'                   
            }}
           
            ></DropDownPicker>
               <DropDownPicker
            items={ChartRange}
            style={{elevation:50}}
            defaultValue={selectedRangeValue}
            containerStyle={{
                height:40, 
                width:wp('26.3%'), 
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
                color:'#800080',
                textAlign:'left'                   
            }}
           
            ></DropDownPicker>
             </View>
            <View style={{ height: 300, padding: 20 }}>
            <LineChart
                    style={{ flex: 1}}
                    data={barData}
                    gridMin={0}
                    width = {wp('125%')}
                    contentInset={{ top: 10, bottom: 10, color:'rgb(134, 65, 244)'  }}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                >
                    <Grid />
                </LineChart>
                <XAxis
                    style={{ marginHorizontal: -10 }}
                    data={data}
                    formatLabel={(value, index) => index}
                    contentInset={{ left: 10, right: 10 }}
                    svg={{ fontSize: 15, fill: '#800080'}}
                />
            </View>
            {/* <View style={styles.dropcontainer}>
            <DropDownPicker
            items={ChartType}
            style={{borderColor:'red'}}
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
           
            ></DropDownPicker> */}
            </View>            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center'
    },
    dropContainer: {
        flex:1
    }
})