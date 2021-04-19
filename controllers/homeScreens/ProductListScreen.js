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
    {
        image: require('../../assets/personal_loan.png'),
        id: 5,
        title: 'Personal Loan',
        dis:'HLorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
        image: require('../../assets/motor_insurance.png'),
        id: 6,
        title: 'Motor Insurance',
        dis:'HLorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
        image: require('../../assets/business_loan.png'),
        id: 7,
        title: 'Business Loan',
        dis:'HLorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
        image: require('../../assets/construction_finance.png'),
        id: 8,
        title: 'Construction Finance',
        dis:'HLorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
        image: require('../../assets/fire_insurance.png'),
        id: 9,
        title: 'Fire Insurance',
        dis:'HLorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
        image: require('../../assets/life_insurance.png'),
        id: 10,
        title: 'Life Insurance',
        dis:'HLorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
        image: require('../../assets/health_insurance.png'),
        id: 11,
        title: 'Health Insurance',
        dis:'HLorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
        image: require('../../assets/liability_insurance.png'),
        id: 12,
        title: 'Liability Insurance',
        dis:'HLorem ipsum dolor sit amet, consectetur adipiscing',
    },
]

export class ProductListScreen extends Component {

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
                marginLeft: wp(dimen.dim_w10),
                marginRight: wp(dimen.dim_w10),
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
                            marginLeft: wp(dimen.dim_w30),
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
                                marginRight: wp(dimen.dim_w5),
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
                            Core Products
                        </Text>
                    </View>
                </View>

                <View style={{
                    backgroundColor: themeStyle.THEME_COLOR,
                    height: hp(dimen.dim_h20),
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20
                }}>
                </View>

                    <View style={{marginLeft: 12, marginRight: 12, marginTop: 25, flex:1, marginBottom: 20}}>
                        <FlatList
                            data={listObject}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => item.key}
                            renderItem={({item}) => this.itemList(item)}
                            ItemSeparatorComponent={this.renderSeparator}
                        />
                    </View>
            {/*<SafeAreaView/>*/}
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

export default ProductListScreen;
