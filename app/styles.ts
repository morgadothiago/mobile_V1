import { theme } from "@/theme/global"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
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
    color: theme.COLORS.text,
    fontSize: 24,
    fontWeight: "800",
  },
  headerRight: {
    flexDirection: "row",
    gap: 10,
  },
})
export default styles
