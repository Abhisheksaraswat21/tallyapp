import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./login.style";
import { useFormik } from "formik";
import { loginValidations } from "../../utils/Validators";
import { Link, useNavigation } from "@react-navigation/native";
import { firebase } from "../../utils/firebaseDb";

const Login = () => {
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidations,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      LoginUser();
    },
  });

  const LoginUser = async () => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(formik.values.email, formik.values.password)
        .then(navigation.navigate("/Home"));
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.AndroidSafeArea}>
      <View style={styles.Container}>
        {/* <Switch /> */}
        <View>
          <Text style={styles.HeadingText}>Login</Text>

          <View>
            <TextInput
              style={styles.Input}
              placeholder="Email"
              value={formik.values.email}
              onChangeText={formik.handleChange("email")}
              error={formik.errors.email}
            />
            <Text style={styles.ErrorText}>{formik.errors.email}</Text>

            <TextInput
              style={styles.Input}
              placeholder="password"
              activeOutlineColor="green"
              outlineColor="green"
              Type="outlined"
              value={formik.values.password}
              onChangeText={formik.handleChange("password")}
              error={formik.errors.password}
            />
            <Text style={styles.ErrorText}>{formik.errors.password}</Text>
          </View>

          <TouchableOpacity
            onPress={formik.handleSubmit}
            style={styles.LoginButton}
          >
            <Text>Login</Text>
          </TouchableOpacity>
        </View>

        <Text>
          Don't have an account?
          <Link to="//Signup">
            <Text style={{ color: "#90EE90" }}>Sign Up</Text>
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default Login;
