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
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "../styles/Global";
import mainBg from "../images/mainBG.jpg";

const LoginScreen = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState("");
  const [pasword, onChangePassword] = React.useState("");

  const logIn = () => {
    Alert.alert("Welcome!");
  };
  return (
    <ImageBackground style={styles.mainBgImage} source={mainBg}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={[styles.form, { paddingTop: 32 }]}>
              <Text style={styles.title}>Увійти</Text>

              <View style={styles.inputList}>
                <TextInput
                  placeholder="e-mail@example.com"
                  style={styles.input}
                  onChangeText={onChangeEmail}
                  value={email}
                  autoComplete="email"
                />
                <TextInput
                  placeholder="••••••••••••"
                  style={styles.input}
                  onChangeText={onChangePassword}
                  value={pasword}
                  keyboardType="numeric"
                />
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
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default LoginScreen;
