import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TallyCounter from "../../components/TallyCounter/TallyCounter";
import styles from "./home.style";
import { firebase } from "../../utils/firebaseDb";
function Home() {
  const [counterNo, setCounterNo] = useState(1);
  const [name, setName] = useState();
  const IncrementCounter = () => {
    setCounterNo((prev) => prev + 1);
  };
  let total = (total = Array(counterNo).fill(1));

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <ScrollView>
        <View style={styles.Container}>
          <TouchableOpacity style={styles.Button} onPress={IncrementCounter}>
            <Text style={{ color: "white" }}>Add Counter</Text>
          </TouchableOpacity>
          <View>
            {total.map(
              (e) => (
                console.log(total),
                (
                  <TallyCounter
                    setCounterNo={setCounterNo}
                    key={Math.random()}
                  />
                )
              )
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
