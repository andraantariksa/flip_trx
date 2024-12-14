import { ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const useInsetsStyle = (): ViewStyle => {
    const insets = useSafeAreaInsets();
    return {
        marginTop: insets.top,
        marginBottom: insets.bottom,
        marginLeft: insets.left,
        marginRight: insets.right,
    };
};

export default useInsetsStyle;
