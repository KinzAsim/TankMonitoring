import axios from 'axios';
import {url} from './types';

export const getLogs = (type,id,startDate,endDate) => async (dispatch,getState) => {
  // console.log('sensor data', data.data)
  //console.log('here',type,id,startDate,endDate)

    dispatch({
        type: 'UPDATE_LOGS',
    });
    const config = {
        headers: {
            'Content-type':'Application/json'
        }
    }
   const body = {
        startDate,
        endDate
    };
   // console.log(body);

    try{
        const data = await axios.post(`${url}/rs/log/${type}/${id}`, body,config)
    //   console.log('Getlogs',data.data)
        dispatch({
            type: 'GET_LOGS',
            payload: data.data
        })
    }
    catch(err){
        console.log(err) 
    }
}