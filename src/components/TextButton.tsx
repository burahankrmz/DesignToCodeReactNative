import { StyleSheet, Text, TextStyle, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from '@expo/vector-icons';

type TextButtonProps = {
  btnText: string;
  btnStyle?: TextStyle;
  suffixIcon?: any;
  suffixIconSize? : number;
  suffixIconColor? : any;
};

export default function TextButton({ btnText, btnStyle, suffixIcon, suffixIconSize, suffixIconColor }: TextButtonProps) {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={{flexDirection: "row", alignItems: "center"}}>
        <Text style={[styles.btnText, btnStyle]}>{btnText}</Text>
        {suffixIcon !== undefined ? (<MaterialIcons name={suffixIcon} size={suffixIconSize} color={suffixIconColor} /> ): (null)}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#196EEE",
  },
});
