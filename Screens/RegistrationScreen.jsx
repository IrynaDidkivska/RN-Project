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
  Text,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

const RegistrationScreen = ({ navigation }) => {
  const [login, onChangeLogin] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [passwordHide, setPasswordHide] = useState(true);

  function togglePasswordShow() {
    setPasswordHide(!password);
  }
  return (
    <ImageBackground style={styles.mainBgImage} source={mainBg}>
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.avatarWrapper}>
            {/* <Image style={styles.avatar} source={avatar} /> */}
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
              value={password}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.togglePasswordBtn}
              onPress={togglePasswordShow}
              textEntry={passwordHide}
            >
              <Text style={styles.secondaryBtnText}>
                {passwordHide ? "Показати" : "Сховати"}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => navigation.navigate("PostScreen")}
          >
            <Text style={styles.primaryBtnText}>Зареєструватися</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={styles.secondaryBtnText}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RegistrationScreen;
