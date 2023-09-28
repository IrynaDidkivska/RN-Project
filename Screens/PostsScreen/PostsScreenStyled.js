import { StyleSheet } from "react-native";
export const postsStyles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
    marginBottom: 32,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  userName: {
    color: "#212121",
    fontSize: 13,
  },
  userEmail: {
    color: "#212121",
    fontSize: 11,
  },
  postsList: {
    paddingBottom: 42,
  },
});
