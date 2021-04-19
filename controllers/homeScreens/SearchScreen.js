import React, {Component} from 'react';
import {
    FlatList,
    Image,
    ImageBackground,
    Platform,
    SafeAreaView,
    StatusBar,
    Text, TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen/index';
import dimen from '../styles/dimen';
import themeStyle from '../styles/theme.style';
import FontSize from '../styles/manageFontSize';


let listObject = [
    {
        image: require('../../assets/home_loan.png'),
        id: 1,
        title: 'Retail Home Loan',
        dis:'HLorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
        image: require('../../assets/mortgage.png'),
        id: 2,
        title: 'Retail LAP',
        dis:'HLorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
        image: require('../../assets/bank.png'),
        id: 3,
        title: 'Government Subsidy',
        dis:'HLorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
        image: require('../../assets/shop.png'),
        id: 4,
        title: 'SME Loan',
        dis:'HLorem ipsum dolor sit amet, consectetur adipiscing',
    },
]

export class SearchScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isProgress: false,
            searchText: '',
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
     * itemTopList
     * @param item
     * @returns {Promise<void>}
     */

    itemTopList = (item) => {
        return(
            <TouchableOpacity
                style={{
                    marginLeft:wp(dimen.dim_w10),
                    marginRight:wp(dimen.dim_w5),
                    borderRadius: 20,
                    backgroundColor: item.color,
                    height: hp(dimen.dim_h176),
                    width: wp(dimen.dim_w155),
                    shadowColor: '#5BC6B8',
                    shadowOpacity: 0.5,
                    shadowRadius: 16,
                    shadowOffset: {
                        height: 6,
                        width: 2
                    }
                }}
                onPress={() =>
                    console.log('h')
                }>
                <View style={{
                    marginLeft: wp(dimen.dim_w10),
                    marginTop: hp(dimen.dim_h15),
                    marginRight: wp(dimen.dim_w10),
                }}>
                    <Text style={{
                        color: themeStyle.WHITE_BG_COLOR,
                        fontSize: FontSize.getSize(18),
                        textAlign:'left'
                    }}>{item.title}</Text>

                    <Text style={{
                        color: themeStyle.WHITE_BG_COLOR,
                        fontSize: FontSize.getSize(11),
                        textAlign:'left',
                        marginTop: hp(dimen.dim_h5)
                    }}>{item.dis}</Text>

                    <Image
                        style={{
                            height: hp(dimen.dim_h70),
                            width: wp(dimen.dim_w100),
                            alignSelf: 'flex-end',
                            marginRight: wp(dimen.dim_w5),
                            marginTop: hp(dimen.dim_h15)
                        }}
                        resizeMode={'contain'}
                        source={item.image}/>
                </View>

            </TouchableOpacity>
        );
    };

    /**
     * itemList
     * @param item
     * @returns {Promise<void>}
     */

    itemList = (item) => {
        return(
            <View style={{
                marginLeft: wp(dimen.dim_w10),
                marginRight: wp(dimen.dim_w10),
                height: hp(dimen.dim_h30),
                overflow:'hidden',
            }}>
                <TouchableOpacity
                    style={{
                        height: hp(dimen.dim_h30),
                        justifyContent:'center'
                    }}
                    onPress={() =>
                        console.log('h')
                    }>
                    <View style={{
                        flexDirection:'row',
                    }}>
                        <Image style={{
                            alignSelf:'center',
                            width: wp(dimen.dim_w20),
                            height: hp(dimen.dim_h20),
                            tintColor: '#A0A0A0'
                        }}
                               resizeMode={'contain'}
                               source={require('../../assets/search_icon.png')}/>

                        <Text numberOfLines={1} style={{
                            color: themeStyle.DARK_BLACK_TEXT_COLOR,
                            fontSize: FontSize.getSize(14),
                            marginLeft: 12
                        }}>{item.title}</Text>

                    </View>

                </TouchableOpacity>
            </View>
        );
    };

    renderSeparator = () => (
        <View
            style={{
                height: 1,
                backgroundColor: '#EFF0F2',
                marginLeft:15,
                marginRight:15,
                marginTop:5,
                marginBottom:5
            }}
        />
    );

    selectTapScreen(homeFlag){
        this.setState({selectHome: homeFlag})
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
                            Search
                        </Text>
                    </View>
                </View>

                <View style={{
                    backgroundColor: themeStyle.THEME_COLOR,
                    height: hp(dimen.dim_h100),
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20
                }}>

                    <View style={{
                        backgroundColor: themeStyle.LIGHT_BG_COLOR,
                        height: hp(dimen.dim_h48),
                        marginTop: hp(dimen.dim_h35),
                        borderRadius: hp(dimen.dim_h48) / 2,
                        marginLeft:16,
                        marginRight:16,
                        flexDirection:'row',
                        alignItems:'center'
                    }}>
                        <Image
                            style={{
                                height: hp(dimen.dim_h25),
                                width: wp(dimen.dim_w25),
                                tintColor:'#A0A0A0',
                                marginLeft: 15,
                            }}
                            resizeMode={'contain'}
                            source={require('../../assets/search_icon.png')}/>

                        <TextInput
                            style={{
                                fontSize: FontSize.getSize(15),
                                marginLeft: 15,
                                marginRight: 15,
                                flex:1
                            }}
                            placeholder={'Search Here'}
                            onChangeText={text => this.setState({searchText: text})}
                            value={this.state.searchText}
                            multiline={false}
                            numberOfLines={1}
                            placeholderTextColor={themeStyle.PLACEHOLDER_COLOR}
                            autoCorrect={false}
                        />
                    </View>
                </View>

                <View style={{flex:1 }}>
                    <View style={{marginLeft: 12, marginRight: 12, marginTop: 40, marginBottom:50}}>
                        {
                            this.state.searchText !== '' ?
                                <FlatList
                                    data={listObject}
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={(item, index) => item.key}
                                    renderItem={({item}) => this.itemList(item)}
                                    ItemSeparatorComponent={this.renderSeparator}
                                /> : null
                        }

                    </View>

                </View>

                <View style={{
                    height: 50,
                    width: 144,
                    backgroundColor: themeStyle.THEME_COLOR,
                    alignSelf:'center',
                    position:'absolute',
                    bottom:40,
                    borderRadius: 25,
                    flexDirection:'row',
                    alignItems:'center',
                    alignContent:'center',
                    justifyContent:'center',
                    shadowColor: '#5BC6B8',
                    shadowOpacity: 0.5,
                    shadowRadius: 16,
                    shadowOffset: {
                        height: 6,
                        width: 2
                    }
                }}>
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.goBack()
                        }>
                        <View style={{alignItems:'center', alignContent:'center', justifyContent:'center', alignSelf:'center', marginRight:35}}>

                            <Image style={{
                                width: wp(dimen.dim_w20),
                                height: hp(dimen.dim_h20),
                                tintColor: themeStyle.DISABLE_COLOR,
                            }}
                                   resizeMode={'contain'}
                                   source={require('../../assets/home_icon.png')}/>

                            <Text style={{
                                color: themeStyle.DISABLE_COLOR,
                                fontSize: FontSize.getSize(9),
                                textAlign:'center'
                            }}>Home</Text>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            console.log('click')
                        }>
                        <View style={{alignItems:'center', alignContent:'center', justifyContent:'center', alignSelf:'center'}}>

                            <Image style={{
                                width: wp(dimen.dim_w20),
                                height: hp(dimen.dim_h20),
                            }}
                                   resizeMode={'contain'}
                                   source={require('../../assets/search_icon.png')}/>

                            <Text style={{
                                fontSize: FontSize.getSize(9),
                                textAlign:'center',
                                color: '#fff'
                            }}>Search</Text>

                        </View>
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
    viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
};

export default SearchScreen;
