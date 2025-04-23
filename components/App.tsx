import React from "react";
import { View, StyleSheet } from "react-native";

import CompPadrao, { Comp1, Comp2 } from './Multi';
import { Primeiro } from "./Primeiro";

export function App() {
  return (
    <View style={style.App}>
      <CompPadrao></CompPadrao>
      <Comp1></Comp1>
      <Comp2></Comp2>
      <Primeiro></Primeiro>
    </View>
  );
}

const style = StyleSheet.create({
  App: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center"
  },

})