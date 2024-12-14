import { memo } from "react";
import {
    FlatList,
    ListRenderItem,
    RefreshControl,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import useTransactionsQuery from "@/ui/hooks/useTransactionsQuery";
import { SortByKey } from "@/ui/screens/index/components/FilterModal";
import Transaction from "@/domain/entities/transaction";
import { TransactionCard } from "@/ui/screens/index/components/TransactionCard";
import { Colors } from "@/ui/colors";

const TransactionSeparator = () => <View style={style.separatorTransaction} />;

const TransactionItem: ListRenderItem<Transaction> = ({ item }) => (
    <TransactionCard transaction={item} />
);

export type TransactionsProps = {
    sortBy: SortByKey;
    searchQuery: string;
};

const Transactions = ({ sortBy, searchQuery }: TransactionsProps) => {
    const { data, isFetching, refetch, error } = useTransactionsQuery(
        sortBy,
        searchQuery,
    );

    if (error) {
        return (
            <View style={style.containerRetry}>
                <Text style={style.textError}>{error.toString()}</Text>
                <TouchableOpacity
                    style={style.buttonRetry}
                    onPress={() => refetch()}
                >
                    <Text style={style.textRetry}>Retry</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <FlatList
            data={data ?? []}
            refreshControl={
                <RefreshControl refreshing={isFetching} onRefresh={refetch} />
            }
            renderItem={TransactionItem}
            ItemSeparatorComponent={TransactionSeparator}
            contentContainerStyle={style.containerTransactionsContent}
            style={style.transactionsContent}
        />
    );
};

export default memo(Transactions);

const style = StyleSheet.create({
    separatorTransaction: {
        height: 6.4,
    },
    containerTransactionsContent: {
        paddingBottom: 16,
    },
    transactionsContent: {
        flex: 1,
    },
    textError: {
        color: Colors.Orange,
        fontSize: 16,
        textAlign: "center",
    },
    containerRetry: {
        marginTop: 16,
        alignItems: "center",
        gap: 8,
    },
    textRetry: {
        fontSize: 12,
        textAlign: "center",
        color: Colors.White,
    },
    buttonRetry: {
        backgroundColor: Colors.Orange,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 8,
    },
});
