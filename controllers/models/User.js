import AsyncStorage from '@react-native-community/async-storage';

/**
 * used for storing and retrieving user data
 */
export default class User {

    static async store(user) {
        try {
            user.retrievedAt = new Date();
            await AsyncStorage.setItem('user', JSON.stringify(user));
        } catch (e) {
            console.log(e);
        }
    }

    static async retrieve() {
        try {
            const retrievedItem = await AsyncStorage.getItem('user');
            const item = JSON.parse(retrievedItem);
            return item != null ? Object.assign(new User, item) : null;
            //return Object.assign(new User, item);
        } catch (e) {
            console.log(e);
        }
    }

    static async clear() {
        try {
            await AsyncStorage.removeItem('user');
        } catch (e) {
            console.log(e);
        }
    }

}
