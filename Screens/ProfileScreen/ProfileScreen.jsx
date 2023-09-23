import React from "react";
import { profileStyles } from "./ProfileScreenStyles";
import { styles } from "../../styles/Global";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import mainBg from "../../images/mainBG.jpg";
import avatar from "../../images/avatar.jpg";
import deleteBtn from "../../images/deleteBtn.png";
import postimg from "../../images/post.jpg";
import ProfilePost from "../../components/ProfilePost";

const ProfileScreen = () => {
  // const [image, setImage] = useState(null);
  // const [title, setTitle] = useState("");
  // const [place, setPlace] = useState("");
  // const isDataFullFilled = image && title && place;

  const { navigate, goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.mainBgImage}
        source={mainBg}
      ></ImageBackground>
      <View style={profileStyles.container}>
        <View style={styles.avatarWrapper}>
          <Image style={styles.avatar} source={avatar} />
          <View style={profileStyles.deleteAvatarBtn}>
            <Image source={deleteBtn} style={{ width: 40, height: 40 }} />
          </View>
        </View>

        <TouchableOpacity
          style={profileStyles.logoutBtn}
          hitSlop={{ left: 32, right: 16, top: 32, bottom: 32 }}
          onPress={() => Alert.alert("Logout")}
        >
          <Feather name="log-out" size={24} color="#BDBDBD" />
        </TouchableOpacity>
        <Text style={styles.title}>Natali Romanova</Text>
        <ProfilePost />
      </View>
    </View>
  );
};

export default ProfileScreen;
