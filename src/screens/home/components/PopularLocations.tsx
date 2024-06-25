import { StyleSheet, FlatList, View, Text } from "react-native";
import React from "react";
import VerticalSpacer from "../../../components/VerticalSpacer";
import { PopularLocation, PopularLocationList } from "../../../app/types";
import PopularLocationCard from "./PopularLocationCard";
import TextButton from "../../../components/TextButton";
import HorizontalSpacer from "../../../components/HorizontalSpacer";

type PopularLocationsProps = {
  onPressCard: (popularLocationItem: PopularLocation) => void;
}

export default function PopularLocations({onPressCard}: PopularLocationsProps) {
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.titleText}>Popular</Text>
        <TextButton btnText="See all" />
      </View>
      <VerticalSpacer height={12} />
      <FlatList
        ItemSeparatorComponent={() => <HorizontalSpacer width={28} />}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={PopularLocationList}
        renderItem={({ item }) => (
          <PopularLocationCard popularLocationItem={item} onPress={()=> onPressCard(item)}/>
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
