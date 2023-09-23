import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import postimg from "../images/post.jpg";
import { EvilIcons } from "@expo/vector-icons";

const ProfilePost = () => {
  return (
    <View style={ProfilePostStyles.container}>
      <TouchableOpacity style={ProfilePostStyles.imgWrapper}>
        <Image style={ProfilePostStyles.image} source={postimg} />
      </TouchableOpacity>

      <Text style={ProfilePostStyles.imgText}>Ліс</Text>
      <View style={ProfilePostStyles.wrapper}>
        <View style={ProfilePostStyles.leftWrapper}>
          <View style={ProfilePostStyles.commentWrapper}>
            <EvilIcons
              name="comment"
              size={24}
              style={{
                transform: [{ scaleX: -1 }],
                marginRight: 8,
              }}
              color="#FF6C00"
            />
            <Text style={ProfilePostStyles.commentText}>8</Text>
          </View>
          <View style={ProfilePostStyles.likesWrapper}>
            <EvilIcons
              name="like"
              size={28}
              color="#FF6C00"
              style={{
                marginRight: 6,
              }}
            />
            <Text style={ProfilePostStyles.likesText}>153</Text>
          </View>
        </View>
        <View style={ProfilePostStyles.locationWrapper}>
          <EvilIcons name="location" size={28} color="#BDBDBD" />
          <Text style={ProfilePostStyles.locationText}>Ukraine</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfilePost;

export const ProfilePostStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  imgText: {
    marginTop: 8,
    color: "#212121",
    fontSize: 16,
    fontWeight: "bold",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 24,
  },
  commentWrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
  },
  commentText: { color: "#212121", fontSize: 16 },
  locationWrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
  },
  locationText: {
    color: "#212121",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  likesWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
});
