import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  StyleSheet,
} from "react-native";
import postimg from "../images/post.jpg";
import { EvilIcons } from "@expo/vector-icons";

const Post = () => {
  return (
    <View style={singlePostStyle.container}>
      <TouchableOpacity style={singlePostStyle.imgWrapper}>
        <Image style={singlePostStyle.image} source={postimg} />
      </TouchableOpacity>

      <Text style={singlePostStyle.imgText}>Ліс</Text>
      <View style={singlePostStyle.wrapper}>
        <View style={singlePostStyle.commentWrapper}>
          <EvilIcons
            name="comment"
            size={24}
            style={{
              transform: [{ scaleX: -1 }],
            }}
            color="#BDBDBD"
          />
          <Text style={singlePostStyle.commentText}>0</Text>
        </View>
        <View style={singlePostStyle.locationWrapper}>
          <EvilIcons name="location" size={28} color="#BDBDBD" />
          <Text style={singlePostStyle.locationText}>
            Ivano-Frankivs'k Region, Ukraine
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Post;

export const singlePostStyle = StyleSheet.create({
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
  commentWrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
  },
  commentText: { color: "#BDBDBD", fontSize: 16 },
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
});
