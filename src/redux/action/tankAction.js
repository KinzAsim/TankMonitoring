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
});

export const updateSensors = (data)=> (dispatch,getState) => {
       
        if(data.fillLevel !== undefined){  
       //     console.log('data',data)       
            dispatch ({
                type:'UPADATE_FILLLEVEL',
                payload:data
            })
       }
       else if(data.motor !== undefined) {
        dispatch({
          type : 'UPDATE_MOTORSTATUS',
          payload : data
        })
      }
       else {
         //  console.log('Error');
       }
     
}


