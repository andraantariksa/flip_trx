import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IndexScreen } from "@/ui/screens/index/IndexScreen";
import DetailScreen from "@/ui/screens/details/DetailsScreen";
import {
    createStaticNavigation,
    StaticParamList,
} from "@react-navigation/native";
import { Colors } from "@/ui/colors";
import { MainRoutes } from "@/ui/routes/routes";

const MainStack = createNativeStackNavigator({
    screenOptions: {
        contentStyle: {
            backgroundColor: Colors.Gray,
        },
    },
    screens: {
        [MainRoutes.Index]: {
            screen: IndexScreen,
            options: {
                title: "Transactions",
                headerShown: false,
            },
        },
        [MainRoutes.Detail]: {
            screen: DetailScreen,
            options: {
                title: "Transaction Details",
            },
        },
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
