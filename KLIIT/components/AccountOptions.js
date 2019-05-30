import { TouchableOpacity, Text } from "react-native";
import { Icon } from "expo";

export default (AccountOptions = ({ name, route }) => {
  return (
    <TouchableOpacity
      style={styles.accountOption}
      onPress={() => {
        this.props.navigation.navigate("Settings");
      }}
    >
      <Text>{name}}</Text>
      <Icon.Ionicons
        name={Platform.OS === "ios" ? `ios-arrow-forward` : "md-arrow-forward"}
      />
    </TouchableOpacity>
  );
});
