import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import SearchBar from "@/ui/screens/index/components/SearchBar";
import { SortByKey } from "@/ui/screens/index/components/FilterModal";
import useInsetsStyle from "@/ui/hooks/useInsetsStyle";
import Transactions from "@/ui/screens/index/components/Transactions";
import { StatusBar } from "expo-status-bar";

export const IndexScreen = () => {
    const insetsStyle = useInsetsStyle();
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState<SortByKey>("none");

    console.log(insetsStyle);

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
        paddingHorizontal: 8,
        paddingTop: 10,
        gap: 5.6,
    },
});
