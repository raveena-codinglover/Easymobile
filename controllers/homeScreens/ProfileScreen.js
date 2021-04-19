import React, {Component} from 'react';
import {
    Image,
    Platform,
    SafeAreaView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
    Alert
} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen/index';
import dimen from '../styles/dimen';
import themeStyle from '../styles/theme.style';
import FontSize from '../styles/manageFontSize';
import Config from '../config/Config';

export class ProfileScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isProgress: false,
        };
    }

    async componentDidMount() {
        if (Platform.OS === 'android') {
            this._navListener = this.props.navigation.addListener('didFocus', () => {
                StatusBar.setTranslucent(true);
                StatusBar.setBackgroundColor('#2E7171');
                StatusBar.setBarStyle('light-content');
            });
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android')
            this._navListener.remove();
    }


    /**
     * show logout user alert
     * @returns {Promise<void>}
     */
    async logout() {
        Alert.alert(
            Config.appName,
            'Are you sure you want to Logout?',
            [
                {
                    text: 'Yes', onPress: async () => {
                        this.props.navigation.dispatch(
                            StackActions.reset({
                                index: 0,
                                key: null,
                                actions: [NavigationActions.navigate({routeName: 'SplashScreen'})],
                               // actions: [NavigationActions.navigate({routeName: 'IntroScreen'})],
                            }),
                        );
                    }
                },
                {
                    text: 'No',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
            ],
            {cancelable: false},
        );
    }


    render() {
        return (
            <View style={{flex: 1, backgroundColor: themeStyle.OFF_WHITE_COLOR}}>
                <View style={{backgroundColor: themeStyle.THEME_COLOR, height:60}}></View>

                <SafeAreaView/>
                <View style={{
                    flexDirection:'row',
                    alignItems: 'center',
                    alignContent:'center',
                    backgroundColor: themeStyle.THEME_COLOR,
                }}>
                    <View style={{marginLeft: 16, flexDirection:'row', alignItems:'center'}}>
                        <TouchableOpacity style={{width: 40}}
                                          onPress={() =>
                                              this.props.navigation.goBack()
                                          }>
                            <Image
                                style={{
                                    height: hp(dimen.dim_h25),
                                    width: wp(dimen.dim_w25),
                                }}
                                resizeMode={'contain'}
                                source={require('../../assets/white_back.png')}/>
                        </TouchableOpacity>
                        <Text style={{color:'#fff', fontSize:FontSize.getSize(22)}}>
                            Profile
                        </Text>
                    </View>
                </View>

                <View style={{
                    backgroundColor: themeStyle.THEME_COLOR,
                    height: hp(dimen.dim_h90),
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20
                }}>
                </View>

                <View style={{
                    marginTop: -hp(dimen.dim_h65),
                    alignSelf:'center'
                }}>
                    <Image
                        style={{
                            height: hp(dimen.dim_h135),
                            width: wp(dimen.dim_w135),
                        }}
                        resizeMode={'contain'}
                        source={require('../../assets/profile_pic.png')}/>
                </View>

                <View style={{
                    marginTop: hp(dimen.dim_h12),
                    alignSelf:'center'
                }}>
                    <Text style={{color:'#000', fontSize:FontSize.getSize(22), textAlign:'center'}}>
                        Dominick Froster
                    </Text>

                    <Text style={{
                        color:themeStyle.THEME_COLOR,
                        fontSize:FontSize.getSize(12),
                        textAlign:'center',
                        marginTop: hp(dimen.dim_h8)
                    }}>
                        dominickfroster@gmail.com
                    </Text>
                </View>

                <View style={[{
                    backgroundColor:'#fff',
                    marginTop:hp(dimen.dim_h60),
                    borderRadius: 22
                }, styles.viewShadow]}>

                    <TouchableOpacity style={{}}
                                      onPress={() =>
                                          this.props.navigation.goBack()
                                      }>
                    <View style={{
                        height: hp(dimen.dim_h90),
                        flexDirection:'row',
                        marginLeft: wp(dimen.dim_w30),
                        alignItems:'center'
                    }}>

                        <Image
                            style={{
                                height: hp(dimen.dim_h43),
                                width: wp(dimen.dim_w43),
                            }}
                            resizeMode={'contain'}
                            source={require('../../assets/edit_profile.png')}/>

                        <Text style={{
                            color:themeStyle.PLACEHOLDER_COLOR,
                            fontSize:FontSize.getSize(20),
                            marginLeft: wp(dimen.dim_w24),
                            flex:1
                        }}>
                            Edit Profile
                        </Text>

                        <Image
                            style={{
                                height: hp(dimen.dim_h25),
                                width: wp(dimen.dim_w25),
                                marginRight: wp(dimen.dim_w30),
                            }}
                            resizeMode={'contain'}
                            source={require('../../assets/faq.png')}/>

                    </View>
                    </TouchableOpacity>

                    <View style={{height: 1, backgroundColor: themeStyle.LINE_COLOR}}></View>

                    <TouchableOpacity style={{}}
                                      onPress={() =>
                                          this.props.navigation.goBack()
                                      }>
                    <View style={{
                        height: hp(dimen.dim_h90),
                        flexDirection:'row',
                        marginLeft: wp(dimen.dim_w30),
                        alignItems:'center'
                    }}>
                        <Image
                            style={{
                                height: hp(dimen.dim_h43),
                                width: wp(dimen.dim_w43),
                            }}
                            resizeMode={'contain'}
                            source={require('../../assets/help_icon.png')}/>

                        <Text style={{
                            color:themeStyle.PLACEHOLDER_COLOR,
                            fontSize:FontSize.getSize(20),
                            marginLeft: wp(dimen.dim_w24),
                            flex:1
                        }}>
                            Help
                        </Text>

                        <Image
                            style={{
                                height: hp(dimen.dim_h25),
                                width: wp(dimen.dim_w25),
                                marginRight: wp(dimen.dim_w30),
                            }}
                            resizeMode={'contain'}
                            source={require('../../assets/faq.png')}/>

                    </View>
                    </TouchableOpacity>

                    <View style={{height: 1, backgroundColor: themeStyle.LINE_COLOR}}></View>

                    <TouchableOpacity style={{}}
                                      onPress={() =>
                                          this.props.navigation.goBack()
                                      }>
                    <View style={{
                        height: hp(dimen.dim_h90),
                        flexDirection:'row',
                        marginLeft: wp(dimen.dim_w30),
                        alignItems:'center'
                    }}>
                        <Image
                            style={{
                                height: hp(dimen.dim_h43),
                                width: wp(dimen.dim_w43),
                            }}
                            resizeMode={'contain'}
                            source={require('../../assets/myreport_icon.png')}/>

                        <Text style={{
                            color:themeStyle.PLACEHOLDER_COLOR,
                            fontSize:FontSize.getSize(20),
                            marginLeft: wp(dimen.dim_w24),
                            flex:1
                        }}>
                            My Reports
                        </Text>

                        <Image
                            style={{
                                height: hp(dimen.dim_h25),
                                width: wp(dimen.dim_w25),
                                marginRight: wp(dimen.dim_w30),
                            }}
                            resizeMode={'contain'}
                            source={require('../../assets/faq.png')}/>

                    </View>
                    </TouchableOpacity>

                </View>

                <View style={{alignSelf:'center', marginTop: hp(dimen.dim_h80)}}>
                    <TouchableOpacity style={{}}
                                      onPress={() =>
                                          this.logout()
                                      }>
                        <Text style={{
                            color:themeStyle.THEME_COLOR,
                            fontSize:FontSize.getSize(20),
                        }}>
                            Logout
                        </Text>

                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

/**
 * styles
 * @type {{viewStyles: {backgroundColor: string, alignItems: string, flex: number, justifyContent: string}}}
 */

const styles = {
    viewShadow: {
        shadowColor: themeStyle.DARK_GRAY_COLOR,
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
};

export default ProfileScreen;
