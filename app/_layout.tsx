import { Stack } from "expo-router";

// define the layout for the root of the app
export default function RootLayout() {
  return (
    <Stack>
      {/* The first page */}
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Gia Trong",
        }}
      />
      {/*  */}
      <Stack.Screen
        name="about"
        options={{
          headerTitle: "About",
        }}
      />
      {/* not found */}
      <Stack.Screen name="not-found"/>
    </Stack>
  );
}
