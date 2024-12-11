import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IndexScreen } from "../screens/IndexScreen";
import DetailScreen from "../screens/DetailsScreen";
import { createStaticNavigation } from "@react-navigation/native";

export enum MainRoutes {
    Index = 'index',
    Detail = 'detail',
};

const MainStack = createNativeStackNavigator({
    screens: {
        [MainRoutes.Index]: IndexScreen,
        [MainRoutes.Detail]: DetailScreen
    },
});

const MainNavigation = createStaticNavigation(MainStack);

export default MainNavigation;
