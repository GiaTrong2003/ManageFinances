import { Stack } from "expo-router";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true)

// define the layout for the root of the app
export default function RootLayout() {
  return (
    <Stack>
      {/* The first page */}
      <Stack.Screen
        name="(tabs)"
        options={{
            headerShown: false,
        }}
      />
      {/* not found */}
      <Stack.Screen name="not-found"/>
    </Stack>
  );
}
