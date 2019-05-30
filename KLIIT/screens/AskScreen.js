import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

export default class AskScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.containerSt}>
        <View style={styles.headerWr}>
          <Text>1</Text>
        </View>
        <View style={styles.questionWr}>
          <Text>1</Text>
        </View>
        <View style={styles.resultWr}>
          <Text>1</Text>
        </View>
        <View style={styles.previousQuetsionWR}>
          <Text>1</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerSt: {
    flex: 1
  },
  headerWr: {
    flex: 1,
    backgroundColor: "pink"
  },
  questionWr: {
    flex: 1,
    backgroundColor: "green"
  },
  resultWr: {
    flex: 1,
    backgroundColor: "blue"
  },
  previousQuetsionWR: {
    flex: 1,
    backgroundColor: "grey"
  }
});
