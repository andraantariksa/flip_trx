import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IndexScreen } from "../screens/index/IndexScreen";
import DetailScreen from "../screens/details/DetailsScreen";
import { createStaticNavigation, StaticParamList } from "@react-navigation/native";
import { Colors } from "../colors";
import { MainRoutes } from "./routes";

const MainStack = createNativeStackNavigator({
    screenOptions: {
        contentStyle: {
            backgroundColor: Colors.Gray,
        },
    },
    screens: {
        [MainRoutes.Index]: IndexScreen,
        [MainRoutes.Detail]: DetailScreen
    },
});

// Type hint for navigation
type MainStackParamList = StaticParamList<typeof MainStack>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends MainStackParamList {}
    }
}


const MainNavigation = createStaticNavigation(MainStack);

export default MainNavigation;
