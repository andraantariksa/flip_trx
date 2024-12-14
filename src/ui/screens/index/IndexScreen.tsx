import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import SearchBar from "./components/SearchBar";
import { SortByKey } from "./components/FilterModal";
import useInsetsStyle from "../../hooks/useInsetsStyle";
import Transactions from "./components/Transactions";

export const IndexScreen = () => {
    const insetsStyle = useInsetsStyle();
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState<SortByKey>("none");

    return (
        <View style={[style.container, insetsStyle]}>
            <SearchBar
                query={searchQuery}
                setQuery={setSearchQuery}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />
            <Transactions sortBy={sortBy} searchQuery={searchQuery} />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 4,
        gap: 5.6,
    },
});
