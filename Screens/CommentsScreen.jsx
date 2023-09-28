import { useState, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  Keyboard,
  StyleSheet,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import CommentItem from "../components/CommentItem";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../redux/auth/authSelectors";
import { selectPostByID } from "../redux/posts/postsSelectors";
import { addComment } from "../redux/posts/postsOperations";
import defaultImage from "../images/img-NF.jpeg";

export default function CommentsScreen() {
  const [message, setMessage] = useState("");
  const { params } = useRoute();
  const { uid } = useSelector(selectUser);
  const { id, image, comments } = useSelector(selectPostByID(params.id));
  const isAnyComment = comments?.length > 0;

  const navigation = useNavigation();
  const { canGoBack, goBack, navigate } = navigation;
  const dispatch = useDispatch();

  const onMessageSubmit = () => {
    const createdAt = Date.now();
    const newComment = {
      id: uid + createdAt,
      authorID: uid,
      createdAt,
      message,
    };

    Keyboard.dismiss();
    dispatch(addComment({ id, comment: newComment }));
    setMessage("");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 16 }}
          hitSlop={{ left: 16, right: 32 }}
          onPress={() => (canGoBack() ? goBack() : navigate("Home"))}
        >
          <Feather name="arrow-left" size={24} color="#212121" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <ScrollView scrollIndicatorInsets={{ right: -5 }}>
        <Image
          style={styles.image}
          source={image ? { uri: image } : defaultImage}
        />
        {isAnyComment ? (
          <View style={styles.commentsList}>
            {comments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
          </View>
        ) : (
          <Text style={styles.infoForUser}>
            Відгуки даного допису відсутні.
          </Text>
        )}
      </ScrollView>

      <View>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={(value) => {
            setMessage(value);
          }}
          placeholder="Коментувати..."
          placeholderTextColor="#BDBDBD"
        />
        <TouchableOpacity
          style={styles.sendBtn}
          onPress={() => message && onMessageSubmit()}
        >
          <Ionicons name="arrow-up-circle" size={34} color="#FF6C00" />
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
    backgroundColor: "#fff",
  },
  infoForUser: {
    marginTop: 32,
    color: "#BDBDBD",
    textAlign: "center",
  },
  image: {
    width: 340,
    height: 240,
    alignSelf: "center",
    borderRadius: 8,
  },
  commentsList: {
    rowGap: 24,
    paddingVertical: 32,
  },
  input: {
    height: 50,
    paddingLeft: 16,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 100,
  },
  sendBtn: {
    position: "absolute",
    right: 8,
    bottom: 7,
  },
});
