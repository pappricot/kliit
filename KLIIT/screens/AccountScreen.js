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
        <View style={styles.headerWrapper}>
          <View>
            <Text style={styles.headerText}>Crystal</Text>
            <Text style={styles.headerText}>Adams</Text>
          </View>
          <View style={styles.imageStyle}>
            <Text>Image</Text>
          </View>
        </View>
        <View style={styles.optionsWrapper}>
          <Text>1</Text>
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
    justifyContent: "center",
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
    height: 100
  }
});
