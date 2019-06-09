import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import MaterialIcons from "./node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf";
import AppNavigator from "./navigation/AppNavigator";

import { Provider } from "react-redux";
import store from "./redux/store";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <Provider store={store}>
          <AppLoading
            startAsync={this._loadResourcesAsync}
            onError={this._handleLoadingError}
            onFinish={this._handleFinishLoading}
          />
        </Provider>
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/robot-dev.png"),
        require("./assets/images/robot-prod.png")
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        montserrat: require("./assets/fonts/Montserrat-Regular.otf"),
        "montserrat-semibold": require("./assets/fonts/Montserrat-SemiBold.otf"),
        avenir: require("./assets/fonts/Avenir.otf"),
        nunito: require("./assets/fonts/Nunito-Regular.ttf"),
        "nunito-medium": require("./assets/fonts/Nunito-Medium.ttf"),
        "nunito-light": require("./assets/fonts/Nunito-Light.ttf"),
        MaterialIcons
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
