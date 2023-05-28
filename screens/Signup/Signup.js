import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./signup.style";
import { useFormik } from "formik";
import { loginValidations, signupValidations } from "../../utils/Validators";
import { Link, useNavigation } from "@react-navigation/native";
import { firebase } from "../../utils/firebaseDb";
const Signup = () => {
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: signupValidations,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      registerUser();
    },
  });

  registerUser = async () => {
    let name = formik.values.name;
    let email = formik.values.email;
    let password = formik.values.password;

    await firebase
      .auth()
      .createUserWithEmailAndPassword(
        formik.values.email,
        formik.values.password
      )
      .then(() => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
            password,
          })
          .then(() => {
            navigation.navigate("/Home");
          })

          .catch((error) => {
            alert("Something went wrong");
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.AndroidSafeArea}>
      <View style={styles.Container}>
        {/* <Switch /> */}
        <View>
          <Text style={styles.HeadingText}>Signup</Text>
          <Text>
            Already have an account?
            <Link to="/Login">
              <Text style={{ color: "#90EE90" }}>Login</Text>
            </Link>
          </Text>
          <View>
            <TextInput
              style={styles.Input}
              placeholder="Name"
              value={formik.values.name}
              onChangeText={formik.handleChange("name")}
              error={formik.errors.name}
            />
            <Text style={styles.ErrorText}>{formik.errors.name}</Text>

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
            <Text>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;
