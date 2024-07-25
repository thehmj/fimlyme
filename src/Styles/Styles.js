
import { StyleSheet, } from 'react-native';
import { Colors, } from '../Utils/ImagesAndColors';
import { maxofWidth, minofHeight, minofWidth, relativeHeight, relativeWidth, responsiveFontSize, perHeight, perWidth } from '../Utils/ResponsiveScreenFunction';
export default Styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.Black,
        minHeight: perHeight(100),
        paddingBottom: relativeHeight(75),
        color: "white"
    },
    //Home

    section1: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        // marginTop: "10%",
        padding: "4%",
        alignItems: "center"
    },
    s1text1: {
        color: Colors.black7,
        fontSize: responsiveFontSize(16.6),
    },

    section2: {
        marginVertical: "7%",
        paddingHorizontal: "5%",
        height: relativeHeight(40),


    },
    TextInputs2: {
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 20,
        flexDirection: "row",
        // justifyContent:"center",
        alignItems: "center",
        // height: "100%",
        backgroundColor: Colors.black2,
        columnGap: 10,
        color: Colors.grey,
    },

    s2search: {
        height: 20,
        width: 20,
    },

    BannerBoard: {
        // height: perHeight(35),
        width: perWidth(100),
        //  backgroundColor:"#000"
    },
    BannerBoardScroll: {
        marginVertical: 20,
        display: 'flex',
        flexDirection: "row",
    },
    Banner: {
        width: relativeWidth(240),
        height: relativeHeight(240),
        backgroundColor: Colors.Black2,
        //   borderWidth:1 ,
        margin: 10,
        borderRadius: maxofWidth(10),
    },
    productsBoard: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    text1: {
        // color: Colors.black,
        color: Colors.whileO,
        marginHorizontal: relativeWidth(20),
        fontSize: perWidth(7),

    },



    // Card.jsx

    CardDiv: {
        alignItems: "center",
        paddingVertical: relativeWidth(10)
        // borderRadius:maxofWidth(20),
    },
    CardImage: {
        height: relativeHeight(180),
        width: relativeWidth(220),
        borderRadius: maxofWidth(10),
    },
    MovieName: {
        fontSize: responsiveFontSize(10),
        color: Colors.White,
        fontWeight: "bold",
        paddingHorizontal: relativeWidth(10),
        //   paddingVertical:relativeHeight(2), 

    },
    MovieImdb: {
        fontSize: responsiveFontSize(10),
        color: Colors.White,
        fontWeight: "normal",

        paddingHorizontal: relativeWidth(10),
        paddingVertical: relativeHeight(2),
    },


    // Create.jsx 
    dropdownButtonStyle: {
        // width: "80%",
        height: relativeHeight(50),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 20,
        flexDirection: "row",
        backgroundColor: Colors.black2,
    },
    dropdownButtonTxtStyle: {
        flex: 1,
        color: Colors.grey,
    },
    dropdownButtonArrowStyle: {
        fontSize: responsiveFontSize(28),
    },
    dropdownButtonIconStyle: {
        fontSize: responsiveFontSize(28),
        marginRight: relativeWidth(8),
    },
    dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: maxofWidth(8),
    },
    dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: relativeWidth(12),
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: relativeHeight(8),
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: responsiveFontSize(18),
        fontWeight: '500',
        color: '#151E26',
    },
    dropdownItemIconStyle: {
        fontSize: responsiveFontSize(28),
        marginRight: relativeWidth(8),
    },
    Button: {
        width: perWidth(60),
        height: relativeHeight(45),
        borderRadius: relativeWidth(30),
        backgroundColor: "#ff0000",
        alignSelf: "center",
        margin: relativeHeight(40),
        justifyContent: "center",
        alignItems: "center"
    },
    ButtonText:{
        fontSize: responsiveFontSize(20), 
        fontFamily: "cursive", fontWeight: "900" 
    },
    //Profile
    IconStyle: {
        // height:relativeHeight(30),
        aspectRatio: 1,
        width: relativeWidth(120)
    },
})


