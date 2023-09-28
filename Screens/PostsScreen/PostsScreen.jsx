import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";

import Post from "../../components/Post";
import { selectPosts } from "../../redux/posts/postsSelectors";
import { getAllPosts } from "../../redux/posts/postsOperations";
import { selectUser } from "../../redux/auth/authSelectors";
import defaultAvatar from "../../images/default-avatar.png";
import { postsStyles } from "./PostsScreenStyled";

export default function PostsScreen() {
  const { name, email, avatarURL } = useSelector(selectUser);
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <>
      {posts ? (
        <ScrollView style={postsStyles.container}>
          <View style={postsStyles.profile}>
            <Image
              source={avatarURL ? { uri: avatarURL } : defaultAvatar}
              style={postsStyles.userImage}
            />
            <View>
              <Text style={postsStyles.userName}>{name}</Text>
              <Text style={postsStyles.userEmail}>{email}</Text>
            </View>
          </View>
          <View style={postsStyles.postsList}>
            {posts.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
          </View>
        </ScrollView>
      ) : (
        <View>Loading</View>
      )}
    </>
  );
}
