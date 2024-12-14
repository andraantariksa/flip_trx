import { ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const useInsetsStyle = (): ViewStyle => {
    const insets = useSafeAreaInsets();
    return {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
    };
};

export default useInsetsStyle;
