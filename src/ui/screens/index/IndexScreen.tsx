import React, { useState } from "react";
import { TransactionCard } from "./components/TransactionCard";
import { View, StyleSheet, FlatList } from "react-native";
import SearchBar from "./components/SearchBar";
import SortModal, { SortByKey } from "./components/FilterModal";
import useTransactionsQuery from "../../hooks/useTransactionsQuery";

export const IndexScreen = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState<SortByKey>("none");
    const { data } = useTransactionsQuery(sortBy, searchQuery);
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
            <SearchBar
                onPressSort={showModal}
                setQuery={setSearchQuery}
                query={searchQuery}
                sortBy={sortBy}
            />
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
