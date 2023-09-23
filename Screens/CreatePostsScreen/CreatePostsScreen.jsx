import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { useState } from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { styles } from "../CreatePostsScreen/CreatePostsScreenStyles";
import postimg from "../../images/post.jpg";

const CreatePostsScreen = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const isDataFullFilled = image && title && place;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imgWrapper}>
        {image && <Image style={styles.image} source={postimg} />}
        <View style={[styles.cameraBtn, image && styles.transparent]}>
          <FontAwesome
            name="camera"
            size={24}
            color={image ? "#fff" : "#BDBDBD"}
          />
        </View>
      </TouchableOpacity>

      <Text style={styles.imgText}>
        {image ? "Редагувати фото" : "Завантажте фото"}
      </Text>

      <View style={styles.inputsList}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Назва..."
            style={styles.input}
            value={title}
            onChangeText={(value) => setTitle(value)}
            placeholderTextColor="#BDBDBD"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Feather name="map-pin" size={24} color="#BDBDBD" />
          <TextInput
            placeholder="Місцевість..."
            style={styles.input}
            value={place}
            onChangeText={(value) => setPlace(value)}
            placeholderTextColor="#BDBDBD"
          />
        </View>
      </View>

      <TouchableOpacity
        style={[styles.submitBtn, isDataFullFilled && styles.activeBtn]}
        // disabled={!isDataFullFilled}
        onPress={() => Alert.alert("Опубліковати")}
      >
        <Text
          style={[styles.submitBtnText, isDataFullFilled && styles.activeText]}
        >
          Опубліковати
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deletePostBtn}>
        <Feather name="trash-2" size={24} color="#BDBDBD" />
      </TouchableOpacity>
    </View>
  );
};

export default CreatePostsScreen;
