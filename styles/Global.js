import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainBgImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  form: {
    paddingTop: 92,
    paddingBottom: 79,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarWrapper: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -60 }],
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatar: {
    height: "100%",
    borderRadius: 16,
  },
  addAvatarBtn: {
    position: "absolute",
    zIndex: 1,
    right: -14,
    bottom: 14,
  },

  title: {
    marginBottom: 32,
    color: "#212121",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0.3,
  },

  inputList: {
    rowGap: 16,
  },
  input: {
    height: 50,
    paddingLeft: 16,
    backgroundColor: "#F6F6F6",
    color: "#212121",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  inputFocused: {
    borderColor: "#FF6C00",
  },
  togglePasswordBtn: {
    position: "absolute",
    right: 16,
    top: 148,
  },

  primaryBtn: {
    marginTop: 43,
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  primaryBtnText: {
    color: "#fff",
  },

  secondaryBtn: {
    marginTop: 16,
    alignItems: "center",
  },
  secondaryBtnText: {
    color: "#1B4371",
  },
});
