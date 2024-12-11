import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IndexScreen } from "../screens/IndexScreen";
import DetailScreen from "../screens/DetailsScreen";
import { createStaticNavigation, StaticParamList } from "@react-navigation/native";

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

// Type hint for navigation
type MainStackParamList = StaticParamList<typeof MainStack>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends MainStackParamList {}
    }
}


const MainNavigation = createStaticNavigation(MainStack);

export default MainNavigation;