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

export class EmailIDScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryCode: '91',
            emailID: '',
            isProgress: false,
            otpString: ''
        };
    }


    /**
     * onSubmit button action
     */

    onSubmit() {
        const {emailID, countryCode} = this.state;
        if (emailID === '') {
            CustomAlert.setAlertView(Config.appName, 'Please enter your email id');
            return;
        }
        Keyboard.dismiss();

        this.setState({isProgress: true});

        this.props.navigation.navigate('VerifyMobileNumber', {
            userObject: param,
            otpCode: otpCode,
            userExist: responseData
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
                        <TouchableOpacity style={{marginLeft: 16, width: 50}}
                                          onPress={() =>
                                              this.props.navigation.goBack()
                                          }>
                            <Image
                                style={{height: hp(dimen.dim_h20), width: wp(dimen.dim_w20)}}
                                resizeMode={'contain'}
                                source={require('../../assets/back_icon.png')}/>
                        </TouchableOpacity>

                        <View style={{flex:1}}></View>
                        <View>
                            <TouchableOpacity style={{marginRight: 16, width: 50}}
                                              onPress={() =>
                                                  this.props.navigation.navigate('LoginScreen')
                                              }>
                                <Text style={{
                                    color: themeStyle.THEME_COLOR,
                                    fontSize: FontSize.getSize(16),
                                    textAlign:'right'
                                }}>Skip</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <Image
                        style={{
                            height: hp(dimen.dim_h50),
                            width: wp(dimen.dim_w60),
                            alignSelf:'center',
                            marginTop: hp(dimen.dim_h150)
                        }}
                        resizeMode={'contain'}
                        source={require('../../assets/email_icon.png')}/>

                    <Text style={{
                        color: themeStyle.DARK_BLACK_TEXT_COLOR,
                        fontSize: FontSize.getSize(20),
                        textAlign: 'center',
                        marginTop: hp(dimen.dim_h40)
                    }}>What is your Email ID?</Text>


                    <View style={{
                        marginLeft: wp(dimen.dim_w30),
                        marginRight: wp(dimen.dim_w30),
                        flexDirection: 'row',
                        marginTop: hp(dimen.dim_h40)
                    }}>

                        <View style={{
                            height: hp(dimen.dim_h50),
                            flex: 1,
                            borderRadius: hp(dimen.dim_h50) / 2,
                            borderWidth: 1.5,
                            borderColor: themeStyle.LIGHT_TEXT_COLOR,
                            backgroundColor: themeStyle.WHITE_BG_COLOR,
                            // justifyContent: 'center',
                            flexDirection: 'row',
                            // alignContent:'center',
                            alignItems:'center',
                        }}>

                            <TextInput
                                style={{
                                    fontSize: FontSize.getSize(12),
                                    marginLeft: 15,
                                    marginRight: 15,
                                    flex:1
                                }}
                                placeholder={'Enter your email address'}
                                onChangeText={text => this.setState({emailID: text})}
                                value={this.state.emailID}
                                multiline={false}
                                numberOfLines={1}
                                placeholderTextColor={themeStyle.PLACEHODER_COLOR}
                                autoCorrect={false}
                                keyboardType={"email-address"}
                                // autoFocus={true}
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
                                              this.props.navigation.navigate('DOBScreen')
                                          }>
                            <Text style={{
                                color: '#fff',
                                fontSize: FontSize.getSize(14),
                                textAlign: 'center',
                                // marginTop: Platform.OS === 'ios' ? 13 : 0
                            }}> CONTINUE </Text>

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

export default EmailIDScreen;
