import { ImageSourcePropType } from "react-native";
import { AssetPaths, Categories } from "./constants";

export interface Category {
    categoryName: string;
    isSelected: boolean;
}

export interface PopularLocation {
    locationName: string;
    locationStarRate: number;
    locationImagePath: ImageSourcePropType;
}

export interface RecommendedLocation {
    locationName: string;
    locationImagePath: ImageSourcePropType;
}

export const CategoryList : Category[] = Categories.map((category, index) => {
    return {
        categoryName: category,
        isSelected: index === 0 ? true : false
    }
});

export const PopularLocationList: PopularLocation[] = [
    {
        locationName: "AlleyPalace",
        locationStarRate: 4.1,
        locationImagePath: AssetPaths.popularLocationImage1
    },
    {
        locationName: "Coeurdes Alpes",
        locationStarRate: 4.5,
        locationImagePath: AssetPaths.popularLocationImage2
    }
];

export const RecommendedLocationList: RecommendedLocation[] = [
    {
        locationName: "AlleyPalace",
        locationImagePath: AssetPaths.recommendedLocationImage1
    },
    {
        locationName: "Coeurdes Alpes",
        locationImagePath: AssetPaths.recommendedLocationImage2
    }
];