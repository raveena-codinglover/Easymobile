import React, {Component} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Dimensions,
    FlatList,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    Image, Platform
} from 'react-native';
import themeStyle from '../styles/theme.style'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import dimen from '../styles/dimen';
import FontSize from "../styles/manageFontSize";
import PageControl from 'react-native-page-control';
import fontStyle from "../styles/fontStyle";

let deviceWidth = Dimensions.get('window').width;

const dataObject = [
    {
        image: require('../../assets/introimageone.png'),
        id: 1
    },
    {
        image: require('../../assets/introimagetwo.png'),
        id: 2
    },
    {
        image: require('../../assets/introimagethree.png'),
        id: 3
    }
];

export class IntroScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            setIndex: 0
        };

        this.handleViewableItemsChanged = this.handleViewableItemsChanged.bind(this);
        this.viewabilityConfig = {viewAreaCoveragePercentThreshold: 50};
    }

    /**
     * getPageNumber
     * @param info
     */

    handleViewableItemsChanged(info) {
        let getIndex = info.changed[0].index;
        this.setState({currentIndex: getIndex}, () => {
            console.log(getIndex)
        })
    }

    setPageIndex() {
        let index = this.state.setIndex+1;
        this.pages.scrollToIndex({animated: true, index: index});

        this.setState({setIndex: index===2?0:index})
    }

    /**
     * FlatList itemList
     * @param item
     * @returns {*}
     */

    itemList = (item) => {
        return (
            <View style={{width: deviceWidth, backgroundColor: themeStyle.OFF_WHITE_COLOR}}>
                <View style={{flex: 2, backgroundColor: themeStyle.OFF_WHITE_COLOR, alignSelf: 'center'}}>
                    <Image style={{
                        width: deviceWidth - 30,
                        height: 250,
                        marginTop: hp(dimen.dim_h80)
                    }}
                           resizeMode={'contain'}
                           source={item.image}/>
                </View>

                <View style={{flex: 2, backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
                    <Text style={{
                        fontSize: FontSize.getSize(22),
                        textAlign: 'center',
                        marginTop: hp(dimen.dim_h60)
                    }}>
                        Loans
                    </Text>

                    <Text style={{
                        fontSize: FontSize.getSize(14),
                        textAlign: 'center',
                        marginTop: hp(dimen.dim_h20),
                        marginLeft: wp(dimen.dim_w30),
                        marginRight: wp(dimen.dim_w30),
                        color: themeStyle.DARK_GRAY_COLOR,
                        lineHeight: 30,
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </Text>
                </View>
            </View>
        );
    };

    render() {

        let statusbarColor = (this.state.currentIndex === 2) ? "#edf8fa" : "#2E7171";
        return (
            <View style={{
                flex: 1, backgroundColor: themeStyle.OFF_WHITE_COLOR
            }}>
                <SafeAreaView/>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginTop: hp(dimen.dim_h10)
                }}>
                    <View style={{flex: 1}}/>
                    <View>
                        <TouchableOpacity style={{marginRight: 16}}
                                          onPress={() =>
                                              this.props.navigation.navigate('LoginScreen')
                                          }>
                            <Text style={{
                                color: themeStyle.THEME_COLOR,
                                fontSize: FontSize.getSize(16)
                            }}>Skip</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <FlatList
                    ref={ref => {
                        this.pages = ref;
                    }}
                    style={{backgroundColor: themeStyle.WHITE_BG_COLOR, width: deviceWidth}}
                    data={dataObject}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    onViewableItemsChanged={this.handleViewableItemsChanged}
                    viewabilityConfig={this.viewabilityConfig}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({item}) => this.itemList(item)}
                    // scrollEnabled={false}
                    initialScrollIndex={this.state.setIndex}

                />
                <View style={{position: 'absolute', left: 0, right: 0, bottom: 40, height: hp(dimen.dim_h48)}}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignContent: 'center',
                    }}>
                        <PageControl style={{
                            marginLeft: wp(dimen.dim_w20),
                        }}
                                     numberOfPages={dataObject.length}
                                     currentPage={this.state.currentIndex}
                                     hidesForSinglePage
                                     pageIndicatorTintColor='#D3D7CF'
                                     currentPageIndicatorTintColor={'#707070'}
                                     indicatorStyle={{borderRadius: 5}}
                                     currentIndicatorStyle={{borderRadius: 5}}
                                     indicatorSize={{width: 10, height: 10}}
                        />
                        <View style={{flex: 1}}/>
                        <View>
                            {
                                this.state.currentIndex === 2 ?

                                    <TouchableOpacity style={{
                                        backgroundColor: themeStyle.THEME_COLOR,
                                        width: wp(dimen.dim_w150),
                                        height: hp(dimen.dim_h48),
                                        borderRadius: hp(dimen.dim_h48) / 2,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginRight: wp(dimen.dim_w15),
                                        shadowColor: '#5BC6B8',
                                        shadowOpacity: 0.5,
                                        shadowRadius: 16,
                                        shadowOffset: {
                                            height: 6,
                                            width: 2
                                        }
                                    }} onPress={() =>
                                        this.props.navigation.navigate('LoginScreen')
                                    }>

                                        <Text style={{
                                            color: '#fff',
                                            fontSize: FontSize.getSize(14),
                                            textAlign: 'center',
                                        }}> LOGIN </Text>

                                        <Image
                                            style={{
                                                height: 20,
                                                width: 20,
                                                marginLeft: wp(dimen.dim_w6),
                                            }}
                                            resizeMode={'contain'}
                                            source={require('../../assets/arrow-righ.png')}/>

                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity
                                        onPress={() =>
                                            this.setPageIndex()
                                        }>
                                        <View style={{
                                            alignSelf: 'flex-end',
                                            backgroundColor: themeStyle.THEME_COLOR,
                                            width: 50,
                                            height: 50,
                                            borderRadius: 50 / 2,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginRight: wp(dimen.dim_w15),
                                            shadowColor: '#5BC6B8',
                                            shadowOpacity: 0.5,
                                            shadowRadius: 16,
                                            shadowOffset: {
                                                height: 6,
                                                width: 2
                                            }
                                        }}>
                                            <Image style={{
                                                height: 20,
                                                width: 20
                                            }}
                                                   resizeMode={'contain'}
                                                   source={require('../../assets/arrow-righ.png')}/>
                                        </View>
                                    </TouchableOpacity>
                            }

                        </View>
                    </View>
                </View>
            </View>
        );
    }

    async componentDidMount() {
        if (Platform.OS === 'android') {
            this._navListener = this.props.navigation.addListener('didFocus', () => {
                StatusBar.setTranslucent(false);
                StatusBar.setBackgroundColor(themeStyle.OFF_WHITE_COLOR);
                StatusBar.setBarStyle('dark-content');
            });
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android')
            this._navListener.remove();
    }
}

export default IntroScreen;
