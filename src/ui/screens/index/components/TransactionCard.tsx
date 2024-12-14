import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    GestureResponderEvent,
    ViewStyle,
} from "react-native";
import { Colors } from "@/ui/colors";
import { MainRoutes } from "@/ui/routes/routes";
import Transaction, { TransactionStatus } from "@/domain/entities/transaction";
import { formatNumber } from "@/utils/number";
import { formatDate } from "@/utils/date";

export type TransactionCardProps = {
    transaction: Transaction;
};

export const TransactionCard = ({ transaction }: TransactionCardProps) => {
    const navigation = useNavigation();
    const { buttonStyle, indicatorStyle, status } = getStatusDisplay(
        transaction.status,
    );

    return (
        <TouchableOpacity
            style={style.container}
            onPress={() =>
                navigation.navigate(MainRoutes.Detail, {
                    transaction,
                })
            }
        >
            <View style={[style.indicator, indicatorStyle]} />
            <View style={style.containerContent}>
                <View>
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
                    <Text style={style.textName} testID="receiverName">
                        {transaction.receiverName.toUpperCase()}
                    </Text>
                    <Text style={style.textInfo} testID="info">
                        Rp{formatNumber(transaction.amount)} ●{" "}
                        {formatDate(transaction.createdAt)}
                    </Text>
                </View>
                <Text style={[style.statusBase, buttonStyle]} testID="status">
                    {status}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    container: {
        borderRadius: 8,
        flexDirection: "row",
        backgroundColor: Colors.White,
        overflow: "hidden",
    },
    containerContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingTop: 14,
        paddingBottom: 11.6,
        paddingStart: 15.6,
        paddingEnd: 9.6,
    },
    statusBase: {
        fontSize: 9.92,
        borderRadius: 4,
        paddingVertical: 4.4,
        paddingHorizontal: 9.6,
    },
    statusSuccess: {
        backgroundColor: Colors.Green,
        color: Colors.White,
    },
    statusPending: {
        borderColor: Colors.Orange,
        color: Colors.Black,
        borderWidth: 1.2,
    },
    indicator: {
        width: 5.2,
    },
    indicatorSuccess: {
        backgroundColor: Colors.Green,
    },
    indicatorPending: {
        backgroundColor: Colors.Orange,
    },
    textTransfer: {
        fontSize: 14.72,
    },
    textName: {
        paddingTop: 4.4,
        fontSize: 12,
    },
    textInfo: {
        paddingTop: 3.2,
        fontSize: 12.08,
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

type StatusDisplay = {
    status: string;
    buttonStyle: ViewStyle;
    indicatorStyle: ViewStyle;
};

const STATUS_DISPLAY_MAPPING: Record<TransactionStatus, StatusDisplay> = {
    PENDING: {
        status: "Pengecekan",
        buttonStyle: style.statusPending,
        indicatorStyle: style.indicatorPending,
    },
    SUCCESS: {
        status: "Berhasil",
        buttonStyle: style.statusSuccess,
        indicatorStyle: style.indicatorSuccess,
    },
};

const getStatusDisplay = (status: TransactionStatus): StatusDisplay => {
    return STATUS_DISPLAY_MAPPING[status];
};
