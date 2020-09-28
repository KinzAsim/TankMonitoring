import {USER_LOADING, LOGIN_SUCCESS, url, USER_LOADED} from './types';
import axios from 'axios';



export const login = (email, password)=> {
     console.log(email,password);
    return (dispatch, getState)=> {
        dispatch({
            type:'USER_LOADING'
        })

    const config = {
        headers : {
            'Content-type' : 'Application/json' 
        }
    }
    const body = JSON.stringify({
        email,
        password,
    })
    axios.post(`${url}/user/login`, body, config)
    .then(res=>
        //console.log('action',res.data)
        dispatch ({
            type : 'LOGIN_SUCCESS',
            payload : res.data
    })
    )
    .catch(err => {
         //console.log(err.response.data);
    });
};
}

export const loadUser = (token) => {       
    return(dispatch,getState)=> {
        dispatch({
            type: 'USER_LOADING',
        });
        //console.log('i am loader');
        //console.log('token',token);
    const config = {
        headers : {
          'Content-type':'Application/json',
          'auth': token
        }
    }
    axios.get(`${url}/user/auth`, config)
    .then(res=>{
       //console.log('loaduserdata',res.data);
        dispatch({
            type:'USER_LOADED',
            payload:res.data

        })
    })        
    .catch(err => {
       // console.log(err.response.data);
    })
    }
}

  