import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { PopularLocation, PopularLocationList } from "../app/types";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import VerticalSpacer from "../components/VerticalSpacer";
import TextButton from "../components/TextButton";
import HorizontalSpacer from "../components/HorizontalSpacer";

export default function DetailScreen({ route, navigation }: any) {
  const popularLocationItem: PopularLocation = route.params;
  //const popularLocationItem: PopularLocation = PopularLocationList[1];
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ height: 362 }}>
          <ImageBackground
            source={popularLocationItem.locationImagePath}
            style={styles.imageContainer}
            resizeMode="stretch"
          >
            <TouchableOpacity onPress={()=> navigation.pop()}>
              <View style={styles.backBtn}>
                <MaterialIcons
                  name="arrow-back-ios-new"
                  size={10}
                  color="#B8B8B8"
                />
              </View>
            </TouchableOpacity>
            <View style={styles.favoriteBtn}>
              <MaterialIcons name="favorite" size={24} color="#EC5655" />
            </View>
          </ImageBackground>
        </View>
        <VerticalSpacer height={7} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>{popularLocationItem.locationName}</Text>
          <TextButton
            btnText="Show map"
            btnStyle={{ fontSize: 14, fontWeight: "bold" }}
          />
        </View>
        <VerticalSpacer height={6} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons name="star" size={12} color="#B47820" />
          <HorizontalSpacer width={4} />
          <Text style={styles.rateAndReviewText}>
            {popularLocationItem.locationStarRate}
            {" (355 Reviews)"}
          </Text>
        </View>
        <Text style={styles.description}>
          Aspen is as close as one can get to a storybook alpine town in
          America. The choose-your-own-adventure possibilities—skiing, hiking,
          dining shopping and ....
        </Text>
        <VerticalSpacer height={9} />
        <TextButton
          btnText="Read more"
          btnStyle={{ fontSize: 14, fontWeight: "bold" }}
          suffixIcon={"expand-more"}
          suffixIconSize={24}
          suffixIconColor={"#196EEE"}
        />
        <VerticalSpacer height={37} />
        <Text style={[styles.title, { fontSize: 18 }]}>Facilities</Text>
        <VerticalSpacer height={16} />
        <View
          style={{
            height: 74,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.facilitySpecBox}>
            <MaterialIcons name="network-wifi" size={32} color="#B8B8B8" />
            <VerticalSpacer height={6} />
            <Text style={{ fontSize: 10, color: "#B8B8B8" }}>1 Heater</Text>
          </View>
          <View style={styles.facilitySpecBox}>
            <MaterialIcons name="dinner-dining" size={32} color="#B8B8B8" />
            <VerticalSpacer height={6} />
            <Text style={{ fontSize: 10, color: "#B8B8B8" }}>Dinner</Text>
          </View>
          <View style={styles.facilitySpecBox}>
            <MaterialIcons name="bathtub" size={32} color="#B8B8B8" />
            <VerticalSpacer height={6} />
            <Text style={{ fontSize: 10, color: "#B8B8B8" }}>1 Tub</Text>
          </View>
          <View style={styles.facilitySpecBox}>
            <MaterialIcons name="pool" size={32} color="#B8B8B8" />
            <VerticalSpacer height={6} />
            <Text style={{ fontSize: 10, color: "#B8B8B8" }}>Pool</Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          height: 90,
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 12, fontWeight: "600" }}>Price</Text>
            <Text
              style={{
                color: "#2DD7A4",
                fontSize: 24,
                fontFamily: "Montserrat_700Bold",
              }}
            >
              $199
            </Text>
          </View>
          <TouchableOpacity>
            <View style={styles.bookNowBtn}>
              <Text style={styles.bookNowBtnText}>Book Now</Text>
              <HorizontalSpacer width={10} />
              <FontAwesome name="long-arrow-right" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 20,
    position: "relative",
  },
  imageContainer: { borderRadius: 20, width: "100%", height: 340 },
  backBtn: {
    backgroundColor: "#F3F8FE",
    width: 40,
    height: 40,
    borderRadius: 8,
    position: "absolute",
    left: 12,
    top: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  favoriteBtn: {
    backgroundColor: "#F2F7FD",
    width: 44,
    height: 44,
    borderRadius: 80,
    position: "absolute",
    right: 14,
    bottom: -22,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#232323",
    fontFamily: "Montserrat_600SemiBold",
  },
  rateAndReviewText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#606060",
  },
  description: {
    color: "#3A544F",
    fontSize: 15,
    fontWeight: "500",
  },
  facilitySpecBox: {
    backgroundColor: "rgba(25, 110, 238, 0.05)",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  bookNowBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#196EEE",
    paddingVertical: 16,
    paddingHorizontal: 56,
    borderRadius: 16,
  },
  bookNowBtnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
