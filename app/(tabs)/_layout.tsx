import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

// define the layout for the root of the app
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d", // tabBarActiveTintColor is the color of the icon when it is active
        headerStyle: { // headerStyle is the style of the header
          backgroundColor: "#25292e", // backgroundColor is the background color of the header
        },
        headerShadowVisible: false, // headerShadowVisible is a boolean that determines whether the shadow of the header is visible
        headerTintColor: "#fff", // headerTintColor is the color of the text in the header
        tabBarStyle: { // tabBarStyle is the style of the tabBar
          backgroundColor: "#25292e", // backgroundColor is the background color of the tabBar
        },
      }}
    >
      {/* The first page */}
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Gia Trong",
          tabBarIcon: ({ focused, color }) => ( // tabBarIcon is a function that returns the icon of the tab
            // focused is a boolean that determines whether the tab is focused
            // color is the color of the icon
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={24}
              color="#ffd33d"
            />
          ),
        }}
      />
      {/*  */}
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
