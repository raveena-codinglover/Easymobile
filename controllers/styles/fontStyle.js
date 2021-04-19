import {Platform} from "react-native";

export default {
    "AvenirNextBold": Platform.OS === 'ios' ? 'AvenirNext-Bold' : 'AvenirNextLTPro-Bold',
    "AvenirNextDemiBold": Platform.OS === 'ios' ? 'AvenirNext-DemiBold' : 'AvenirNextLTPro-Demi',
    "AvenirNextRegular": Platform.OS === 'ios' ?'AvenirNext-Regular' : 'AvenirNextLTPro-Regular',

    "SanFranciscoDisplayRegular": 'SanFranciscoDisplay-Regular',
    "SanFranciscoTextBold": 'SanFranciscoText-Bold',
    "SanFranciscoTextMedium": 'SanFranciscoText-Medium',
    "SanFranciscoTextRegular": 'SanFranciscoText-Regular',
    "SanFranciscoTextSemibold": 'SanFranciscoText-Semibold',
}
