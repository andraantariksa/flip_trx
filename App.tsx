import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainNavigation from "./src/ui/routes";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaView style={style.container}>
                <MainNavigation />
            </SafeAreaView>
        </QueryClientProvider>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
});
