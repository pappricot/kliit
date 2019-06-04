import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  List
} from "react-native";
import { WebBrowser, Icon } from "expo";

import { MonoText } from "../components/StyledText";
const width = Dimensions.get("window").width;
export default class AccountScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View
        style={styles.container}
        // contentContainerStyle={styles.contentContainer}
      >
        {/* Header */}
        <View style={styles.headerWrapper}>
          <View>
            <Text style={styles.headerText}>Crystal</Text>
            <Text style={styles.headerText}>Adams</Text>
          </View>
          <View style={styles.imageStyle}>
            <View style={styles.innerImageStyle} />
          </View>
        </View>
        {/* Body */}
        <View style={styles.optionsWrapper}>
          <View style={styles.optionWrapper}>
            <TouchableOpacity
              style={styles.accountOption}
              onPress={() => {
                this.props.navigation.navigate("Settings");
              }}
            >
              <Text style={styles.optionTxt}>Account Settings</Text>
              <Icon.Ionicons
                size={32}
                color={"grey"}
                name={
                  Platform.OS === "ios"
                    ? `ios-arrow-forward`
                    : "md-arrow-forward"
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.optionWrapper}>
            <TouchableOpacity
              style={styles.accountOption}
              onPress={() => {
                this.props.navigation.navigate("Payment");
              }}
            >
              <Text style={styles.optionTxt}>Payments and Credits</Text>
              <Icon.Ionicons
                size={32}
                color={"grey"}
                name={
                  Platform.OS === "ios"
                    ? `ios-arrow-forward`
                    : "md-arrow-forward"
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.optionWrapper}>
            <TouchableOpacity
              style={styles.accountOption}
              onPress={() => {
                this.props.navigation.navigate("Legal");
              }}
            >
              <Text style={styles.optionTxt}>Terms and Policies</Text>
              <Icon.Ionicons
                size={32}
                color={"grey"}
                name={
                  Platform.OS === "ios"
                    ? `ios-arrow-forward`
                    : "md-arrow-forward"
                }
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footerWrapper}>
          <View style={styles.yellowCircle} />
          <View style={styles.pinkCircle} />

          <View style={styles.brownCircle} />

          <View style={styles.blueCircle} />
          <TouchableOpacity style={styles.textSt}>
            <Text style={styles.textStyle}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    width: width
  },
  contentContainer: {},
  headerWrapper: {
    flex: 1,
    backgroundColor: "#fafafa",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  optionsWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    backgroundColor: "white"
  },
  footerWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 36,
    color: "#333333",
    fontFamily: "montserrat"
  },
  imageStyle: {
    backgroundColor: "#00267d",
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  innerImageStyle: {
    backgroundColor: "white",
    width: 80,
    height: 80,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30
  },
  optionWrapper: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#DFDEDE"
  },
  accountOption: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: width,
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20
  },
  pinkCircle: {
    position: "relative",
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#fea9dc",
    marginRight: 300
  },
  brownCircle: {
    position: "relative",
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#4a2324",
    marginRight: 220,
    marginTop: -50,
    marginBottom: 230
  },
  yellowCircle: {
    position: "relative",
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#f8c51e",
    marginLeft: 250,
    marginBottom: -100
  },
  blueCircle: {
    position: "absolute",
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#00267d",
    left: 320,
    bottom: 50
  },
  textSt: {
    position: "absolute"
  },
  textStyle: {
    color: "#dd3f24",
    fontSize: 18
  },
  optionTxt: {
    fontFamily: "avenir",
    fontSize: 18
  }
});
