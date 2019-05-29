import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";
const width = Dimensions.get("window").width;
export default class AccountScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
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
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Settings");
            }}
          >
            <Text>Account Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Payment");
            }}
          >
            <Text>Payments and Credits</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Legal");
            }}
          >
            <Text>Terms and Policies</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerWrapper}>
          <Text>1</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row"
  },
  headerWrapper: {
    flex: 1,
    backgroundColor: "#fafafa",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: width
  },
  optionsWrapper: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center"
  },
  footerWrapper: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 36,
    color: "#333333"
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
  }
});
