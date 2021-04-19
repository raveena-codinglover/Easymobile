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

export class GenderScreen extends Component {
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
            userObject: param,
            otpCode: otpCode,
            userExist: responseData
        })
    }

    redirectScreen(){
        this.props.navigation.navigate('FullNameScreen')
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: themeStyle.OFF_WHITE_COLOR}}>
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

                    <View style={{flex:1}}>
                        <Image
                            style={{height: hp(dimen.dim_h135), alignSelf:'center', marginTop: hp(dimen.dim_h60)}}
                            resizeMode={'contain'}
                            source={require('../../assets/gender_image.png')}/>

                        <Text style={{
                            color: themeStyle.DARK_BLACK_TEXT_COLOR,
                            fontSize: FontSize.getSize(12),
                            textAlign: 'center',
                            marginTop: hp(dimen.dim_h25)
                        }}>Tell me something{'\n'}about yourself</Text>

                        <Text style={{
                            color: '#000',
                            fontSize: FontSize.getSize(20),
                            textAlign: 'center',
                            marginTop: hp(dimen.dim_h16)
                        }}>What is your Gender?</Text>
                    </View>

                    <View style={{
                        height: hp(dimen.dim_h210),
                        backgroundColor:'#fff',
                        shadowColor: "#000000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.4,
                        shadowRadius: 6,
                        borderTopLeftRadius:20,
                        borderTopRightRadius:20
                    }}>

                            <TouchableOpacity style={{marginTop: hp(dimen.dim_h25)}}
                                              onPress={() =>
                                                  this.redirectScreen()
                                              }>
                                <View style={{flexDirection:'row', alignItems:'center', marginLeft: wp(dimen.dim_w40), marginRight: wp(dimen.dim_w40)}}>
                                    <Image
                                        style={{height: hp(dimen.dim_h40), width: wp(dimen.dim_w40)}}
                                        resizeMode={'contain'}
                                        source={require('../../assets/female_icon.png')}/>

                                    <Text style={{
                                        color: themeStyle.TEXT_COLOR,
                                        fontSize: FontSize.getSize(16),
                                        textAlign:'center',
                                        flex:1
                                    }}>Female</Text>

                                    <Image
                                        style={{height: hp(dimen.dim_h15), width: wp(dimen.dim_w15)}}
                                        resizeMode={'contain'}
                                        source={require('../../assets/right_arrow.png')}/>
                                </View>

                            </TouchableOpacity>

                        <View style={{
                            backgroundColor: themeStyle.LIGHT_TEXT_COLOR,
                            marginTop: hp(dimen.dim_h25),
                            height: 1,
                        }}/>

                        <TouchableOpacity style={{marginTop: hp(dimen.dim_h30)}}
                                          onPress={() =>
                                              this.redirectScreen()
                                          }>
                            <View style={{flexDirection:'row', alignItems:'center', marginLeft: wp(dimen.dim_w40), marginRight: wp(dimen.dim_w40)}}>
                                <Image
                                    style={{height: hp(dimen.dim_h40), width: wp(dimen.dim_w40)}}
                                    resizeMode={'contain'}
                                    source={require('../../assets/male_icon.png')}/>

                                <Text style={{
                                    color: themeStyle.TEXT_COLOR,
                                    fontSize: FontSize.getSize(16),
                                    textAlign:'center',
                                    flex:1
                                }}>Male</Text>

                                <Image
                                    style={{height: hp(dimen.dim_h15), width: wp(dimen.dim_w15)}}
                                    resizeMode={'contain'}
                                    source={require('../../assets/right_arrow.png')}/>
                            </View>

                        </TouchableOpacity>

                   </View>

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

export default GenderScreen;
