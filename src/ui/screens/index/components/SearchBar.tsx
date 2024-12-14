import { useState } from "react";
import {
    TextInput,
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
} from "react-native";
import { Colors } from "../../../colors";
import SortModal, { SortBy, SortByKey } from "./FilterModal";

export type SearchBarProps = {
    setQuery: (query: string) => void;
    query: string;
    sortBy: SortByKey;
    setSortBy: (sortBy: SortByKey) => void;
};

const SearchBar = ({ query, setQuery, sortBy, setSortBy }: SearchBarProps) => {
    const [showFilterModal, setShowFilterModal] = useState(false);

    const showModal = () => setShowFilterModal(true);
    const hideModal = () => setShowFilterModal(false);

    return (
        <>
            <SortModal
                value={sortBy}
                onRequestClose={hideModal}
                visible={showFilterModal}
                onChangeValue={setSortBy}
            />
            <View style={style.container}>
                <Image
                    source={require("../../../../../assets/search.png")}
                    style={style.iconSearch}
                />
                <TextInput
                    value={query}
                    onChangeText={setQuery}
                    placeholder="Cari nama, bank, atau nominal"
                    style={style.textInput}
                />
                <TouchableOpacity
                    style={style.containerSort}
                    onPress={showModal}
                >
                    <Text style={style.textSort}>{SortBy[sortBy]}</Text>
                    <Image
                        source={require("../../../../../assets/chevron.png")}
                        style={style.iconChevron}
                    />
                </TouchableOpacity>
            </View>
        </>
    );
};

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: Colors.White,
        alignItems: "center",
        paddingHorizontal: 8,
        borderRadius: 8,
    },
    textInput: {
        flex: 1,
        paddingVertical: 6,
        paddingStart: 6,
        fontWeight: "600",
    },
    iconSearch: {
        width: 17.6,
        height: 17.6,
    },
    containerSort: {
        flexDirection: "row",
        alignItems: "center",
        height: "100%",
        padding: 8,
        gap: 5.2,
    },
    textSort: {
        color: Colors.Orange,
        fontSize: 10.6,
        fontWeight: "600",
        paddingVertical: 5,
    },
    iconChevron: {
        width: 14.4,
        height: 8,
    },
});

export default SearchBar;
