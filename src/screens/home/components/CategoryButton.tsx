import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

type CategoryButton = {
  active: boolean;
  btnText: string;
  onTap: (selectedCategory: string) => void;
};

export default function CategoryButton({
  active,
  btnText,
  onTap,
}: CategoryButton) {
  return (
    <TouchableOpacity onPress={() => onTap(btnText)}>
      <View style={[styles.btn, active ? styles.btnActive : null]}>
        <Text style={[styles.btnText, active ? styles.textActive : null]}>
          {btnText}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  btnActive: {
    backgroundColor: "rgba(25, 110, 238, 0.05)",
    borderRadius: 33,
  },
  btnText: {
    color: "#B8B8B8",
    fontSize: 14,
    fontWeight: "400",
  },
  textActive: {
    color: "#196EEE",
    fontWeight: "bold",
  },
});
