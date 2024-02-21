import * as SecureStore from 'expo-secure-store';

export const storage = {
    createItem: async function(key, value) {
        await SecureStore.setItemAsync(key, value);
    },
    getItem: async function(key) {
        let returnVal = await SecureStore.getItemAsync(key);
        return returnVal;
    },
    removeItem: async function(key) {
        await SecureStore.deleteItemAsync(key);
    },

}