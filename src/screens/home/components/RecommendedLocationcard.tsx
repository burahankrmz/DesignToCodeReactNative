import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RecommendedLocation } from "../../../app/types";
import VerticalSpacer from "../../../components/VerticalSpacer";

type RecommendedLocationCardProps = {
  recommendedLocationItem: RecommendedLocation;
};

export default function RecommendedLocationcard({
  recommendedLocationItem,
}: RecommendedLocationCardProps) {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={recommendedLocationItem.locationImagePath}
        style={{ borderRadius: 12 }}
      />
      <VerticalSpacer height={6} />
      <Text style={styles.locationName}>
        {recommendedLocationItem.locationName}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 142,
    width: 174,
    padding: 4,
    backgroundColor: "#F4F4F4",
    borderRadius: 16,
  },
  locationName: {
    fontWeight: "600",
    fontSize: 14,
  },
});
