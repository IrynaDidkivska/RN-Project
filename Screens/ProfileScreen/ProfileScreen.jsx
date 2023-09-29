import {
  ImageBackground,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Text,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";

import Post from "../../components/Post";
import { selectUser } from "../../redux/auth/authSelectors";
import { selectPostsByOwner } from "../../redux/posts/postsSelectors";
import {
  changeAvatar,
  deleteAvatar,
  logOut,
} from "../../redux/auth/authOperations";
import mainBG from "../../images/mainBG.jpg";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { profileStyles } from "./ProfileScreenStyles";

export default function ProfileScreen() {
  const { name, avatarURL } = useSelector(selectUser);
  const posts = useSelector(selectPostsByOwner);
  const dispatch = useDispatch();

  async function selectAvatar() {
    const { granted } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("Permission to access of the image library is required!");
      return;
    }

    const { canceled, assets } = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      allowsEditing: true,
      allowsMultipleSelection: false,
    });
    if (!canceled) {
      dispatch(changeAvatar(assets[0].uri));
    }
  }

  function removeAvatar() {
    dispatch(deleteAvatar());
  }

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <ImageBackground style={profileStyles.mainBG} source={mainBG}>
        <TouchableOpacity
          style={profileStyles.userAvatarWrapper}
          onPress={avatarURL ? removeAvatar : selectAvatar}
        >
          {avatarURL && (
            <Image style={profileStyles.avatar} source={{ uri: avatarURL }} />
          )}
          <View style={profileStyles.photoBtn}>
            {avatarURL ? (
              <Entypo name="cross" size={24} color="#BDBDBD" />
            ) : (
              <Ionicons name="add-outline" size={24} color="#7365C3" />
            )}
          </View>
        </TouchableOpacity>

        <View style={profileStyles.profile}>
          <TouchableOpacity
            style={profileStyles.logoutBtn}
            hitSlop={{ left: 32, right: 16, top: 32, bottom: 32 }}
            onPress={() => dispatch(logOut())}
          >
            <Feather name="log-out" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <Text style={profileStyles.userName}>{name}</Text>
          <View style={profileStyles.postsList}>
            {posts.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
