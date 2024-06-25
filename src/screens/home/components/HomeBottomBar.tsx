import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

export default function HomeBottomBar() {
  const [selectedPage, setSelectedPage] = useState(0);
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        flexDirection: "row",
        paddingVertical: 24,
        paddingHorizontal: 71,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        height: 75,
        borderRadius: 32,
        elevation: 45,
      }}
    >
      {selectedPage == 0 ? (
        <MaterialCommunityIcons name="home-minus" size={24} color="#196EEE" />
      ) : (
        <TouchableOpacity onPress={() => setSelectedPage(0)}>
          <MaterialCommunityIcons
            name="home-minus-outline"
            size={24}
            color="#B8B8B8"
          />
        </TouchableOpacity>
      )}
      {selectedPage == 1 ? (
        <MaterialCommunityIcons name="ticket-confirmation" size={24} color="#196EEE" />
      ) : (
        <TouchableOpacity onPress={() => setSelectedPage(1)}>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            size={24}
            color="#B8B8B8"
          />
        </TouchableOpacity>
      )}
      {selectedPage == 2 ? (
        <MaterialCommunityIcons name="cards-heart" size={24} color="#196EEE" />
      ) : (
        <TouchableOpacity onPress={() => setSelectedPage(2)}>
          <MaterialCommunityIcons
            name="cards-heart-outline"
            size={24}
            color="#B8B8B8"
          />
        </TouchableOpacity>
      )}
      {selectedPage == 3 ? (
        <Ionicons name="person" size={24} color="#196EEE" />
      ) : (
        <TouchableOpacity onPress={() => setSelectedPage(3)}>
          <Ionicons
            name="person-outline"
            size={24}
            color="#B8B8B8"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  activeIcon: {},
});
