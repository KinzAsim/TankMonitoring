import { combineReducers } from 'redux';
import authReducer from './reducer/authReducer';
import userReducer from './reducer/userReducer';
import errorReducer from './reducer/errorReducer';
import tankReducer from './reducer/tankReducer';
import NotificationReducer from './reducer/notificationReducer';
import LogReducer from './reducer/LogsReducer';
import ThresholdReducer from './reducer/thresholdReducer';

//rootReducer 

export default combineReducers({
    
  auth : authReducer,
  user : userReducer,
  error: errorReducer,
  tank: tankReducer,
  notifications: NotificationReducer,
  logs: LogReducer,
  threshold:ThresholdReducer
}); 