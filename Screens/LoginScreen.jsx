import React from "react";

import { StyleSheet } from "react-native";
import {
  ImageBackground,
  View,
  TextInput,
  Text,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "../styles/Global";
import mainBg from "../images/mainBG.jpg";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const {
    params: { Login },
  } = useRoute();
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [passwordHide, setPasswordHide] = useState(true);
  function togglePasswordShow() {
    setPasswordHide(!password);
  }

  const logIn = () => {
    Alert.alert(`Welcome, ${Login}!`);
    onChangeEmail("");
    onChangePassword("");
  };
  return (
    <ImageBackground style={styles.mainBgImage} source={mainBg}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <View style={[styles.form, { paddingTop: 32 }]}>
              <Text style={styles.title}>Увійти</Text>

              <View style={styles.inputList}>
                <TextInput
                  placeholder="Адреса електронної пошти"
                  style={styles.input}
                  onChangeText={onChangeEmail}
                  value={email}
                  autoComplete="email"
                />
                <TextInput
                  placeholder="••••••••••••"
                  style={styles.input}
                  onChangeText={onChangePassword}
                  value={password}
                  keyboardType="numeric"
                />
                <TouchableOpacity
                  style={stylesLogin.togglePasswordBtn}
                  onPress={togglePasswordShow}
                  textEntry={passwordHide}
                >
                  <Text style={styles.secondaryBtnText}>
                    {passwordHide ? "Показати" : "Сховати"}
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.primaryBtn} onPress={logIn}>
                <Text style={styles.primaryBtnText}>Увійти</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.secondaryBtn}
                onPress={() => navigation.navigate("RegistrationScreen")}
              >
                <Text style={styles.secondaryBtnText}>
                  Немає акаунту? Зареєструватися
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default LoginScreen;
const stylesLogin = StyleSheet.create({
  togglePasswordBtn: {
    position: "absolute",
    right: 16,
    top: 80,
  },
});
