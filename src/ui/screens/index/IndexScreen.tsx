import React from "react";
import { TransactionCard } from "./components/TransactionCard";
import { View, StyleSheet } from "react-native";
import SearchBar from "./components/SearchBar";

export const IndexScreen = () => {
    return (
        <View style={style.container}>
            <SearchBar />
            <View>
                <TransactionCard />
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 4,
        gap: 5.6,
    },
});
