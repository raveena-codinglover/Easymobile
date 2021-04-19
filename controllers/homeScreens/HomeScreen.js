import React, {Component} from 'react';
import {
    FlatList,
    Image,
    ImageBackground,
    Platform,
    SafeAreaView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen/index';
import dimen from '../styles/dimen';
import themeStyle from '../styles/theme.style';
import FontSize from '../styles/manageFontSize';


let userPicObject = [
    {
        image: require('../../assets/loan.png'),
        id: 1,
        title: 'Loans',
        dis:'Home Loan,Personal Loan & More.',
        color:'#6189A7'
    },
    {
        image: require('../../assets/protection.png'),
        id: 2,
        title: 'Protection',
        dis:'Life Insurance,Health Insurance & More.',
        color:'#637AAF'
    },
    {
        image: require('../../assets/elite_service.png'),
        id: 3,
        title: 'Elite Services',
        dis:'Life Insurance,Health Insurance & More.',
        color:'#9888B3'
    },
]

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

export class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isProgress: false,
            selectHome: true,
            selectSearch:false
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
                marginLeft: wp(dimen.dim_w5),
                marginRight: wp(dimen.dim_w5),
                backgroundColor:'#fff',
                height: hp(dimen.dim_h85),
                borderRadius: hp(dimen.dim_h85) / 2,
                overflow:'hidden',
            }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#fff',
                        height: hp(dimen.dim_h85),
                        borderRadius: hp(dimen.dim_h85) / 2,
                    }}
                    onPress={() =>
                        console.log('h')
                    }>
                    <View style={{
                        height: hp(dimen.dim_h85),
                        flexDirection:'row',
                        marginRight: wp(dimen.dim_w100)
                    }}>
                        <View style={{
                            backgroundColor:'#E6FEFF',
                            width: wp(dimen.dim_w65),
                            height: hp(dimen.dim_h65),
                            justifyContent:'center',
                            overflow:'hidden',
                            borderRadius: hp(dimen.dim_h65) / 2,
                            marginLeft: wp(dimen.dim_w10),
                            marginTop: hp(dimen.dim_h10)
                        }}>
                            <Image style={{
                                alignSelf:'center',
                                width: wp(dimen.dim_w34),
                                height: hp(dimen.dim_h34),
                            }}
                                resizeMode={'contain'}
                                source={item.image}/>
                        </View>


                         <View style={{
                             marginTop: hp(dimen.dim_h5),
                             marginLeft: wp(dimen.dim_w20),
                             marginBottom: hp(dimen.dim_h10),
                             justifyContent:'center'
                         }}>
                             <Text numberOfLines={1} style={{
                                 color: themeStyle.DARK_BLACK_TEXT_COLOR,
                                 fontSize: FontSize.getSize(14),
                             }}>{item.title}</Text>

                             <Text numberOfLines={2} style={{
                                 color: themeStyle.DARK_GRAY_COLOR,
                                 fontSize: FontSize.getSize(11),
                                 marginTop: hp(dimen.dim_h5),
                             }}>{item.dis}</Text>
                         </View>

                        <Image
                            style={{
                                height: hp(dimen.dim_h12),
                                width: wp(dimen.dim_w8),
                                marginLeft: wp(dimen.dim_w10),
                                marginRight: wp(dimen.dim_w10),
                                alignSelf:'center'
                            }}
                            resizeMode={'contain'}
                            source={require('../../assets/right_back.png')}/>


                    </View>

                </TouchableOpacity>
            </View>
        );
    };

    renderSeparator = () => (
        <View
            style={{
                height: 15,
            }}
        />
    );

    render() {
        return (
            <View style={{flex: 1, backgroundColor: themeStyle.OFF_WHITE_COLOR}}>
                <View style={{backgroundColor: themeStyle.THEME_COLOR, height:60}}></View>

                <SafeAreaView/>
                <View style={{
                    flexDirection:'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent:'center',
                    backgroundColor: themeStyle.THEME_COLOR
                }}>
                    <View style={{marginLeft: 16}}>
                        <Text style={{
                            color: themeStyle.WHITE_BG_COLOR,
                            fontSize: FontSize.getSize(20),
                            textAlign:'left'
                        }}>Welcome to,</Text>

                        <Text style={{
                            color: themeStyle.WHITE_BG_COLOR,
                            fontSize: FontSize.getSize(30),
                            textAlign:'left'
                        }}>Ratnaafin</Text>
                    </View>

                    <View style={{flex:1}}></View>
                    <View>
                        <TouchableOpacity style={{marginRight: 16, width: 50}}
                                          onPress={() =>
                                              this.props.navigation.navigate('ProfileScreen')
                                          }>
                            <Image
                                style={{
                                    height: hp(dimen.dim_h47),
                                    width: wp(dimen.dim_w47),
                                    alignSelf:'center',
                                }}
                                resizeMode={'contain'}
                                source={require('../../assets/pic9.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    backgroundColor: themeStyle.THEME_COLOR,
                    height: hp(dimen.dim_h60),
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20
                }}>
                </View>

                <View style = {{
                    marginTop: - hp(dimen.dim_h120),
                    height: hp(dimen.dim_h176),
                    // marginLeft: 10,
                    // marginRight: 10,
                }}>

                <FlatList style={{marginRight: 10}}
                          contentContainerStyle = {{paddingLeft: 10,paddingRight:10}}
                          contentContainerStyle = {{paddingBottom: 10,paddingTop:10}}
                          data={userPicObject}
                          showsHorizontalScrollIndicator={false}
                          keyExtractor={(item, index) => item.key}
                          renderItem={({item}) => this.itemTopList(item)}
                          //horizontal={true}
                />
                </View>

                {/*<View style={{flex:1 }}>
                    <View style={{
                        flexDirection:'row',
                        marginLeft: 20,
                        marginRight: 10,
                        marginTop:hp(dimen.dim_h30),
                        alignContent:'center',
                        alignItems:'center'
                    }}>
                        <Text style={{
                            color: themeStyle.DARK_BLACK_TEXT_COLOR,
                            fontSize: FontSize.getSize(22),
                            flex:1
                        }}>Core products</Text>

                        <TouchableOpacity style={{marginRight: 16}}
                                          onPress={() =>
                                              this.props.navigation.navigate('ProductListScreen')
                                          }>
                            <Text style={{
                                color: themeStyle.THEME_COLOR,
                                fontSize: FontSize.getSize(14),
                                textAlign:'right'
                            }}>View all</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{marginLeft: 12, marginRight: 12, marginTop: 15, marginBottom:50}}>
                        <FlatList
                            data={listObject}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => item.key}
                            renderItem={({item}) => this.itemList(item)}
                            ItemSeparatorComponent={this.renderSeparator}
                        />
                    </View> 

                        </View>*/}

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
                            console.log('click')
                        }>
                    <View style={{alignItems:'center', alignContent:'center', justifyContent:'center', alignSelf:'center', marginRight:35}}>

                        <Image style={{
                            width: wp(dimen.dim_w20),
                            height: hp(dimen.dim_h20),
                        }}
                               resizeMode={'contain'}
                               source={require('../../assets/home_icon.png')}/>

                        <Text style={{
                            fontSize: FontSize.getSize(9),
                            textAlign:'center',
                            color: '#fff'
                        }}>Home</Text>

                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            // this.selectTapScreen(false)
                            this.props.navigation.navigate('SearchScreen')
                        }>
                    <View style={{alignItems:'center', alignContent:'center', justifyContent:'center', alignSelf:'center'}}>

                        <Image style={{
                            width: wp(dimen.dim_w20),
                            height: hp(dimen.dim_h20),
                            tintColor: themeStyle.DISABLE_COLOR
                        }}
                               resizeMode={'contain'}
                               source={require('../../assets/search_icon.png')}/>

                        <Text style={{
                            color: themeStyle.DISABLE_COLOR,
                            fontSize: FontSize.getSize(9),
                            textAlign:'center',
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

export default HomeScreen;
