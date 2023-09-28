import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { FontAwesome, AntDesign, Feather } from "@expo/vector-icons";

import { addLike } from "../redux/posts/postsOperations";
import defaultImage from "../images/img-NF.jpeg";

export default function Post({ post }) {
  const { id, image, title, comments, likes, place, mapLocation } = post;
  const isAnyComment = comments.length > 0;

  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={styles.postItem}>
      <TouchableOpacity style={styles.imgWrapper}>
        <Image
          style={styles.image}
          source={image ? { uri: image } : defaultImage}
        />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.info}>
        <View style={styles.statistics}>
          <TouchableOpacity
            style={styles.statItem}
            onPress={() => navigate("CommentsScreen", { id })}
          >
            <FontAwesome
              name={isAnyComment ? "comment" : "comment-o"}
              size={24}
              style={{
                transform: [{ scaleX: -1 }],
              }}
              color={isAnyComment ? "#FF6C00" : "#BDBDBD"}
            />
            <Text
              style={[styles.statText, !isAnyComment && styles.transparent]}
            >
              {comments.length}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.statItem}
            onPress={() => dispatch(addLike(id))}
          >
            <AntDesign
              name="like2"
              size={24}
              color={likes ? "#FF6C00" : "#BDBDBD"}
            />
            <Text style={[styles.statText, !likes && styles.transparent]}>
              {likes}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.statItem}
          onPress={() => navigate("MapScreen", { mapLocation })}
        >
          <Feather name="map-pin" size={24} color="#BDBDBD" />
          <Text style={[styles.statText, styles.underline]}>{place}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postItem: {
    marginBottom: 32,
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
    alignSelf: "center",
    borderRadius: 8,
  },
  title: {
    marginVertical: 8,
    color: "#212121",
    fontSize: 16,
    fontWeight: "medium",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statistics: {
    flexDirection: "row",
    columnGap: 24,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  statText: {
    color: "#212121",
    fontSize: 16,
    marginLeft: 6,
  },
  transparent: {
    color: "#BDBDBD",
  },
  underline: {
    textDecorationLine: "underline",
  },
});
