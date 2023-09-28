import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainBG: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  form: {
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
    top: 0,
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -60 }],
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 16,
  },
  avatarBtn: {
    position: "absolute",
    zIndex: 69,
    right: -14,
    bottom: 14,
  },

  title: {
    marginBottom: 32,
    color: "#212121",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  inputList: {
    rowGap: 16,
  },
  input: {
    height: 50,
    paddingHorizontal: 16,
    backgroundColor: "#F6F6F6",
    color: "#212121",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  inputFocused: {
    borderColor: "#FF6C00",
  },
  errorMessage: {
    position: "absolute",
    left: 4,
    bottom: 0,
    color: "red",
  },
  togglePasswordBtn: {
    position: "absolute",
    right: 16,
    top: 16,
  },

  primaryBtn: {
    alignItems: "center",
    marginTop: 43,
    paddingVertical: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  primaryBtnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  secondaryBtn: {
    marginTop: 16,
    alignItems: "center",
  },
  secondaryBtnText: {
    color: "#1B4371",
  },
});

export default styles;
