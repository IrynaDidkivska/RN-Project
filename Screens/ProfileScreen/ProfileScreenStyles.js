import { StyleSheet } from "react-native";
export const profileStyles = StyleSheet.create({
  mainBG: {
    paddingTop: 120,
  },
  profile: {
    flex: 1,
    paddingTop: 92,
    paddingBottom: 42,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  userAvatarWrapper: {
    position: "absolute",
    zIndex: 69,
    top: 120,
    left: "50%",
    transform: [{ translateX: -60 }, { translateY: -60 }],
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
  avatar: {
    height: "100%",
    borderRadius: 20,
  },
  photoBtn: {
    position: "absolute",
    width: 30,
    height: 30,
    right: -14,
    bottom: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  logoutBtn: {
    position: "absolute",
    right: 16,
    top: 22,
  },
  userName: {
    color: "#212121",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  postsList: {
    paddingTop: 32,
  },
});
