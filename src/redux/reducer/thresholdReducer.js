const initState = {
    sensors:[]
};

const ThresholdReducer = (state = initState, action) => {
   
    let index=-1;
   
    switch(action.type){
        case 'UPPER_LOWER_THERSHOLD':
        
        index = state.sensors.findIndex(s => s._id === action.payload)
        console.log('End',action.payload);
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
                index = state.sensors.findIndex(s => s._id === action.payload)
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
        case 'UPPER_UPPER_THERSHOLD':
            index = state.sensors.findIndex(s => s._id === action.payload)
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
                index = state.sensors.findIndex(s => s._id === action.payload)
                return {
                    ...state,
                    sensors : [...state.sensors.slice(0,index),
                        {
                            ...state.sensors[index],
                            upperThreshold: action.payload
                              
                        },
                        ...state.sensors.slice(index+1),
                    ],
                    count : 0
                }

        default: 
            return state;   
    }

}  
export default ThresholdReducer;