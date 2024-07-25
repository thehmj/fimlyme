import { ActivityIndicator, Alert, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import Styles from "../Styles/Styles";
import { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { perHeight, perWidth, relativeHeight, relativeWidth, responsiveFontSize } from "../Utils/ResponsiveScreenFunction";
import { setData } from "../Utils/Functions";
import { Colors } from "../Utils/ImagesAndColors";
const Create = ({ navigation }) => {

    const [State, SetState] = useState({
        start_year: "",
        end_year: "",
        min_imdb: "",
        max_imdb: "",
        language: "",
    })

    const [loading, SetLoading] = useState(false);



    const languages = [
        { name: "Hindi", value: "hindi" },
        { name: "English", value: "english" },
        // {name: "English",value:"english"},
    ];

    const CheckConstrain = async () => {
        try {
            SetLoading(true);
            const regex = new RegExp('^[0-9]+$');
            if (!State.end_year || !regex.test(State.end_year) || State.end_year?.length !== 4) {
                SetLoading(false);

                return Alert.alert("Enter Year Correctly in YYYY formate ");
            }
            if (!State.start_year || !regex.test(State.start_year) || State.start_year?.length !== 4) {
                SetLoading(false);

                return Alert.alert("Enter Year Correctly ");

            }
            if (!State.min_imdb || !regex.test(State.min_imdb) || Number(State.min_imdb) > 10) {
                SetLoading(false);

                return Alert.alert("Enter IMDB Correctly (1-10)");
            }
            if (!State.max_imdb || !regex.test(State.max_imdb) || Number(State.max_year) > 10) {
                SetLoading(false);
                return Alert.alert("Enter IMDB Correctly (1-10)");

            }

            if (!State.language) {
                SetLoading(false);
                return Alert.alert("Select Movie Language");

            }
            if (Number(State.min_imdb) > Number(State.max_imdb)) {
                SetLoading(false);
                return Alert.alert("Max IMDB should be greater than min IMDB");

            }

            await setData(State);
            ToastAndroid.show("Data Saved", ToastAndroid.SHORT);
            SetLoading(false);
            return navigation.navigate('Home');
        } catch (error) {
            SetLoading(false);
            Alert.alert('Error', error.message);
        }
    }
    return (

        <View style={Styles.container} >
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: relativeHeight(20) }}>
                <Text style={{ color: Colors.White, fontSize: responsiveFontSize(20), fontFamily: "cursive", fontWeight: "900" }} >
                    Set Parameters for Movie Data
                </Text>
            </View>
            <View style={{ justifyContent: "space-evenly", padding: relativeHeight(20), height: perHeight(60), }}>

                <TextInput
                    style={Styles.TextInputs2}
                    placeholderTextColor={"#8891A5"}
                    placeholder={"Enter Start Year (YYYY)"}
                    keyboardType="numeric"
                    maxLength={4}
                    onChangeText={(Text) => {
                        // if (Text.length === 4) {
                        SetState({ ...State, start_year: Text })
                        // }
                    }
                    }
                    value={State.start_year}
                />
                <TextInput
                    style={Styles.TextInputs2}
                    placeholderTextColor={"#8891A5"}
                    placeholder={"Enter End Year (YYYY)"}
                    keyboardType="numeric"
                    maxLength={4}
                    onChangeText={(Text) => {
                        // if (Text.length === 4) {
                        SetState({ ...State, end_year: Text })
                        // }
                    }
                    }
                    value={State.end_year}
                />

                <TextInput
                    style={Styles.TextInputs2}
                    placeholderTextColor={"#8891A5"}
                    placeholder={"Enter Min IMDB (0 - 10)"}
                    keyboardType="numeric"
                    maxLength={2}
                    onChangeText={(Text) => {
                        // if (Number(Text) < 11 && Number(Text) > 0) {
                        SetState({ ...State, min_imdb: Text })
                        // }
                    }
                    }
                    value={State.min_imdb}
                />

                <TextInput
                    style={Styles.TextInputs2}
                    placeholderTextColor={"#8891A5"}
                    placeholder={"Enter Max IMDB (1 - 10)"}
                    keyboardType="numeric"
                    maxLength={2}
                    onChangeText={(Text) => {
                        // if (Number(Text) < 11 ) {
                        SetState({ ...State, max_imdb: Text })
                        // }
                    }
                    }
                    value={State.max_imdb}
                />
                <SelectDropdown
                    data={languages}
                    onSelect={selectedItem => {
                        SetState({ ...State, language: selectedItem.value });
                    }}
                    renderButton={(selectedItem, isOpened) => {
                        return (
                            <View style={Styles.dropdownButtonStyle}>
                                <Text style={Styles.dropdownButtonTxtStyle}>
                                    {(selectedItem && selectedItem.name) || 'Select Language'}
                                </Text>
                            </View>
                        );
                    }}
                    renderItem={(item, index, isSelected) => {
                        return (
                            <View style={{ ...Styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                                {/* <Icon name={item.icon} style={Styles.dropdownItemIconStyle} /> */}
                                <Text style={Styles.dropdownItemTxtStyle}>{item.name}</Text>
                            </View>
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={Styles.dropdownMenuStyle}
                />
            </View>

            <View>
                <TouchableOpacity style={Styles.Button}
                    onPress={() => {
                        CheckConstrain();
                    }}>
                    {loading ?
                        <ActivityIndicator size={30} color={"#00ffff80"} />
                        :
                        <Text style={Styles.ButtonText} >
                            Save
                        </Text>}
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Create;