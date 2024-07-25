import { Image, Text, View } from "react-native";
import { Colors, Images } from "../Utils/ImagesAndColors";
import Styles from "../Styles/Styles";
import { relativeHeight, relativeWidth, responsiveFontSize } from "../Utils/ResponsiveScreenFunction";
import Data from "../Confidential/Data";

const Profile = () => {
    return (
        <View style={Styles.container} >
            <View style={{ flexDirection: "row", alignItems: "center", margin: relativeWidth(30) }}>
                <Image style={Styles.IconStyle} resizeMode="contain" source={Images.ProfileIcon} />
                <View style={{ marginHorizontal: relativeWidth(50), justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: Colors.White, fontSize: responsiveFontSize(20) }}>{Data.Name}</Text>
                    <Text style={{ color: Colors.White, fontSize: responsiveFontSize(10), marginTop: relativeHeight(7) }}>Free Trial</Text>
                </View>
            </View>
            <View style={{ backgroundColor: "#900000", width: "90%", alignSelf: "center", height: relativeHeight(60), borderRadius: relativeWidth(10) }}>
                <View style={{ margin: relativeWidth(8), justifyContent: "center", }}>
                    <Text style={{ color: Colors.White, fontSize: responsiveFontSize(12), fontWeight: "900", }}>⚠️ Alert</Text>
                    <Text style={{ color: Colors.White, fontSize: responsiveFontSize(7), marginTop: relativeHeight(4) }}>This is Free Trial Account Using Rapid API , Which has Limited free API calls nearly 50-60</Text>
                </View>
            </View>

            <View style={{ backgroundColor: "#00009085", width: "90%", alignSelf: "center", height: relativeHeight(40), borderRadius: relativeWidth(10), marginVertical: relativeHeight(30) }}>
                <View style={{ margin: relativeWidth(8), justifyContent: "center", }}>
                    <Text style={{ color: Colors.White, fontSize: responsiveFontSize(10), marginTop: relativeHeight(4) }}>🔑 {Data["x-rapidapi-key"]}</Text>
                </View>
            </View>
            <View style={{ position:"absolute",bottom:relativeHeight(100),alignSelf:"center" }}>
                <Text style={{ color: Colors.White, fontSize: responsiveFontSize(10), marginTop: relativeHeight(4) }}>@thehmj/filmyme</Text>
            </View>

        </View>
    )
}
export default Profile;