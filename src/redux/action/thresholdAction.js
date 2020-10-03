import axios from 'axios';
import {url} from './types';


export const ThresholdLower = (threshold,type,id) =>  async (dispatch,getState) =>{
 // console.log('Threshold',threshold,type,id)
    const config = {
        headers: {
            'Content-type':'Application/json'
        }
    }
   const body = {
        threshold,
    };

    try{
        const data = await axios.post(`${url}/rs/threshold/${type}/${id}`,body,config)
        //console.log('Lower',data);
        if (type === 'OH'){
            dispatch({
                //upper => lower threshold
                type: 'UPPER_LOWER_THERSHOLD',
                payload: threshold,
                id:id
            });
        }
        else if (type === 'UG'){
            dispatch({
                //upper => lower threshold
                type: 'LOWER_LOWER_THERSHOLD',
                payload: threshold,
                id:id
            });
        }
        else {
            console.log('Error')
        }
        

    }
    catch(err) {
        console.log(err)
      
    }
}


export const ThresholdUpper = (upperThreshold,type,id) =>  async (dispatch,getState) => {
    console.log('ThresholdUpper',upperThreshold,type,id)
     const config = {
         headers: {
             'Content-type':'Application/json'
         }
     }
    const body = {
         upperThreshold:upperThreshold,
     };
     console.log('body',body)
     try{
         const data = await axios.post(`${url}/rs/upperThreshold/${type}/${id}`,body,config)
      //console.log(data);
      if(type === 'OH_U'){
        dispatch({
            type: 'UPPER_UPPER_THERSHOLD',
            payload: upperThreshold,
            id:id
        });
      }
      else if(type === 'UG_U'){
        dispatch({
            type: 'LOWER_UPPER_THERSHOLD',
            payload: upperThreshold,
            id:id
        });
      }
      else {
          console.log("Error")
      }
        
     }
     catch(err) {
         console.log(err);
     }
 }