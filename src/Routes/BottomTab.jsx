import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import { maxofWidth, minofHeight, minofWidth, relativeHeight, relativeWidth, responsiveFontSize } from '../Utils/ResponsiveScreenFunction';
import { Images } from '../Utils/ImagesAndColors';
import Profile from '../Screens/Profile';
import Create from '../Screens/Create';

const Tab = createBottomTabNavigator();
const BottomTab = () => {

  const TabBarIcon = ({ focused, pageName,icon }) => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', }}>
        <View
          style={{
            width: relativeWidth(58),
            aspectRatio: 1,
            backgroundColor: !focused ? '#0000FF59' : '#fff',
            borderRadius: maxofWidth(58) / 2,
            // position: 'absolute',
            justifyContent:"center",
            alignItems:"center",
            marginBottom: focused? relativeHeight(50):0,


          }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: relativeWidth(28),
            position: 'absolute',
            // height: (28),
            aspectRatio:1,
            justifyContent: 'center',
            alignItems: 'center',
            tintColor: !focused ? '#0000FF' : '#5a5c5e',
                   
          }}
        />
          </View>
        <Text
          style={{
            color: focused ? '#000' : '#b4b4b4',
            fontWeight: '600',
            fontSize: responsiveFontSize(6),
          }}>
          {pageName}{' '}
        </Text>
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          height: relativeHeight(75),
          width: "100%",
          // overflow: 'hidden',
          paddingHorizontal: minofWidth(5),
          backgroundColor: '#00000f',
          paddingBottom:relativeHeight(10),
    
          borderTopLeftRadius: maxofWidth(33),
          borderTopRightRadius: maxofWidth(33),
        },
        tabBarLabelStyle: {
          fontSize: responsiveFontSize(16),
          display: 'none',
          flexDirection: 'column',
        },

      }}
      
      initialRouteName="Create">
      <Tab.Screen
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              pageName={"Create"}
              icon={Images.CreateIcon}
            />
          ),
        }}
        name="Create"
        component={Create}
      />
      <Tab.Screen
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              pageName={"Home"}
              icon={Images.HomeIcon}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              pageName={"Profile"}
              icon ={Images.UserIcon}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
