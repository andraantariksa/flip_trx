import React, { useEffect, useState } from "react";
import { TransactionCard } from "./components/TransactionCard";
import { View, StyleSheet, FlatList } from "react-native";
import SearchBar from "./components/SearchBar";
import TransactionRepositoryImpl from "../../../data/repository/transactionRepository";
import Transaction from "../../../domain/entities/transaction";
import { useQuery } from "@tanstack/react-query";

export const IndexScreen = () => {
    const { data } = useQuery({
        queryKey: ["transactions"],
        queryFn: async () => {
            const transactionRepository = new TransactionRepositoryImpl();
            return await transactionRepository.getAll();
        },
    });

    return (
        <View style={style.container}>
            <SearchBar />
            <View>
                <FlatList
                    data={data ?? []}
                    renderItem={({ item }) => (
                        <TransactionCard transaction={item} />
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={style.separatorTransaction} />
                    )}
                />
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
    separatorTransaction: {
        height: 6.4,
    },
});
