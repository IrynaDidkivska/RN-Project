import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { Controller } from "react-hook-form";
import styles from "../styles/Global";

function CredentialInputs({
  control,
  focusedField,
  setFocusedField,
  isPasswordHide,
  togglePassword,
}) {
  return (
    <>
      <Controller
        control={control}
        name="email"
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <View>
            <TextInput
              style={[
                styles.input,
                focusedField === "email" && styles.inputFocused,
              ]}
              inputMode="email"
              placeholder="Адреса електронної пошти"
              onChangeText={onChange}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField("")}
              value={value}
            />
            {error && Alert.alert("Email is required")}
          </View>
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: true,
          maxLength: 50,
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <View>
            <TextInput
              style={[
                styles.input,
                focusedField === "password" && styles.inputFocused,
              ]}
              placeholder="Пароль"
              onChangeText={onChange}
              onFocus={() => setFocusedField("password")}
              onBlur={() => setFocusedField("")}
              value={value}
              secureTextEntry={isPasswordHide}
            />
            <TouchableOpacity
              style={styles.togglePasswordBtn}
              onPress={togglePassword}
            >
              <Text style={styles.secondaryBtnText}>
                {isPasswordHide ? "Показати" : "Сховати"}
              </Text>
            </TouchableOpacity>
            {error && Alert.alert("Password is required")}
          </View>
        )}
      />
    </>
  );
}

export default CredentialInputs;
