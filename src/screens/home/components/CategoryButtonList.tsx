import { View, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import CategoryButton from "./CategoryButton";
import { Category, CategoryList } from "../../../app/types";

export default function CategoryButtonList() {
  const [categoryList, setCategoryList] = useState(CategoryList);

  function changeSelectedCategory(selectedCategory: string) {
    const newCategoryList: Category[] = categoryList.map((category) => {
      if (category.categoryName === selectedCategory) {
        return {
          categoryName: category.categoryName,
          isSelected: true,
        };
      } else {
        return {
          categoryName: category.categoryName,
          isSelected: false,
        };
      }
    });
    setCategoryList(newCategoryList);
  }

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categoryList}
        renderItem={({ item }) => (
          <CategoryButton
            active={item.isSelected}
            btnText={item.categoryName}
            onTap={changeSelectedCategory}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 41,
  },
});
