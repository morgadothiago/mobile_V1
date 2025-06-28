import React, { useState } from "react"
import { Alert, StyleSheet, Text, View } from "react-native"
import {
  BellIcon,
  BellRingingIcon,
  BookmarkIcon,
  ChatsTeardropIcon,
} from "phosphor-react-native"
import { theme } from "@/theme/global"
import Button from "./components/Button"
import styles from "./styles"

export default function Index() {
  const [notifications, setNotifications] = useState([])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <ChatsTeardropIcon
            size={30}
            color={theme.COLORS.button}
            weight="duotone"
          />
          <Text style={styles.headerLeftText}>Helia</Text>
        </View>
        <View style={styles.headerRight}>
          <Button onPress={() => Alert.alert("Esta clicanndo no sino")}>
            {notifications.length > 0 ? (
              <BellRingingIcon
                size={30}
                color={theme.COLORS.text}
                weight="duotone"
              />
            ) : (
              <BellIcon size={30} color={theme.COLORS.text} weight="duotone" />
            )}
          </Button>
          <Button onPress={() => alert("Ola")}>
            <BookmarkIcon
              size={30}
              color={theme.COLORS.text}
              weight="duotone"
            />
          </Button>
        </View>
      </View>
    </View>
  )
}
