import React, {Component, useState} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TouchableOpacity, Platform,
    TextInput, Image,
    Keyboard, ScrollView, Alert, Modal, Button
} from 'react-native';
import themeStyle from '../styles/theme.style'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import dimen from '../styles/dimen';
import FontSize from "../styles/manageFontSize";
import Config from '../config/Config';
import {BusyIndicator} from '../utils/busy-indicator';
import CustomAlert from '../utils/CustomAlert';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";

let selectedDOBDate = ''

export class DOBScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateOfBirth: '',
            isProgress: false,
            modalVisible: false,
        };
    }


    /**
     * onSubmit button action
     */

    onSubmit() {
        const {dateOfBirth, countryCode} = this.state;
        if (dateOfBirth === '') {
            CustomAlert.setAlertView(Config.appName, 'Please select your date of birth');
            return;
        }
        Keyboard.dismiss();

        this.setState({isProgress: true});
    }

    onChange = (event, selectedDate) => {
        selectedDOBDate = moment(selectedDate).format('DD/MM/ YYYY');
        console.log('selectedDOBDate', selectedDOBDate)
        if(Platform.OS ==='android')
            this.setState({dateOfBirth:selectedDOBDate,modalVisible:false});
    };

    _handleButtonPress = () => {
        this.setModalVisible(true, false);
    };

    setModalVisible = (visible, flag) => {
        console.log(flag)
        if (flag) {
            this.setState({dateOfBirth: selectedDOBDate})
        }
        this.setState({modalVisible: visible});
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
                        <TouchableOpacity style={{marginLeft: 16, width: 50}}
                                          onPress={() =>
                                              this.props.navigation.goBack()
                                          }>
                            <Image
                                style={{height: hp(dimen.dim_h20), width: wp(dimen.dim_w20)}}
                                resizeMode={'contain'}
                                source={require('../../assets/back_icon.png')}/>
                        </TouchableOpacity>

                        <View style={{flex: 1}}/>
                        <View>
                            <TouchableOpacity style={{marginRight: 16, width: 50}}
                                              onPress={() =>
                                                  this.props.navigation.navigate('LoginScreen')
                                              }>
                                <Text style={{
                                    color: themeStyle.THEME_COLOR,
                                    fontSize: FontSize.getSize(16),
                                    textAlign: 'right'
                                }}>Skip</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <Image
                        style={{
                            height: hp(dimen.dim_h50),
                            width: wp(dimen.dim_w60),
                            alignSelf: 'center',
                            marginTop: hp(dimen.dim_h150)
                        }}
                        resizeMode={'contain'}
                        source={require('../../assets/birthday_icon.png')}/>

                    <Text style={{
                        color: themeStyle.DARK_BLACK_TEXT_COLOR,
                        fontSize: FontSize.getSize(20),
                        textAlign: 'center',
                        marginTop: hp(dimen.dim_h40)
                    }}>What is your date of birth?</Text>


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
                            <TouchableOpacity style={{
                                marginLeft: 15,
                                flex: 1,
                                alignContent: 'center',
                                justifyContent: 'center',
                                alignSelf: 'center',
                            }}
                                              onPress={() =>
                                                  this.setState({modalVisible: true})
                                              }>
                                <Text style={{
                                    fontSize: FontSize.getSize(12),
                                    color: this.state.dateOfBirth !== '' ? themeStyle.DARK_BLACK_TEXT_COLOR : themeStyle.PLACEHODER_COLOR,
                                }}>
                                    {this.state.dateOfBirth !== '' ? this.state.dateOfBirth : 'DD / MM / YYYY'}
                                </Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                marginLeft: 15,
                                alignContent: 'center',
                                justifyContent: 'center',
                                alignSelf: 'center',
                            }}
                                              onPress={() =>
                                                  this.setState({modalVisible: true})
                                              }>
                                <Image
                                    style={{
                                        height: hp(dimen.dim_h20),
                                        width: wp(dimen.dim_w20),
                                        marginLeft: wp(dimen.dim_w15),
                                        marginRight: wp(dimen.dim_w15)
                                    }}
                                    resizeMode={'contain'}
                                    source={require('../../assets/calendar_icon.png')}/>
                            </TouchableOpacity>
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
                                              this.props.navigation.navigate('ProfilePicScreen')
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

                {Platform.OS === 'ios' ? <Modal
                    animationType='fade'
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.setModalVisible(false, false)}
                >
                    <View style={[styles.container, styles.modalBackgroundStyle]}>
                        <View style={{flex: 1}}/>
                        <View style={{
                            backgroundColor: '#fff',
                            height: 280
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignContent: 'center',
                                alignItems: 'center',
                                padding: 5
                            }}>
                                <Button title='Close'
                                        onPress={this.setModalVisible.bind(this, false, false)}/>
                                <Text style={{
                                    flex: 1,
                                    textAlign: 'center',
                                    color: themeStyle.DARK_GRAY_COLOR,
                                }}>Select date of birth</Text>
                                <Button title='Done'
                                        onPress={this.setModalVisible.bind(this, false, true)}/>
                            </View>


                            <DateTimePicker style={{bottom: 10, marginTop: 10}}
                                            testID="dateTimePicker"
                                            value={new Date()}
                                            mode={'date'}
                                            display="default"
                                            onChange={this.onChange}
                            />

                        </View>
                    </View>
                </Modal> : this.state.modalVisible ? <DateTimePicker style={{bottom: 10, marginTop: 10}}
                                                                     testID="dateTimePicker"
                                                                     value={new Date()}
                                                                     mode={'date'}
                                                                     display="default"
                                                                     onChange={this.onChange}
                /> : null}
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

const styles = {
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        width: '100%',
        height: '100%'
    },
    modalBackgroundStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
};

export default DOBScreen;
