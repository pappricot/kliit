import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import AccountScreen from "../screens/AccountScreen";
import AskScreen from "../screens/AskScreen";
import DiscussScreen from "../screens/DiscussScreen";

const AccountStack = createStackNavigator({
  Account: AccountScreen
});

AccountStack.navigationOptions = {
  tabBarLabel: "Account",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-person${focused ? "" : "-outline"}`
          : "md-person"
      }
    />
  )
};

const AskStack = createStackNavigator({
  Ask: AskScreen
});

AskStack.navigationOptions = {
  tabBarLabel: "Ask",
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
