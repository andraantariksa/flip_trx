import React from "react";
import { TransactionCard } from "../components/TransactionCard";
import { View, StyleSheet } from "react-native";

export const IndexScreen = () => {
    return <View style={style.container}>
        <TransactionCard />
    </View>;
};

const style = StyleSheet.create({
    container: {
        padding: 4,
    },
});
