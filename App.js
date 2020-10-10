/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import {View,ActivityIndicator,StyleSheet} from 'react-native';
import Navigation from './src/navigation/rootNavigator';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import{createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/redux/reducers';


//store
//const store = createStore(reducers,applyMiddleware(thunk));



class App extends React.Component{
    render(){
      return(
        <Provider store={store}>
        <PersistGate
          loading={
            <View style={styles.container}>
              <ActivityIndicator color={'red'} />
            </View>
          }
          persistor={persistor}
        >
          <Navigation />
        </PersistGate>
      </Provider>
      );
    }
  }
  
  export default App;


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
  