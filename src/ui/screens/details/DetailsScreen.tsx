import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors } from "../../colors";
import TransactionId from "./components/TransactionId";
import { StaticScreenProps, useNavigation } from "@react-navigation/native";
import Transaction from "../../../domain/entities/transaction";
import { formatNumber } from "../../../utils/number";
import { formatDate } from "../../../utils/date";

export type DetailScreenProps = StaticScreenProps<{
    transaction: Transaction;
}>;

export default function DetailScreen({ route }: DetailScreenProps) {
    const navigation = useNavigation();
    const { transaction } = route.params;

    return (
        <View style={style.container}>
            <TransactionId transactionId={`#${transaction.code}`} />
            <View style={style.divider} />
            <View style={style.containerStatus}>
                <Text style={style.textTitle}>DETAIL TRANSAKSI</Text>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Text style={style.textStatus}>Tutup</Text>
                </TouchableOpacity>
            </View>
            <View style={style.divider} />
            <View style={style.containerContent}>
                <View style={style.containerBank}>
                    <Text style={style.textTransfer} testID="senderBank">
                        {transaction.senderBank.toUpperCase()}
                    </Text>
                    <Image
                        source={require("@/assets/arrow-right.png")}
                        style={style.iconArrow}
                    />
                    <Text style={style.textTransfer} testID="receiverBank">
                        {transaction.receiverBank.toUpperCase()}
                    </Text>
                </View>
                <View style={style.containerColumn}>
                    <View style={style.containerRow}>
                        <View style={style.containerCellLeft}>
                            <Text
                                style={style.textInfoTitle}
                                testID="receiverName"
                            >
                                {transaction.receiverName.toUpperCase()}
                            </Text>
                            <Text
                                style={style.textInfoSubtitle}
                                testID="receiverAccountNumber"
                            >
                                {transaction.receiverAccountNumber}
                            </Text>
                        </View>
                        <View style={style.containerCellRight}>
                            <Text style={style.textInfoTitle}>NOMINAL</Text>
                            <Text
                                style={style.textInfoSubtitle}
                                testID="amount"
                            >
                                Rp{formatNumber(transaction.amount)}
                            </Text>
                        </View>
                    </View>
                    <View style={style.containerRow}>
                        <View style={style.containerCellLeft}>
                            <Text style={style.textInfoTitle}>
                                BERITA TRANSFER
                            </Text>
                            <Text
                                style={style.textInfoSubtitle}
                                testID="remark"
                            >
                                {transaction.remark}
                            </Text>
                        </View>
                        <View style={style.containerCellRight}>
                            <Text style={style.textInfoTitle}>KODE UNIK</Text>
                            <Text
                                style={style.textInfoSubtitle}
                                testID="uniqueCode"
                            >
                                {transaction.uniqueCode}
                            </Text>
                        </View>
                    </View>
                    <View style={style.containerRow}>
                        <View style={style.containerCellLeft}>
                            <Text style={style.textInfoTitle}>
                                WAKTU DIBUAT
                            </Text>
                            <Text
                                style={style.textInfoSubtitle}
                                testID="createdAt"
                            >
                                {formatDate(transaction.createdAt)}
                            </Text>
                        </View>
                        <View style={style.containerCellRight} />
                    </View>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    divider: {
        height: 2,
        width: "100%",
        backgroundColor: Colors.Gray,
    },
    containerStatus: {
        padding: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    containerContent: {
        paddingHorizontal: 18.4,
        paddingVertical: 13.2,
    },
    containerColumn: {
        gap: 24,
        paddingTop: 10,
    },
    container: {
        backgroundColor: Colors.White,
        marginTop: 18.8,
    },
    containerRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    containerCellLeft: {
        flex: 2,
    },
    containerCellRight: {
        flex: 1,
    },
    textTitle: {
        fontSize: 12.8,
        fontWeight: "600",
        paddingHorizontal: 14.4,
    },
    textTransfer: {
        fontSize: 15.6,
        fontWeight: "600",
    },
    textStatus: {
        color: Colors.Orange,
        fontSize: 12.8,
        paddingVertical: 16,
        paddingHorizontal: 14.4,
    },
    textInfoTitle: {
        fontSize: 12,
        fontWeight: "600",
    },
    textInfoSubtitle: {
        fontSize: 12,
    },
    iconArrow: {
        width: 14.8,
        height: 11.2,
    },
    containerBank: {
        gap: 2.4,
        flexDirection: "row",
        alignItems: "center",
    },
});
