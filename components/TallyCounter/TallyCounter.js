import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./tallyCounter.style";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function TallyCounter({ setCounterNo }) {
  const [name, setName] = useState("Tally Counter");
  const [newName, setNewName] = useState(null);

  const [startValue, setStartValue] = useState(0);
  const [newStartValue, setNewStartValue] = useState(null);

  const [counterNameSelected, setCounterNameSelected] = useState(null);
  const [startValueSelected, setStartValueSelected] = useState(null);

  return (
    <View style={styles.Container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.Heading}>
          <Text style={{ color: "white" }}>{name}</Text>
        </View>
        <Entypo
          name="cross"
          size={20}
          color="white"
          onPress={() => setCounterNo((prev) => prev - 1)}
        />
      </View>

      <View style={styles.InputScreen}>
        <Text>{startValue}</Text>
      </View>

      {/* buttons */}
      <View style={{ position: "relative" }}>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity
            onPress={() => setStartValue((prev) => prev - 1)}
            style={styles.ButtonLeft}
          >
            <Text style={styles.ButtonText}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setStartValue((prev) => prev + 1)}
            style={styles.ButtonLeft}
          >
            <Text style={styles.ButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          {/* <TouchableOpacity style={styles.ButtonRight}>
            <Text>Start Value</Text>
          </TouchableOpacity> */}

          {/* START VALUE */}
          {!startValueSelected ? (
            <TouchableOpacity
              onPress={() => setStartValueSelected(!startValueSelected)}
              style={styles.ButtonRight}
            >
              <Text>Start Value</Text>
            </TouchableOpacity>
          ) : (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",

                alignItems: "center",
              }}
            >
              <TextInput
                style={styles.ButtonInput}
                type="text"
                onChangeText={(value) => {
                  value.length === 0
                    ? setNewStartValue(0)
                    : setNewStartValue(value);
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  setStartValue(newStartValue),
                    setStartValueSelected(!startValueSelected);
                }}
                style={styles.SetButton}
              >
                <Text>Set</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* COUNTER VALUE */}

          {!counterNameSelected ? (
            <TouchableOpacity
              onPress={() => setCounterNameSelected(!counterNameSelected)}
              style={styles.ButtonRight}
            >
              <Text>Counter Name</Text>
            </TouchableOpacity>
          ) : (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",

                alignItems: "center",
              }}
            >
              <TextInput
                style={styles.ButtonInput}
                type="text"
                onChangeText={(value) => setNewName(value)}
              />
              <TouchableOpacity
                onPress={() => {
                  setName(newName),
                    setCounterNameSelected(!counterNameSelected);
                }}
                style={styles.SetButton}
              >
                <Text>Set</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* circular button */}
        <View style={styles.CircularButton}>
          <MaterialCommunityIcons
            name="arrow-u-down-left"
            size={20}
            color="black"
            onPress={() => setStartValue(0)}
          />
        </View>
      </View>
    </View>
  );
}

export default TallyCounter;
