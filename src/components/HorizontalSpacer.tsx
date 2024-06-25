import { View } from "react-native";
import React from "react";

type HorizontalSpacerProps = {
  width: number;
};

export default function HorizontalSpacer({ width }: HorizontalSpacerProps) {
  return <View style={{ width: width }} />;
}
