import React from 'react';
import {View,StyleSheet,ScrollView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { colors } from '../../../style';
import {VictoryChart,VictoryGroup, VictoryBar, VictoryTheme} from 'victory-native';
// import {
//     LineChart,
//     BarChart,
//     PieChart,
//     ProgressChart,
//     ContributionGraph,
//     StackedBarChart
//   } from "react-native-chart-kit";
// import { LineChart, Grid, XAxis,BarChart,YAxis} from 'react-native-svg-charts'
import {getCharts} from '../../../redux/action/tankAction';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { connect } from 'react-redux';

class graphScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            moduleArray: [
                {label:'Fill Level Module', value:'Fill Level module'}
            
            ],
            ChartType: [
                  {label:'FillLevel',value:'fillLevel'},
                  {label:'Motor',value:'motor'}

              ],
            ChartRange: [
                {label: 'Past Week', value: 'week'},
                {label: 'Past Month', value: 'month'},
                {label: 'Year Chart', value: 'year'},
              ],
              selectedModule:0,
              selectedModuleValue: 'Fill Level module',
              selectedType: -1,
              selectedTypeValue: 'fillLevel',
              selectedRange: 0,
              selectedRangeValue: 'week',
              loading: true,
              Index:0,
             }  
        }

            handleModuleChange = (item) => {
                const{tank} = this.props;
                const {selectedTypeValue,selectedModuleValue} = this.state;
                const i = tank.findIndex(x => x.name === item.value);  
                this.setState ({
                    selectedModule:item.label,
                    selectedModuleValue:item.value,
                    Index:i
                });
               this.props.getCharts(selectedTypeValue,selectedModuleValue,tank[i]._id)
            }

            handleTypeChange = (item) => {
                const{tank} = this.props;
                const{selectedModuleValue,selectedTypeValue}= this.state;
                const i = tank.findIndex(x => x.name === selectedModuleValue);    
                this.setState ({
                    selectedType:item.title,
                    selectedTypeValue:item.value,
                });
                this.props.getCharts(item.value,selectedModuleValue,tank[i]._id)
            }
            
            handleRangeChange = (item) => {
                const{tank} = this.props;
                const{selectedModuleValue,selectedRangeValue}= this.state;
                const i = tank.findIndex(x => x.name === selectedModuleValue);    
                this.setState ({
                    selectedRange:item.title,
                    selectedRangeValue:item.value,
                    Index:i
                });
                this.props.getCharts(item.value,selectedModuleValue,tank[i]._id)
            }
           
    render(){
        const {moduleArray,selectedModuleValue,ChartType,ChartRange,selectedRangeValue,selectedTypeValue,Index}= this.state;
        const{tank}= this.props;
        //console.log('chart',tank)

        const data = [{ x: 1, y: 2 },
                      { x: 2, y: 3 },
                      { x: 3, y: 5 },
                      { x: 4, y: 4 },
                      { x: 5, y: 7 }]

        return(
            <View style={styles.container}bounces={true}>
              <View style={{borderRadius:8,width: wp('45%'),marginLeft:wp('5%')} }>
            <DropDownPicker
                      items={moduleArray}    
                      zIndex={30}
                      defaultValue={selectedModuleValue}
                      containerStyle={{height: 50, width: wp('85%'),marginBottom:30,marginTop:30}}
                      style={{backgroundColor: colors.secondary}}
                      itemStyle={{
                          justifyContent: 'flex-start',
                          //backgroundColor: '#fff',
                          borderRadius: 5,
                          marginBottom: 5
                      }}
                      dropDownStyle={{backgroundColor: colors.secondary,elevation:20}}
                      labelStyle={{
                        fontSize: 14,
                        textAlign: 'left',
                        color: '#fff'
                    }}
                    arrowStyle={{marginRight: 10,backgroundColor:colors.whiteOne,borderRadius:10}}
                    onChangeItem={item => this.handleModuleChange(item)}
                  />
             </View>
         <View style={{borderRadius:8,width: wp('45%'), marginLeft:wp('5%')}}>
            <DropDownPicker
                      items={ChartType}
                      zIndex={15}               
                      defaultValue={selectedTypeValue}
                      containerStyle={{height: 50, width: wp('85%'),marginBottom:50,marginTop:5}}
                      style={{backgroundColor: colors.secondary}}
                      itemStyle={{
                          //justifyContent: 'flex-start',
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
                    onChangeItem={item => this.handleTypeChange(item)}
                  />
           </View >
           <View style={{borderRadius:8,width: wp('45%'), marginLeft:wp('5%')}}>
            <DropDownPicker
                      items={ChartRange}
                      zIndex={10}           
                      defaultValue={selectedRangeValue}
                      containerStyle={{height: 50, width: wp('85%'),marginBottom:70,marginTop:5}}
                      style={{backgroundColor: colors.secondary}}
                      itemStyle={{
                          //justifyContent: 'flex-start',
                          //backgroundColor: '#fff',
                          borderRadius: 5,
                          marginBottom: 5
                      }}
                      dropDownStyle={{backgroundColor: colors.secondary,elevation:15}}
                      labelStyle={{
                        fontSize: 14,
                        textAlign: 'left',
                        color: '#fff'
                    }}
                    arrowStyle={{marginRight: 10,backgroundColor:colors.whiteOne,borderRadius:10}}
                    onChangeItem={item => this.handleRangeChange(item)}
                  />
           </View >

              <ScrollView horizontal={true} style={styles.chartView} >
                  <VictoryChart   theme={VictoryTheme.material}>
                  <VictoryGroup offset={20}
                        colorScale={"blue"}
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                          }}>                      
                    <VictoryBar
                        data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }]}
                        />
                    <VictoryBar
                        data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }]}
                        />
                    <VictoryBar
                        data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 9 }]}
                        />
                    </VictoryGroup>
                  </VictoryChart>
            </ScrollView>
               
            </View>    
        );
    }
}

const mapStateToProps = (state) => ({
    //state.reducer.variable
    user:state.auth.user,
    state:state,
    tank:state.tank.sensors
})


export default connect(mapStateToProps,{getCharts})(graphScreen);

const styles = StyleSheet.create({
    containerStyle: {
        justifyContent:'center'
    },
    container: {
        // alignItems: 'center',
        // flexDirection: 'row',
        // marginBottom: hp('1.5%'),
        // marginTop: hp('1.5%'),
      
    },
    dropContainer: {
        flex:1
    },
    chartView: {
        marginTop: hp('-2%'),
        backgroundColor: '#fff',
      },
      AxisLabel:{fontSize: hp('5%'), padding: wp('10%')},
})