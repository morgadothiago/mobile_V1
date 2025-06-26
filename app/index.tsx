import React from "react"
import { Alert, StyleSheet, Text, View } from "react-native"
import {
  BellIcon,
  BookmarkIcon,
  ChatsTeardropIcon,
} from "phosphor-react-native"
import { theme } from "@/theme/global"
import { Button } from "./components/Button"

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <ChatsTeardropIcon size={30} color="#1ab65c" weight="duotone" />
          <Text style={styles.headerLeftText}>Helia</Text>
        </View>
        <View style={styles.headerRight}>
          <Button onPress={() => Alert.alert("Esta clicanndo no sino")}>
            <BellIcon size={30} color="#f4f4f4" weight="duotone" />
          </Button>
          <Button onPress={() => alert("Ola")}>
            <BookmarkIcon size={30} color="#f4f4f4" weight="duotone" />
          </Button>
        </View>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.primary,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerLeftText: {
    color: "#f4f4f4",
    fontSize: 24,
    fontWeight: "800",
  },
  headerRight: {
    flexDirection: "row",
    gap: 10,
  },
})
