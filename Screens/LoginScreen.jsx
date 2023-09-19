import React from "react";
import {
  ImageBackground,
  View,
  Image,
  TextInput,
  Button,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/Global";
import mainBg from "../images/mainBG.jpg";

const LoginScreen = () => {
  const [email, onChangeEmail] = React.useState("");
  const [pasword, onChangePassword] = React.useState("");
  return (
    <ImageBackground style={styles.mainBgImage} source={mainBg}>
      <View style={[styles.form, { paddingTop: 32 }]}>
        <Text style={styles.title}>Увійти</Text>

        <View style={styles.inputList}>
          <TextInput
            placeholder="e-mail@example.com"
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
          />
          <TextInput
            placeholder="••••••••••••"
            style={styles.input}
            onChangeText={onChangePassword}
            value={pasword}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => Alert.alert("Увійти")}
        >
          <Text style={styles.primaryBtnText}>Увійти</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryBtn}>
          <Text style={styles.secondaryBtnText}>
            Немає акаунту? Зареєструватися
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
