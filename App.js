/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import Navigation from './src/navigation/rootNavigator';
import {Provider} from 'react-redux';
import{createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/redux/reducers';


//store
const store = createStore(reducers,applyMiddleware(thunk));



class App extends React.Component{
    render(){
      return(
        <Provider store={store}>
          <Navigation/>
        </Provider>      
      );
    }
  }
  
  export default App;
  