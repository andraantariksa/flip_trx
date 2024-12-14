import React, { useState } from "react";
import { TransactionCard } from "./components/TransactionCard";
import { View, StyleSheet, FlatList, ListRenderItem } from "react-native";
import SearchBar from "./components/SearchBar";
import SortModal, { SortByKey } from "./components/FilterModal";
import useTransactionsQuery from "../../hooks/useTransactionsQuery";
import useInsetsStyle from "../../hooks/useInsetsStyle";
import Transaction from "../../../domain/entities/transaction";

export const TransactionSeparator = () => <View style={style.separatorTransaction} />;

export const TransactionItem: ListRenderItem<Transaction> = ({ item }) => (
    <TransactionCard transaction={item} />
);

export const IndexScreen = () => {
    const insetsStyle = useInsetsStyle();
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState<SortByKey>("none");
    const { data } = useTransactionsQuery(sortBy, searchQuery);

    return (
        <View style={[style.container, insetsStyle]}>
            <SearchBar
                query={searchQuery}
                setQuery={setSearchQuery}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />
            <FlatList
                data={data ?? []}
                renderItem={TransactionItem}
                ItemSeparatorComponent={TransactionSeparator}
                contentContainerStyle={style.containerTransactionsContent}
                style={style.transactionsContent}
            />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 4,
        gap: 5.6,
    },
    separatorTransaction: {
        height: 6.4,
    },
    containerTransactionsContent: {
        paddingBottom: 16,
    },
    transactionsContent: {
        flex: 1,
    },
});
