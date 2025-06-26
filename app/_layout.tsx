import { Stack } from "expo-router"
import { StatusBar } from "react-native"

export default function RootLayout() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle={"light-content"}
        translucent
      />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  )
}
