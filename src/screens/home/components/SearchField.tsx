import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import HorizontalSpacer from "../../../components/HorizontalSpacer";

type SearchFieldProps = {
  placeHolder: string;
};

export default function SearchField({ placeHolder }: SearchFieldProps) {
  return (
    <View style={styles.searchField}>
      <Feather name="search" size={20} color="#B8B8B8" />
      <HorizontalSpacer width={8}></HorizontalSpacer>
      <TextInput placeholder={placeHolder} style={{ flexDirection: "row" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchField: {
    borderRadius: 24,
    backgroundColor: "#F3F8FE",
    width: "100%",
    padding: 16,
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.1,
    shadowColor: "#709BD0",
    shadowRadius: 27,
    flexDirection: "row",
    alignItems: "center",
  },
});
