/* eslint-disable import/no-unresolved */
import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { colors } from '../style';
import NotificationPusher from './notificationpusher';
import HomeScreen from '../modules/tankMonitorinSystem/home/HomeView';
import logScreen from '../modules/tankMonitorinSystem/logs/logView';
// import graphScreen from '../modules/tankMonitorinSystem/charts/graphs';
// import alertScreen from '../modules/tankMonitorinSystem/alerts/recentAlerts';

const iconHome = require('../../assets/images/tabbar/home.png');
const iconAlert = require('../../assets/images/tabbar/alert.png');
const iconGraphs = require('../../assets/images/tabbar/chart.png');
const iconComponents = require('../../assets/images/tabbar/components.png');
const iconCalendar = require('../../assets/images/tabbar/calendar.png');
// const hederBackground = require('../../../assets/images/topBarBg.png');

export default createBottomTabNavigator(
  
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Overview'
      },
    }, 
      Logs: {
        screen : logScreen,
        navigationOptions: {
          title: 'Logs'
        }
     },
    
  },
  
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconSource;
        switch (routeName) {
          case 'Home':
            iconSource = iconHome;
            break;
          case 'Logs':
            iconSource = iconCalendar;
            break;
          default:
            iconSource = iconComponents;
        }
        return (
          <View style={styles.tabBarItemContainer}>
            <Image
              resizeMode="contain"
              source={iconSource}
              style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
            />
          </View>
        );
      },
    }),
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      showLabel: true,
      style: {
        backgroundColor:'#000'
      },
      labelStyle: {
        color: '#fff'
      },
    },
  },
  
);

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  tabBarIcon: {
    width: 23,
    height: 23,
  },
  tabBarIconFocused: {
    tintColor: '#2389DA',
  },
  headerContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    resizeMode: 'cover',
  },
  headerCaption: {
    //fontFamily: fonts.primaryRegular,
    color: colors.white,
    fontSize: 18,
  },
});

