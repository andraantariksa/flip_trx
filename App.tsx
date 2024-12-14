import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainNavigation from "./src/ui/routes";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaProvider>
                {/* <SafeAreaView style={style.container}> */}
                <MainNavigation />
                {/* </SafeAreaView> */}
            </SafeAreaProvider>
        </QueryClientProvider>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
});
