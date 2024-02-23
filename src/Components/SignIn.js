import * as React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Pressable } from "react-native";
import MyBottom from "./MyBottom";
import { Feather } from "@expo/vector-icons";
import MyInput from "./MyInput";
import { AuthContext } from "../Context/AuthContext";
import MyBottonGoogle from "./MyBottonGoogle";
import BottonRegistro from "./BottonRegistro";
import { Colors } from "../Constants/Colors";
import { useNavigation } from "@react-navigation/native";




const SignIn = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { authState, setAuthState, setEmail, setPassword, handleSignIn } =
 React.useContext(AuthContext);

  const navigation = useNavigation();

  const onHandleSign = async () => {
    try {
      await handleSignIn();
    } catch (err) {
      console.log("Error", err);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <React.Fragment>
      <Text style={styles.text}>Correro Electrónico </Text>
      <MyInput label={"  example@correo.com"} onChangeText={setEmail} />
      <Text style={styles.textPassword}>Contraseña </Text>
      <MyInput
        label={"Contraseña"}
        onChangeText={setPassword}
        secureTextEntry
      />

      <MyBottom title="Ingresar" onPress={onHandleSign} />

      <Pressable>
        <Text>
          {" "}
          ¿Olvidaste tu contraseña?{" "}
        </Text>
      </Pressable>
      <View style={styles.line}></View>
      <MyBottonGoogle title="Google" />

      <Pressable>
        <Text> ¿No tienes una cuenta? </Text>
      </Pressable>

      <BottonRegistro
        title="Registrate"
        onPress={() => navigation.navigate("Register")}
      />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#F3305F",
    marginRight: "55%",
  },
  textPassword: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#F3305F",
    marginRight: "65%",
  },
  // textForgotPassword: {
  //   position: "absolute",
  //   alignItems:'center',
  //   textAlign:'center',
  //   left: 0,
  //   top: -7,
  // },
  line: {
    width: "90%",
    height: 2,
    backgroundColor: Colors.bottonLogin,
    marginTop: "6%",
    marginBottom: "2%",
  },
  viewPassword:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    marginRight:21
  },

  eyeIcon: {
    marginLeft: -40, 
  },
});
export default SignIn;
