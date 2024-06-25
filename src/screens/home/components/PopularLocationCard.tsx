import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { PopularLocation } from "../../../app/types";
import VerticalSpacer from "../../../components/VerticalSpacer";
import { FontAwesome } from "@expo/vector-icons";
import HorizontalSpacer from "../../../components/HorizontalSpacer";

type PopularLocationCardProps = {
  popularLocationItem: PopularLocation;
  onPress: () => void;
};

export default function PopularLocationCard({
  popularLocationItem,
  onPress,
}: PopularLocationCardProps) {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <ImageBackground
        source={popularLocationItem.locationImagePath}
        style={styles.backgroundImage}
      >
        <View style={styles.specsContainer}>
          <Text style={[styles.text, styles.location]}>
            {popularLocationItem.locationName}
          </Text>
        </View>
        <VerticalSpacer height={6} />
        <View
          style={[
            styles.specsContainer,
            {
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <FontAwesome name="star" size={12} color="#F8D675" />
          <HorizontalSpacer width={6} />
          <Text style={[styles.text, styles.starRate]}>
            {popularLocationItem.locationStarRate}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    height: 240,
    width: 188,
    resizeMode: "stretch", // or 'stretch',
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: 12,
  },
  specsContainer: {
    backgroundColor: "#4D5652",
    borderRadius: 59,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  text: {
    color: "white",
    fontWeight: "400",
  },
  location: {
    fontSize: 12,
  },
  starRate: {
    fontSize: 10,
  },
});
