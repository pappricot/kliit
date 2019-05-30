import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions
} from "react-native";
import { QuestionInput } from "../screens/ask-screens/Input";
const width = Dimensions.get("window").width;
export default class AskScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.containerSt}>
        {/* header */}
        <View style={styles.headerWr}>
          <View style={styles.pinkCircle}>
            <View style={styles.circleText}>
              <Text style={styles.pinkCircleText}>
                Hi <Text style={styles.red}>Crystal</Text>,
              </Text>
              <Text style={styles.pinkCircleText}>
                what do you want to ask an expert?
              </Text>
              <Text style={styles.credits}>(20 credits)</Text>
            </View>
          </View>
        </View>
        {/* question */}
        <View style={styles.questionWr}>
          <TextInput
            style={styles.question}
            multiline={true}
            numberOfLines={4}
            placeholder="Ask your question to choose from our network of experts!"
            placeholderTextColor={"#a2a2a2"}
            style={{ fontSize: 15, textAlign: "left" }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
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
    flex: 1,
    backgroundColor: "#fafafa"
  },
  headerWr: {
    flex: 2.5
  },
  questionWr: {
    flex: 1,
    width: width - 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20
  },
  question: {
    textAlign: "center"
  },
  resultWr: {
    flex: 1,
    backgroundColor: "blue"
  },
  previousQuetsionWR: {
    flex: 1,
    backgroundColor: "grey"
  },
  pinkCircle: {
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: "#fea9dc",
    right: 80,
    bottom: 80
  },
  circleText: {
    width: 300
  },

  pinkCircleText: {
    fontSize: 35,
    textAlign: "left",
    top: 30,
    left: 45
  },
  red: {
    color: "#d92405"
  },
  credits: {
    color: "#00267d",
    textAlign: "center",
    top: 60,
    paddingRight: 140
  },
  placeholderStyle: {
    fontSize: 15
  }
});
