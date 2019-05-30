import React, { Component } from "react";
import { TextInput } from "react-native";

export default class QuestionInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        placeholder="Type here to translate!"
        editable={true}
        maxLength={40}
      />
    );
  }
}
