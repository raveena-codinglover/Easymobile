/**
 * class store important keys and data object
 */

import {Dimensions} from 'react-native';

export default class Config {


    /**
     * API Base url
     * @type {string}
     */

    static Base_url = '';
    static formBase_url = '';


    /**
     * API Action
     * @type {string}
     */
    static userLogin = this.Base_url + '';

    static appName = 'RatnaaFin';

    /**
     * App Version
     */
    static appVersion = 'Version 1.0';


    static getDeviceWidth() {
        return Math.round(Dimensions.get('window').width);
    }

    static getDeviceHeight() {
        return Math.round(Dimensions.get('window').height);
    }

}

