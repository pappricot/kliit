import React from "react";
import { Platform, Image, StyleSheet } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import AccountScreen from "../screens/AccountScreen";
import AskScreen from "../screens/AskScreen";
import DiscussScreen from "../screens/DiscussScreen";
import Settings from "../screens/accounts-screen/Settings";
import Payment from "../screens/accounts-screen/Payment";
import Legal from "../screens/accounts-screen/Legal";
import ChooseExpert from "../screens/ChooseExpert";

const AccountStack = createStackNavigator({
  Account: AccountScreen,
  Settings,
  Payment,
  Legal
});

AccountStack.navigationOptions = {
  tabBarLabel: "Account",
  // tabBarIcon: (
  //   <Image
  //     style={{ width: 30, height: 30 }}
  //     source={require("../assets/images/disabledCopy2x.png")}
  //   />
  // )
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-person` : "md-person"}
    />
  )
};

const AskStack = createStackNavigator(
  {
    Ask: AskScreen,
    ChooseExpert
  },
  {
    headerMode: "none",
    mode: "modal"
  }
);

AskStack.navigationOptions = {
  tabBarLabel: "Ask",
  // tabBarIcon: (
  //   <Image
  //     style={{ width: 30, height: 30 }}
  //     source={require("../assets/images/ask.png")}
  //   />
  // )
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-help" : "md-help"}
    />
  )
};

const DiscussStack = createStackNavigator({
  Discuss: DiscussScreen
});

DiscussStack.navigationOptions = {
  tabBarLabel: "Discuss",
  // tabBarIcon: <Image source={require("../assets/images/disabledCopy6.png")} />
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-people" : "md-people"}
    />
  )
};

export default createBottomTabNavigator({
  AccountStack,
  AskStack,
  DiscussStack
});
