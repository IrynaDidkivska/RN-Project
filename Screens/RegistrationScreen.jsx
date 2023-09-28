import { useState, useEffect } from "react";
import {
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { useForm, Controller } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/authSelectors";
import { register } from "../redux/auth/authOperations";

import CredentialInputs from "../components/CredentialInputs";
import mainBG from "../images/mainBG.jpg";
import addIcon from "../images/addBtn.png";
import removeIcon from "../images/deleteBtn.png";
import styles from "../styles/Global";

const RegistrationScreen = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const [avatarLocalPath, setAvatarLocalPath] = useState(null);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const [focusedField, setFocusedField] = useState(false);
  const [isPasswordHide, setShowPassword] = useState(true);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("Home");
    }
  }, [isLoggedIn]);

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
      setAvatarLocalPath(assets[0].uri);
    }
  }

  function deleteAvatar() {
    setAvatarLocalPath(null);
  }

  function togglePassword() {
    setShowPassword(!isPasswordHide);
  }

  const onSubmit = handleSubmit((credentialInputs) =>
    dispatch(register({ ...credentialInputs, avatarLocalPath }))
  );

  return (
    <ImageBackground style={styles.mainBG} source={mainBG}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}
      >
        <View style={styles.form}>
          <TouchableOpacity
            style={styles.userAvatarWrapper}
            onPress={avatarLocalPath ? deleteAvatar : selectAvatar}
          >
            {avatarLocalPath && (
              <Image style={styles.avatar} source={{ uri: avatarLocalPath }} />
            )}
            <View style={styles.avatarBtn}>
              <Image
                source={avatarLocalPath ? removeIcon : addIcon}
                style={{ width: 30, height: 30 }}
              />
            </View>
          </TouchableOpacity>

          <Text style={styles.title}>Реєстрація</Text>

          <View style={styles.inputList}>
            <Controller
              control={control}
              name="name"
              rules={{
                required: true,
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <View>
                  <TextInput
                    style={[
                      styles.input,
                      focusedField === "name" && styles.inputFocused,
                    ]}
                    placeholder="Логін"
                    onChangeText={onChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField("")}
                    value={value}
                  />
                  {error && Alert.alert("Login is required")()}
                </View>
              )}
            />

            <CredentialInputs
              control={control}
              focusedField={focusedField}
              setFocusedField={setFocusedField}
              isPasswordHide={isPasswordHide}
              togglePassword={togglePassword}
            />
          </View>

          <TouchableOpacity style={styles.primaryBtn} onPress={onSubmit}>
            <Text style={styles.primaryBtnText}>Зареєструватися</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryBtn}
            hitSlop={{ top: 16, bottom: 32 }}
            onPress={() => navigate("LoginScreen")}
          >
            <Text style={styles.secondaryBtnText}>Вже є акаунт ? Увійти</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default RegistrationScreen;
