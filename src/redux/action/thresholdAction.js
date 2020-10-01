import axios from 'axios';
import {url} from './types';


export const ThreshlodAction = (threshold,id) => {
   // console.log('ThresholdAction', data)
    dispatch()({
        type:'UPPER_THERSHOLD'
    });
    body = {
        threshold
    }

    try{
        const data = await axios.post(`${url}/threshold/${type}/${id}`,body,config)
        console.log('ThresholdAction',data)
        // dispatch({
        //     type: 'GET_THRESHOLD',
        //     payload: data.data
        // })
        resolve('done');
    }
    catch(err) {
        console.log(err)
        reject(err);
    }
}