const initState = {
    sensorLoading:false,
    sensors:[],
    chartsLoading:false,
    charts:[],
    highest:1
};

const tankReducer = (state = initState, action) => {
    let index=-1;
    
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
           // 
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
      //    console.log('Reducer', action.payload)
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
                case 'UPPER_LOWER_THERSHOLD':
                
                index = state.sensors.findIndex(s => s._id === action.id)
                console.log('Upper',index);
                    return {
                        ...state,
                        sensors : [...state.sensors.slice(0,index),
                            {
                                ...state.sensors[index],
                                threshold: action.payload
                                  
                            },
                            ...state.sensors.slice(index+1),
                        ],
                        count : 0
                    }
                case 'LOWER_LOWER_THERSHOLD':
                        index = state.sensors.findIndex(s => s._id === action.id);
                       
                        return {
                            ...state,
                            sensors : [...state.sensors.slice(0,index),
                              
                                {
                                    ...state.sensors[index],                                 
                                    threshold_lowerTank: action.payload
                                      
                                },
                                ...state.sensors.slice(index+1),
                            ],
                            count : 0
                        }
                case 'UPPER_UPPER_THERSHOLD':
                    index = state.sensors.findIndex(s => s._id === action.id);
                    return {
                        ...state,
                        sensors : [...state.sensors.slice(0,index),
                            {
                                ...state.sensors[index],
                                upperThreshold : action.payload
                                  
                            },
                            ...state.sensors.slice(index+1),
                        ],
                        count : 0
                    }
                    case 'LOWER_UPPER_THERSHOLD':
                        index = state.sensors.findIndex(s => s._id === action.id)
                        return {
                            ...state,
                            sensors : [...state.sensors.slice(0,index),
                                {
                                    ...state.sensors[index],
                                    upperThreshold_lowerTank: action.payload
                                      
                                },
                                ...state.sensors.slice(index+1),
                            ],
                            count : 0
                        }
                    case 'CHARTS_LOADING':
                        return {
                            ...state,
                            chartsLoading:true
                        }
                    case 'GET_CHARTS':
                       // console.log('reducer',action.payload)
                        return {
                            ...state,
                            charts:action.payload,
                            chartsLoading:false,                            
                            highest:action.highest
                        }
        
        default: 
            return state;   
    }
}
export default tankReducer; 