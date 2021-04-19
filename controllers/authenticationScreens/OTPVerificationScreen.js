import React, {Component} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TouchableOpacity, Platform,
    TextInput, Image,
    Keyboard, ScrollView, Alert
} from 'react-native';
import themeStyle from '../styles/theme.style'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import dimen from '../styles/dimen';
import FontSize from "../styles/manageFontSize";
import Config from '../config/Config';
import {BusyIndicator} from '../utils/busy-indicator';
import CustomAlert from '../utils/CustomAlert';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from './SplashScreen';
import OTPInputView from '@twotalltotems/react-native-otp-input'
//import HomeScreen from './controllers/homeScreens/HomeScreen';

export class OTPVerificationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryCode: '91',
            phoneNumber: '',
            isProgress: false,
            otpString: ''
        };
    }


    /**
     * onSubmit button action
     */

    onSubmit() {
        const {phoneNumber, countryCode} = this.state;
        if (phoneNumber === '') {
            CustomAlert.setAlertView(Config.appName, 'Please enter your mobile number');
            return;
        }
        if (phoneNumber.length !== 10) {
            CustomAlert.setAlertView('Oops!', 'Please enter a valid mobile number');
            return;
        }
        Keyboard.dismiss();

        this.setState({isProgress: true});

        this.props.navigation.navigate('VerifyMobileNumber', {
            userObject: 'param',
            otpCode: 'otpCode',
            userExist: 'responseData'
        })
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: themeStyle.OFF_WHITE_COLOR}}>
                <ScrollView scrollEnabled={false} showsVerticalScrollIndicator={false}
                            keyboardShouldPersistTaps='handled'>
                    <SafeAreaView/>
                    <View style={{
                        flexDirection:'row',
                        justifyContent: 'center',
                        marginTop: hp(dimen.dim_h10),
                        alignItems: 'center',
                        alignContent:'center'
                    }}>
                        <TouchableOpacity style={{marginLeft: 10, width: 50}}
                                          onPress={() =>
                                              this.props.navigation.goBack()
                                          }>
                            <Image
                                style={{height: hp(dimen.dim_h20), width: wp(dimen.dim_w20)}}
                                resizeMode={'contain'}
                                source={require('../../assets/back_icon.png')}/>
                        </TouchableOpacity>

                        <View style={{flex:1}}>
                            <Text style={{
                                marginRight:50,
                                textAlign: 'center',
                                color: themeStyle.DARK_BLACK_TEXT_COLOR,
                                fontSize: FontSize.getSize(18),
                            }}>Login</Text>
                        </View>
                        <View>

                        </View>
                    </View>


                    <Image
                        style={{height: hp(dimen.dim_h85), width: wp(dimen.dim_w85), alignSelf:'center', marginTop: hp(dimen.dim_h60)}}
                        resizeMode={'contain'}
                        source={require('../../assets/write_message.png')}/>

                    <Text style={{
                        color: themeStyle.DARK_BLACK_TEXT_COLOR,
                        fontSize: FontSize.getSize(20),
                        textAlign: 'center',
                        marginTop: hp(dimen.dim_h40)
                    }}>OTP Verification</Text>

                    <View style={{flexDirection:'row', justifyContent:'center'}}>
                        <Text style={{
                            color: themeStyle.DARK_GRAY_COLOR,
                            fontSize: FontSize.getSize(11),
                            textAlign: 'center',
                            marginTop: hp(dimen.dim_h16)
                        }}>Enter The OTP sent to</Text>

                        <Text style={{
                            color: themeStyle.THEME_COLOR,
                            fontSize: FontSize.getSize(11),
                            textAlign: 'center',
                            marginTop: hp(dimen.dim_h16)
                        }}> +911234567890</Text>

                        <TouchableOpacity style={{justifyContent:'center'}}
                            onPress={() =>
                                console.log('click')
                            }>
                            <Image
                                style={{marginLeft: wp(dimen.dim_w5), alignSelf:'center', marginTop: hp(dimen.dim_h10)}}
                                resizeMode={'contain'}
                                source={require('../../assets/edit_icon.png')}/>
                        </TouchableOpacity>

                    </View>


                    <View style={{
                        marginLeft: wp(dimen.dim_w30),
                        marginRight: wp(dimen.dim_w30),
                        flexDirection: 'row',
                        marginTop: hp(dimen.dim_h40)
                    }}>

                        <View style={{
                            height: hp(dimen.dim_h50),
                            flex: 1,
                        }}>

                            <OTPInputView
                                // style={{marginRight: wp(dimen.dim_w30), marginLeft: wp(dimen.dim_w30)}}
                                pinCount={4}
                                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                                // onCodeChanged = {code => { this.setState({code})}}
                                autoFocusOnLoad
                                codeInputFieldStyle={{
                                    backgroundColor:'#fff',
                                    borderColor: themeStyle.LIGHT_TEXT_COLOR,
                                    width: wp(dimen.dim_w47),
                                    height: hp(dimen.dim_h47),
                                    color: '#000',
                                    fontSize: FontSize.getSize(14)
                                }}
                                // codeInputHighlightStyle={styles.underlineStyleHighLighted}
                                onCodeFilled = {(code => {
                                    console.log(`Code is ${code}, you are good to go!`)
                                })}
                                autoFocusOnLoad={false}
                                secureTextEntry={true}
                            />
                        </View>

                    </View>


                    <View style={{
                        marginLeft: wp(dimen.dim_w30),
                        marginRight: wp(dimen.dim_w30),
                        marginTop: hp(dimen.dim_h40),
                        backgroundColor: themeStyle.THEME_COLOR,
                        height: hp(dimen.dim_h48),
                        borderRadius: hp(dimen.dim_h48) / 2,
                        justifyContent: 'center',
                        shadowColor: '#5BC6B8',
                        shadowOpacity: 0.5,
                        shadowRadius: 16,
                        shadowOffset: {
                            height: 6,
                            width: 2
                        }
                    }}>
                        <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}} disabled={this.state.isProgress}
                                          onPress={() =>
                                            this.props.navigation.navigate('HomeScreen')
                                          }>
                            <Text style={{
                                color: '#fff',
                                fontSize: FontSize.getSize(14),
                                textAlign: 'center',
                                // marginTop: Platform.OS === 'ios' ? 13 : 0
                            }}> VERIFY </Text>

                            <Image
                                style={{
                                    height: hp(dimen.dim_h18),
                                    width: wp(dimen.dim_w18),
                                    marginLeft: wp(dimen.dim_w6),
                                }}
                                resizeMode={'contain'}
                                source={require('../../assets/arrow-righ.png')}/>

                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'center', marginTop: hp(dimen.dim_h32),}}>
                        <Text style={{
                            fontSize: FontSize.getSize(10),
                            color: themeStyle.DARK_GRAY_COLOR
                        }}>
                            Don't receive the code?
                        </Text>

                        <TouchableOpacity
                                          onPress={() =>
                                              console.log('click')
                                          }>
                            <Text style={{
                                color: themeStyle.THEME_COLOR,
                                fontSize: FontSize.getSize(10),
                            }}> Resend SMS</Text>

                        </TouchableOpacity>

                    </View>


                    <BusyIndicator visible={this.state.isProgress}/>
                </ScrollView>
            </View>
        );
    }

    componentDidMount() {
        if (Platform.OS === 'android') {
            this._navListener = this.props.navigation.addListener('didFocus', () => {
                StatusBar.setTranslucent(false);
                StatusBar.setBackgroundColor(themeStyle.OFF_WHITE_COLOR);
                StatusBar.setBarStyle('dark-content');
            });
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            this._navListener.remove();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }
}

export default OTPVerificationScreen;
