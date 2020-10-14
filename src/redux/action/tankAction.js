import axios from 'axios';
import {url} from './types';


export const getSensors = (id) => (dispatch,getState) => new Promise(async function (resolve,reject){
    
    dispatch({
        type: 'SENSOR_LOADING'
    })
    const config = {
        headers: {
            'Content-type':'Application/json'
        }
    }

    try{
        const data = await axios.get(`${url}/rs/${id}`, config)
        dispatch({
            type: 'GET_SENSOR',
            payload: data.data

        })
        resolve('done');
    }
    catch(err) {
        console.log(err)
        reject(err);
    }
}
);

export const updateSensors = (data)=> (dispatch,getState) => {
       
        if(data.fillLevel !== undefined){  
      // console.log('Level',data)       
            dispatch ({
                type:'UPDATE_FILLLEVEL',
                payload:data
            })
       }
       else if(data.fillLevel1 !== undefined){  
    //    console.log('Lower',data)       
           dispatch ({
               type:'UPDATE_FILLLEVEL1',
               payload:data
           })
      }
       else if(data.motor !== undefined) {
    // console.log('data',data)  
        dispatch({
          type : 'UPDATE_MOTORSTATUS',
          payload : data
        })
      }     
       else if(data.maintenance !== undefined){
        dispatch({
          type : 'UPDATE_MAINTENANCE',
          payload : data
        })
       }
     
}


export const forceMotor = (motor,id) => async (dispatch,getState) => {
  //  console.log('sensor data',motor,id)
    const config = {
        headers: {
            'Content-type':'Application/json'
        }
    }
    const body = {
        motor,
        id,
    };
    try{
        const data = await axios.post(`${url}/rs/forceMotor`,body,config)
     //   console.log('motor data',data.data)
    }
    catch(err) {
        console.log(err)
    }
}



export const getCharts = (chartType,chartRange,id) => async (dispatch,getState) => {
  //  console.log('Chart action',chartType,chartRange,id)
    dispatch({
        type: 'CHARTS_LOADING'
    })
    const config = {
        headers: {
            'Content-type':'Application/json'
        }
    }
    try{
        const data = await axios.get(`${url}/rs/chart/${chartType}/${chartRange}/${id}`, config)
        console.log('action', data.data)
        console.log('type',chartType)
        let array=[]
        let highest = 1

      if(chartType === 'motor' || chartType === 'force-motor' ) {
        data.data.labels.map((d,index) => {
          if(data.data.data[index] > highest){
            highest = data.data.data[index];
          }
       // console.log('labels',data.data.labels)
          let obj = {
            x: d,
            y: data.data.data[index]
          }
          array.push(obj)
          //console.log('charts',array)
        })
      }
      else if(chartType === 'fillLevel' || chartType === 'fillLevel1') {
        data.data.labels.map((d,index) => {
          if(data.data.data[index] > highest){
            highest = data.data.data[index];
          }
          let obj = {
            x: d,
            y: data.data.data[index],
          }
          array.push(obj)
        })
      }    
        dispatch({
            type: 'GET_CHARTS',
            payload: array,
            highest: highest
        })
    }
    catch(err){
         console.log(err)
    }
}



export const motorMaintainence = (mode,id) => async (dispatch,getState) => {
  console.log('motor data',mode,id)
  const config = {
    headers: {
        'Content-type':'Application/json'
    }
  }
    const body = {
       mode:mode
    };
    //console.log('body',body);
  try{
    const data = await axios.post(`${url}/rs/maintenance/${id}`, body, config);
  }
  catch(err) {
      console.log(err)
  }
}



