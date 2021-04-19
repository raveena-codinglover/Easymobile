import React, {Component} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TouchableOpacity, Platform,
    TextInput, Image,
    Keyboard, ScrollView, Alert, FlatList
} from 'react-native';
import themeStyle from '../styles/theme.style'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import dimen from '../styles/dimen';
import FontSize from "../styles/manageFontSize";
import Config from '../config/Config';
import {BusyIndicator} from '../utils/busy-indicator';
import CustomAlert from '../utils/CustomAlert';

let userPicObject = [
    {
        image: require('../../assets/pic1.png'),
        id: 1
    },
    {
        image: require('../../assets/pic2.png'),
        id: 2
    },
    {
        image: require('../../assets/pic3.png'),
        id: 3
    },
    {
        image: require('../../assets/pic4.png'),
        id: 4
    },
    {
        image: require('../../assets/pic5.png'),
        id: 5
    },
    {
        image: require('../../assets/pic7.png'),
        id: 6
    },
    {
        image: require('../../assets/pic8.png'),
        id: 7
    },
    {
        image: require('../../assets/pic9.png'),
        id: 8
    },
    {
        image: require('../../assets/selectpic.png'),
        id: 9
    }
]



export class ProfilePicScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isProgress: false,
        };
    }


    /**
     * onSubmit button action
     */

    onSubmit() {
        const {fullName, countryCode} = this.state;
        if (fullName === '') {
            CustomAlert.setAlertView(Config.appName, 'Please enter your full name');
            return;
        }
        Keyboard.dismiss();

        this.setState({isProgress: true});

        // this.props.navigation.navigate('')
    }

    /**
     * itemList
     * @param item
     * @returns {Promise<void>}
     */

    itemList = (item) => {
        return(
            <TouchableOpacity
                style={{marginLeft:wp(dimen.dim_w10), marginRight:wp(dimen.dim_w15), marginBottom: hp(dimen.dim_h32)}}
                onPress={() =>
                    console.log('h')
                }>
                <Image
                    style={{
                        height: hp(dimen.dim_h80),
                        width: wp(dimen.dim_w80),
                    }}
                    resizeMode={'contain'}
                    source={item.image}/>
            </TouchableOpacity>
        );
    };

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

                    <Text style={{
                        color: themeStyle.DARK_BLACK_TEXT_COLOR,
                        fontSize: FontSize.getSize(20),
                        textAlign: 'center',
                        marginTop: hp(dimen.dim_h60)
                    }}>You are almost there</Text>

                    <Text style={{
                        color: themeStyle.DARK_GRAY_COLOR,
                        fontSize: FontSize.getSize(13),
                        textAlign: 'center',
                        marginTop: hp(dimen.dim_h10)
                    }}>Select avatar for profile or add profile photo</Text>


                    <View style={{
                        marginLeft: wp(dimen.dim_w30),
                        marginRight: wp(dimen.dim_w30),
                        flexDirection: 'row',
                        marginTop: hp(dimen.dim_h40)
                    }}>

                        <FlatList style = {{
                            marginTop: hp(dimen.dim_h20),
                            marginBottom: 10
                        }}
                                  data={userPicObject}
                                  showsHorizontalScrollIndicator={false}
                                  keyExtractor={(item, index) => item.key}
                                  renderItem={({item}) => this.itemList(item)}
                                  numColumns={3}
                        />

                    </View>




                    <View style={{
                        marginLeft: wp(dimen.dim_w30),
                        marginRight: wp(dimen.dim_w30),
                        marginTop: hp(dimen.dim_h20),
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

export default ProfilePicScreen;
