import { StyleSheet } from "react-native";

export const createPostsStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  imgWrapper: {
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
  },
  imgSize: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  cameraBtn: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  transparent: {
    backgroundColor: "rgba(255, 255, 255, 0.30)",
  },
  cameraText: {
    marginTop: 8,
    color: "#BDBDBD",
    fontSize: 16,
  },
  warning: {
    color: "red",
    fontSize: 18,
    textAlign: "center",
  },
  inputsList: {
    rowGap: 16,
    marginVertical: 32,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  input: {
    width: "100%",
    height: 50,
    fontSize: 16,
    color: "#212121",
  },
  submitBtn: {
    marginBottom: 120,
    alignItems: "center",
    padding: 16,
    fontSize: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
  },
  activeBtn: {
    backgroundColor: "#7365C3",
  },
  submitBtnText: {
    color: "#BDBDBD",
    fontSize: 16,
  },
  activeText: {
    color: "#ffffff",
  },
  resetBtn: {
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
});
