/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import themeStyle from './controllers/styles/theme.style';

//import IntroScreen from './controllers/authenticationScreens/IntroScreen';
import SplashScreen from "./controllers/authenticationScreens/SplashScreen";
import LoginScreen from './controllers/authenticationScreens/LoginScreen';
import OTPVerificationScreen from './controllers/authenticationScreens/OTPVerificationScreen';
import GenderScreen from './controllers/authenticationScreens/GenderScreen';
import FullNameScreen from './controllers/authenticationScreens/FullNameScreen';
import EmailIDScreen from './controllers/authenticationScreens/EmailIDScreen';
import DOBScreen from './controllers/authenticationScreens/DOBScreen';
import ProfilePicScreen from './controllers/authenticationScreens/ProfilePicScreen';
import HomeScreen from './controllers/homeScreens/HomeScreen';
import ProductListScreen from './controllers/homeScreens/ProductListScreen';
import SearchScreen from './controllers/homeScreens/SearchScreen';
import ProfileScreen from './controllers/homeScreens/ProfileScreen';

const AppNavigator = createStackNavigator({
      
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            headerTintColor: 'black',
            headerBackTitle: null,
            header: null
        },
    },
    OTPVerificationScreen: {
        screen: OTPVerificationScreen,
        navigationOptions: {
            headerTintColor: 'black',
            headerBackTitle: null,
            header: null
        },
    },
    /*GenderScreen: {
        screen: GenderScreen,
        navigationOptions: {
            headerTintColor: 'black',
            headerBackTitle: null,
            header: null
        },
    },
    FullNameScreen: {
        screen: FullNameScreen,
        navigationOptions: {
            headerTintColor: 'black',
            headerBackTitle: null,
            header: null
        },
    },
    EmailIDScreen: {
        screen: EmailIDScreen,
        navigationOptions: {
            headerTintColor: 'black',
            headerBackTitle: null,
            header: null
        },
    },
    DOBScreen: {
        screen: DOBScreen,
        navigationOptions: {
            headerTintColor: 'black',
            headerBackTitle: null,
            header: null
        },
    },
    ProfilePicScreen: {
        screen: ProfilePicScreen,
        navigationOptions: {
            headerTintColor: 'black',
            headerBackTitle: null,
            header: null
        },
    },*/
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            headerTintColor: 'black',
            headerBackTitle: null,
            header: null
        },
    },
    ProductListScreen: {
        screen: ProductListScreen,
        navigationOptions: {
            headerTintColor: 'black',
            headerBackTitle: null,
            header: null
        },
    },
    SearchScreen: {
        screen: SearchScreen,
        navigationOptions: {
            headerTintColor: 'black',
            headerBackTitle: null,
            header: null
        },
    },
    ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: {
            headerTintColor: 'black',
            headerBackTitle: null,
            header: null
        },
    },
      SplashScreen: {
        screen: SplashScreen,
        navigationOptions: {
          headerBackTitle: null,
          header:null
        }
      },
    }, {initialRouteName: 'SplashScreen'},
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
    console.disableYellowBox = true;
    return <AppContainer/>;
}
