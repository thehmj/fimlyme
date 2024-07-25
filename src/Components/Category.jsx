import { ScrollView, Text, View } from "react-native";
import Styles from "../Styles/Styles";
import Card from "./Card";
import { memo } from "react";

const CategoryCard = ({ data }) => {
    return (
        <>
            {data.length > 0 && (<View style={Styles.BannerBoard}>
                <Text style={Styles.text1}>Recommended</Text>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    style={Styles.BannerBoardScroll}>
                    {
                        data.map((item) => (
                            <Card item={item} />
                        ))
                    }
                </ScrollView>
            </View>)
            }

        </>

    )
}
export default memo(CategoryCard);