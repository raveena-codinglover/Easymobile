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
import {BusyIndicator} from '../utils/busy-indicator';

export class LoginScreen extends Component {
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
        // const {phoneNumber, countryCode} = this.state;
        // if (phoneNumber === '') {
        //     CustomAlert.setAlertView(Config.appName, 'Please enter your mobile number');
        //     return;
        // }
        // if (phoneNumber.length !== 10) {
        //     CustomAlert.setAlertView('Oops!', 'Please enter a valid mobile number');
        //     return;
        // }
        // Keyboard.dismiss();
        //
        // this.setState({isProgress: true});

        this.props.navigation.navigate('OTPVerificationScreen', {
            phoneNumber: '1234567890'
        })
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: themeStyle.OFF_WHITE_COLOR}}>
                <ScrollView scrollEnabled={false} showsVerticalScrollIndicator={false}
                            keyboardShouldPersistTaps='handled'>
                    <SafeAreaView/>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: hp(dimen.dim_h10),
                        alignItems: 'center',
                        alignContent: 'center'
                    }}>
                       

                        <View style={{flex: 1}}>
                            <Text style={{
                                textAlign: 'center',
                                color: themeStyle.DARK_BLACK_TEXT_COLOR,
                                fontSize: FontSize.getSize(18),
                            }}>Login</Text>
                        </View>
                        
                    </View>


                    <Image
                        style={{
                            height: hp(dimen.dim_h85),
                            width: wp(dimen.dim_w85),
                            alignSelf: 'center',
                            marginTop: hp(dimen.dim_h60)
                        }}
                        resizeMode={'contain'}
                        source={require('../../assets/conversation_icon.png')}/>

                    <Text style={{
                        color: themeStyle.DARK_BLACK_TEXT_COLOR,
                        fontSize: FontSize.getSize(20),
                        textAlign: 'center',
                        marginTop: hp(dimen.dim_h40)
                    }}>Login with your{'\n'}Phone number</Text>

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
                            alignItems: 'center',
                        }}>

                            <Image
                                style={{
                                    height: hp(dimen.dim_h22),
                                    width: wp(dimen.dim_w22),
                                    marginLeft: wp(dimen.dim_w15),
                                    marginRight: wp(dimen.dim_w8)
                                }}
                                resizeMode={'contain'}
                                source={require('../../assets/flag.png')}/>

                            <Text style={{
                                fontSize: FontSize.getSize(12),
                                textAlign: 'right',
                                marginRight: wp(dimen.dim_w15),
                            }}>
                                +91
                            </Text>

                            <TextInput
                                style={{
                                    fontSize: FontSize.getSize(12),
                                    marginLeft: 10,
                                    flex: 1
                                }}
                                placeholder={'Enter Mobile Number'}
                                onChangeText={text => this.setState({phoneNumber: text})}
                                value={this.state.phoneNumber}
                                multiline={false}
                                numberOfLines={1}
                                placeholderTextColor={themeStyle.PLACEHODER_COLOR}
                                autoCorrect={false}
                                keyboardType={"number-pad"}
                                maxLength={10}
                                // autoFocus={true}
                            />

                            <Image
                                style={{
                                    height: hp(dimen.dim_h20),
                                    width: wp(dimen.dim_w20),
                                    marginLeft: wp(dimen.dim_w15),
                                    marginRight: wp(dimen.dim_w15)
                                }}
                                resizeMode={'contain'}
                                source={require('../../assets/phone_icon.png')}/>
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
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
                                          disabled={this.state.isProgress}
                                          onPress={() =>
                                              this.onSubmit()
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

                 

                    <View style={{
                        flexDirection: 'row',
                        marginTop: hp(dimen.dim_h40),
                        justifyContent: 'center',
                    }}>
                         


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

export default LoginScreen;
