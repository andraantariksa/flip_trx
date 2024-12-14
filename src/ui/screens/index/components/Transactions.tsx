import { memo } from "react";
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native";
import useTransactionsQuery from "../../../hooks/useTransactionsQuery";
import { SortByKey } from "./FilterModal";
import Transaction from "../../../../domain/entities/transaction";
import { TransactionCard } from "./TransactionCard";

const TransactionSeparator = () => <View style={style.separatorTransaction} />;

const TransactionItem: ListRenderItem<Transaction> = ({ item }) => (
    <TransactionCard transaction={item} />
);

export type TransactionsProps = {
    sortBy: SortByKey;
    searchQuery: string;
};

const Transactions = ({ sortBy, searchQuery }: TransactionsProps) => {
    const { data } = useTransactionsQuery(sortBy, searchQuery);

    return (
        <FlatList
            data={data ?? []}
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
});
