import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainNavigation from "./src/ui/routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, View, Text } from "react-native";

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaProvider>
                <View style={style.container}>
                    <MainNavigation />
                </View>
            </SafeAreaProvider>
        </QueryClientProvider>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
});
