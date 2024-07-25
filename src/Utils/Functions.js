import AsyncStorage from "@react-native-async-storage/async-storage"
import Data from "../Confidential/Data";
import RapidApi from '../Services/Services'
export const getData = async () => {
    return JSON.parse(await AsyncStorage.getItem('data') ?? null);
}


export const setData = async (value) => {
    try {
        const data = await RapidApi.MovieData(value);
        // console.log(data);
        await AsyncStorage.setItem('data', JSON.stringify(data));
        return data;
    } catch (error) {
        console.log("hey error", error.message);
    }
}