import { View, Image, Text, TouchableOpacity } from 'react-native';
import Styles from '../Styles/Styles';
import { Images } from '../Utils/ImagesAndColors';
import { memo } from 'react';
const Card = ({ item }) => {
    return (
        <TouchableOpacity key={item.imdbid} style={Styles.Banner} onPress={() => { }}>
            <View style={Styles.CardDiv}>
                <Image resizeMode='contain' style={Styles.CardImage} source={item.imageurl[0] ? { uri: item.imageurl[0] } : Images.NullIcon} />
            </View>
            <Text style={Styles.MovieName}>{item.title}</Text>
            <Text style={Styles.MovieImdb}>{item.imdbrating}</Text>

        </TouchableOpacity>
    )
}
export default memo(Card);