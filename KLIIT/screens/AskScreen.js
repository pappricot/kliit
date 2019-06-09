import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";
import { QuestionInput } from "../screens/ask-screens/Input";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class AskScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      screenHeight: 0
    };
  }

  onContentSizeChange = (contentW, contentH) => {
    this.setState({ screenHeight: contentH });
  };

  render() {
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <View style={styles.main}>
        <ScrollView
          contentContainerStyle={styles.containerSt}
          // onContentSizeChange={this.onContentSizeChange}
          // scrollEnabled={scrollEnabled}
        >
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
            <View style={styles.question}>
              <TextInput
                multiline={true}
                numberOfLines={4}
                placeholder="Ask your question to choose from our network of experts!"
                placeholderTextColor={"#a2a2a2"}
                style={{
                  fontSize: 18,
                  textAlign: "left",
                  borderBottomStyle: "solid",
                  fontFamily: "avenir"
                }}
                onChangeText={text => this.setState({ text })}
                value={this.state.text}
              />
            </View>
            <TouchableOpacity
              style={styles.buttonWr}
              onPress={() => this.props.navigation.navigate("ChooseExpert")}
            >
              <Text style={styles.buttonText}>SHOW ME WHO CAN ANSWER!</Text>
            </TouchableOpacity>
          </View>
          {/* result */}
          <View style={styles.resultWr}>
            <View style={styles.fav}>
              <Text style={styles.titleFav}>My favorite experts</Text>
            </View>
            {/* will be a list array */}
            <ScrollView horizontal style={styles.scrollExpert}>
              <View style={styles.expertWr}>
                <View style={styles.avatar}>
                  <Image source={require("../assets/images/oval1.png")} />
                </View>
                <Text style={styles.expert}>Name Last Name</Text>
                <Text style={styles.expert2}>RN</Text>
              </View>
              <View style={styles.expertWr}>
                <View style={styles.avatar}>
                  <Image source={require("../assets/images/oval2.png")} />
                </View>
                <Text style={styles.expert}>Name Last Name</Text>
                <Text style={styles.expert2}>RN</Text>
              </View>
              <View style={styles.expertWr}>
                <View style={styles.avatar}>
                  <Image source={require("../assets/images/oval3.png")} />
                </View>
                <Text style={styles.expert}>Name Last Name</Text>
                <Text style={styles.expert2}>RN</Text>
              </View>
            </ScrollView>
          </View>
          {/* previous question */}
          <View style={styles.previousQuetsionWR}>
            <View style={styles.fav}>
              <Text style={styles.titleFav}>My previous questions</Text>
            </View>
            <View style={styles.yellowBox}>
              <Text style={styles.prevQ}>What does brown discharge mean?</Text>
              <View style={styles.prevQInfo}>
                <View style={[styles.avatar, styles.avatarPrevQ]}>
                  <Text>Image</Text>
                </View>
                <View>
                  <Text> Answered by Kim Jacobs, RN</Text>
                  <Text>04/10/18</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: { flex: 1 },
  containerSt: {
    flexGrow: 1,
    backgroundColor: "#fafafa"
  },
  headerWr: {
    flex: 3
  },
  questionWr: {
    flex: 1,
    width: width - 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20
  },
  resultWr: {
    flex: 2,
    top: 20
  },
  previousQuetsionWR: {
    flex: 2,
    top: 50
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
    width: 300,
    fontFamily: "montserrat"
  },

  pinkCircleText: {
    fontSize: 35,
    textAlign: "left",
    top: 30,
    left: 45,
    fontFamily: "montserrat"
  },
  red: {
    color: "#d92405",
    fontFamily: "montserrat"
  },
  credits: {
    color: "#00267d",
    textAlign: "center",
    top: 60,
    paddingRight: 140,
    fontFamily: "avenir"
  },
  placeholderStyle: {
    fontSize: 15,
    fontFamily: "avenir"
  },
  question: {
    borderBottomWidth: 1,
    borderBottomColor: "#a2a2a2",
    paddingBottom: 10
  },
  buttonWr: {
    marginTop: 20,
    width: width - 50,
    height: 40,
    borderRadius: 15,
    backgroundColor: "#7c8fbb",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "avenir"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  avatarPrevQ: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  fav: { paddingTop: 20, paddingBottom: 20, paddingLeft: 20 },
  titleFav: {
    fontSize: 20,
    fontFamily: "avenir"
  },
  expert: {
    textAlign: "center",
    color: "#aaaaaa",
    fontFamily: "avenir"
  },
  expert2: {
    textAlign: "center",
    fontFamily: "avenir"
  },
  expertWr: {
    paddingRight: 15
  },
  scrollExpert: { flexDirection: "row", paddingLeft: 20 },
  yellowBox: {
    width: width - 40,
    height: 100,
    backgroundColor: "#f8c51e",
    alignSelf: "center",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 150
  },
  prevQ: {
    fontSize: 16,
    paddingBottom: 8,
    paddingTop: 5,
    fontFamily: "avenir"
  },
  prevQInfo: {
    flexDirection: "row",
    width: width - 70,
    justifyContent: "space-around"
  }
});
