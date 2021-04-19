import React, {Component} from 'react';
import {ImageBackground, Platform, StatusBar, View} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';
import User from "../models/User";
import LoginScreen from "./LoginScreen";
import Config from "../config/Config";
import themeStyle from '../../controllers/styles/theme.style';

/**
 * splash page
 */
export class SplashScreen extends Component {

    constructor(props) {
        super(props);
    }

    /**
     * redirect to HomeScreen or IntroScreen screen
     * if user is login then go to HomeScreen
     * else go to IntroScreen screen
     */

    redirectScreen(){
        setTimeout(async () => {
            const user = await User.retrieve();
            console.log('user ', user);
            if (user != null && user !== '' && user !== undefined) {
                this.props.navigation.dispatch(
                    StackActions.reset({
                        index: 0,
                        key: null,
                        actions: [NavigationActions.navigate({routeName: 'LoginScreen',
                            params: {
                                language: this.props.language
                            }
                        })],
                    }),
                );
            } else {
                this.props.navigation.dispatch(
                    StackActions.reset({
                        index: 0,
                        key: null,
                        actions: [NavigationActions.navigate({routeName: 'LoginScreen'})],
                    }),
                );
            }
        }, 2000);
    }

    async componentDidMount() {
        if (Platform.OS === 'android') {
            this._navListener = this.props.navigation.addListener('didFocus', () => {
                StatusBar.setTranslucent(false);
                StatusBar.setBackgroundColor(themeStyle.STATUSBAR_COLOR);
                StatusBar.setBarStyle('light-content');
            });
        }
        this.redirectScreen();
    }

    componentWillUnmount() {
        if (Platform.OS === 'android')
            this._navListener.remove();
    }

    render() {
        return (
            <View style={styles.viewStyles}>
                <ImageBackground source={require('../../assets/splashscreen.png')}
                                 resizeMode={'cover'}
                                 style={{
                                     width: Config.getDeviceWidth(),
                                     height: Config.getDeviceHeight(),
                                 }}>
                </ImageBackground>
            </View>
        );
    }
}

/**
 * styles
 * @type {{viewStyles: {backgroundColor: string, alignItems: string, flex: number, justifyContent: string}}}
 */

const styles = {
    viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
};

export default SplashScreen;
