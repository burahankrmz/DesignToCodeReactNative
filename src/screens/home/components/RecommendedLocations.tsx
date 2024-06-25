import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import VerticalSpacer from "../../../components/VerticalSpacer";
import { RecommendedLocationList } from "../../../app/types";
import RecommendedLocationcard from "./RecommendedLocationcard";
import HorizontalSpacer from "../../../components/HorizontalSpacer";

export default function RecommendedLocations() {
  return (
    <View>
      <Text style={styles.titleText}>Recommended</Text>
      <VerticalSpacer height={12} />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <HorizontalSpacer width={16}/>}
        data={RecommendedLocationList}
        renderItem={({ item }) => (
          <RecommendedLocationcard recommendedLocationItem={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
    color: "#232323",
  },
});
