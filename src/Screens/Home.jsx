import {
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    Alert,
} from 'react-native';
import { useEffect, useState } from 'react';
// import { AddColors, Icons } from '../Utils/Constants';
import Styles from '../Styles/Styles';
import CategoryCard from '../Components/Category';
import { Images } from '../Utils/ImagesAndColors';
import { getData, setData } from '../Utils/Functions';
import Data from '../Confidential/Data';
const HomePage = ({ navigation }) => {
    const [productData, SetProductData] = useState([]);

    const fetchData = async () => {
        try {
            let data = await getData();
            if (!data) {
               data = await setData({start_year: 2000,end_year: 2024,min_imdb: 8,max_imdb: 10,language: "hindi"});    
            }
            SetProductData(data?.results ?? []);
        } catch (error) {
           Alert.alert("Error",error.message);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (

        <View style={Styles.container} >
                <ScrollView nestedScrollEnabled={true}>
                {/* 36% */}
                <View style={Styles.header}>
                    <View style={Styles.section1}>
                        <Text style={Styles.s1text1}>Hey, {Data?.Name?.split(' ')[0]} 👋</Text>
                    </View>

                    {/* <View style={Styles.section2}>
                        <View style={Styles.TextInputs2}>
                            <Image style={Styles.s2search} source={Images.SearchIcon} />
                            <TextInput
                                style={Styles.TextInput}
                                placeholderTextColor={"#8891A5"}
                                placeholder={"Search Movies "}
                                onChange={(Text) => setSearch(Text)}
                                value={Search}
                            />
                        </View>
                    </View> */}
                </View>

                {/* Maximum of 50 values can be return by API */}
                
                <CategoryCard key={1} data={productData?.slice(0,10)} />
                <CategoryCard key={2} data={productData?.slice(11,20)} />
                <CategoryCard key={3} data={productData?.slice(21,30)} />
                <CategoryCard key={4} data={productData?.slice(31,40)} />
                <CategoryCard key={5} data={productData?.slice(41,50)} />



        </ScrollView>
            </View>
    )
}
export default HomePage; 