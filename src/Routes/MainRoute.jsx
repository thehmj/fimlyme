import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from "./BottomTab";
const Stack = createStackNavigator();
const  MainRoute =()=> {
  return (
    <NavigationContainer>
    <Stack.Navigator  initialRouteName="DrawerTab">
      <Stack.Screen name='BottomTab' component={BottomTab} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}
export default MainRoute;