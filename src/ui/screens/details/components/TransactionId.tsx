import { TouchableOpacity, StyleSheet, Text } from "react-native";

export type TransactionIdProps = {
    transactionId: string;
};

function TransactionId({ transactionId }: TransactionIdProps) {
    return <TouchableOpacity style={style.containerHeader}>
        <Text style={style.textTitle}>ID TRANSAKSI: {transactionId}</Text>
    </TouchableOpacity>
};

const style = StyleSheet.create({
    containerHeader: {
        paddingHorizontal: 18.4,
        paddingVertical: 21.6,
        flexDirection: 'row',
    },
    textTitle: {
        fontSize: 12.8,
        fontWeight: '600',
    },
});

export default TransactionId;
