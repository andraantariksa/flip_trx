import React, { useEffect, useState } from "react";
import { TransactionCard } from "./components/TransactionCard";
import { View, StyleSheet, FlatList } from "react-native";
import SearchBar from "./components/SearchBar";
import TransactionRepositoryImpl from "../../../data/repository/transactionRepository";
import Transaction from "../../../domain/entities/transaction";
import { useQuery } from "@tanstack/react-query";
import SortModal, { SortByKey } from "./components/FilterModal";

export const IndexScreen = () => {
    const { data } = useQuery({
        queryKey: ["transactions"],
        queryFn: async () => {
            const transactionRepository = new TransactionRepositoryImpl();
            return await transactionRepository.getAll();
        },
    });
    const [sortBy, setSortBy] = useState<SortByKey>("none");
    const [showFilterModal, setShowFilterModal] = useState(false);

    const showModal = () => setShowFilterModal(true);
    const hideModal = () => setShowFilterModal(false);

    return (
        <View style={style.container}>
            <SortModal
                value={sortBy}
                onRequestClose={hideModal}
                visible={showFilterModal}
                onChangeValue={setSortBy}
            />
            <SearchBar onPressSort={showModal} />
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
