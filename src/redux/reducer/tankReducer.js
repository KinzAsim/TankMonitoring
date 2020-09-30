const initState = {
    sensorLoading:false,
    sensors:[]
};

const tankReducer = (state = initState, action) => {
    let index=-1;
   // console.log('Reducer',action.payload);
    switch(action.type){
        case 'SENSOR_LOADING':
            return {
              ...state,
              sensorLoading: true
            } 
        case 'GET_SENSOR':
            return {
                ...state,
                sensorLoading: false,
                sensors:action.payload
            }
        case 'UPDATE_FILLLEVEL':
           // console.log('In Reducer', action.payload)
            index = state.sensors.findIndex(s => s._id === action.payload.lms_id)
            return {
                ...state,
                sensors : [...state.sensors.slice(0,index),
                    {
                        ...state.sensors[index],
                        fillLevel : action.payload.fillLevel
                          
                    },
                    ...state.sensors.slice(index+1),
                ]
            }
            case 'UPDATE_FILLLEVEL1':
      //      console.log('Reducer', action.payload)
            index = state.sensors.findIndex(s => s._id === action.payload.lms_id)
            return {
                ...state,
                sensors : [...state.sensors.slice(0,index),
                    {
                        ...state.sensors[index],
                        fillLevel1 : action.payload.fillLevel1
                          
                    },
                    ...state.sensors.slice(index+1),
                ]
            }
        case 'UPDATE_MOTORSTATUS':
            index = state.sensors.findIndex(s => s._id === action.payload.lms_id)
            return {
                ...state,
                sensors : [...state.sensors.slice(0,index),
                    {
                        ...state.sensors[index],
                        motor : action.payload.motor
                          
                    },
                    ...state.sensors.slice(index+1),
                ]
            }
        
        default: 
            return state;   
    }
}
export default tankReducer; 