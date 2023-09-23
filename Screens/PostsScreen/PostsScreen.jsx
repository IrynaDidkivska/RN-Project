import React from "react";
import { styles } from "../../styles/Global";
import { postStyles } from "./PostsScreenStyled";
import { View, ScrollView, Image, Text } from "react-native";
import avatar from "../../images/avatar.jpg";
import Post from "../../components/Post";

const PostsScreen = () => {
  return (
    <ScrollView style={postStyles.container}>
      <View style={postStyles.profile}>
        <Image source={avatar} style={postStyles.userImage} />
        <View>
          <Text style={postStyles.userName}>Natali Romanova</Text>
          <Text style={postStyles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <Post />
      {/* <View style={styles.postsList}>
        {posts.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })}
      </View> */}
    </ScrollView>
  );
};

export default PostsScreen;
