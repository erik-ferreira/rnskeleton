import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: "#000",
  },

  header: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,

    borderWidth: 1,
    borderColor: "#F00",
    width: 200,
    height: 80,
    opacity: 0,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },

  greeting: {
    color: "#FFF",
    fontSize: 14,
  },

  username: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
})
