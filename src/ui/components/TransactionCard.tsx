import React from "react";
import { View, Text, StyleSheet } from "react-native"

export const TransactionCard = () => {
    return <View style={style.container}>
        <View style={style.indicatorStart} />
        <View style={style.containerContent}>
            <View>
                <Text style={style.textTransfer}>Permata→BNI</Text>
                <Text style={style.textName}>-SYIFA SALSABYLA</Text>
                <Text style={style.textInfo}>Rp10.028. 8 April 2020</Text>
            </View>
            <Text style={style.status}>Berhasil</Text>
        </View>
    </View>;
};

const style = StyleSheet.create({
    container: {
        borderRadius: 8,
        flexDirection: 'row',
    },
    containerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingTop: 14,
        paddingBottom: 11.6,
        paddingStart: 15.6,
        paddingEnd: 9.6,
    },
    status: {
        fontSize: 9.92,
        borderRadius: 4,
        borderColor: 'red',
        borderWidth: 1.2,
        paddingVertical: 4.4,
        paddingHorizontal: 9.6,
    },
    indicatorStart: {
        backgroundColor: 'red',
        width: 5.2,
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
});

