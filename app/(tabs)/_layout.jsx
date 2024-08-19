import React from "react";
import { Tabs } from "expo-router";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#DD5A5A",
          tabBarInactiveTintColor: "#FFFFFF", // To add a softer color for inactive icons
          tabBarStyle: {
            backgroundColor: "#1C1B1B",
            borderTopWidth: 0, // Remove the border for a cleaner look
            height: 84,
            borderRadius: 45,
            marginBottom: 25,
            marginHorizontal: 40, // Reduced margin to bring items closer to the edges
            paddingHorizontal: 20, // Add padding to create space inside the tab bar
            paddingVertical: 20,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute", // Position the tab bar above the bottom of the screen
            left: 0,
            right: 0,
            bottom: 10,
            elevation: 10, // Add shadow for a floating effect
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          },
        }}
      >
        <Tabs.Screen
          name="homescreen"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={35} />
            ),
          }}
        />
        <Tabs.Screen
          name="favoritescreen"
          options={{
            title: "Favorite",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="favorite" color={color} size={35} />
            ),
          }}
        />
        <Tabs.Screen
          name="notificationscreen"
          options={{
            title: "Notification",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="notifications" color={color} size={35} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
