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
        //console.log('sensor data',data.data)
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
    //   console.log('Level',data)       
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
       else {
    //  console.log('Error');
       }
     
}


export const forceMotor = (motor,id) => async (dispatch,getState) => {
    console.log('sensor data',motor,id)
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



export const getCharts = (type,range,id) => (dispatch,getState) => {
    console.log('Chart action',type,range,id)

    const config = {
        headers: {
            'Content-type':'Application/json'
        }
    }
    // try{
    //     const data = await axios.get(`${url}/rs/charts/${type}/${range}/${id}`,config)
    //     console.log('charts',data.data)
    //     // dispatch({
    //     //     type: 'GET_CHARTS',
    //     //     payload: data.data
    //     // })
    // }
    // catch(err){
    //      console.log(err)
    // }
}
