import React from "react";
import mainBg from "../images/mainBG.jpg";
import avatar from "../images/avatar.jpg";
import addBtn from "../images/addBtn.png";
import { styles } from "../styles/Global";
import {
  ImageBackground,
  View,
  Image,
  TextInput,
  Button,
  Text,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

const RegistrationScreen = () => {
  const [login, onChangeLogin] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [pasword, onChangePassword] = React.useState("");
  return (
    <ImageBackground style={styles.mainBgImage} source={mainBg}>
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.avatarWrapper}>
            <Image style={styles.avatar} source={avatar} />
            <View style={styles.addAvatarBtn}>
              <Image source={addBtn} style={{ width: 30, height: 30 }} />
            </View>
          </View>
          <Text style={styles.title}>Реєстрація</Text>

          <View style={styles.inputList}>
            <TextInput
              placeholder="Логін"
              style={styles.input}
              onChangeText={onChangeLogin}
              value={login}
            />
            <TextInput
              placeholder="Адреса електронної пошти"
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
            />
            <TextInput
              placeholder="Пароль"
              style={styles.input}
              onChangeText={onChangePassword}
              value={pasword}
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => Alert.alert("Зареєструватися")}
          >
            <Text style={styles.primaryBtnText}>Зареєструватися</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => Alert.alert("Вже є акаунт? Увійти")}
          >
            <Text style={styles.secondaryBtnText}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RegistrationScreen;
