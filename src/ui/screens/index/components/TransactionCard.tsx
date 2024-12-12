import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../../colors";
import { MainRoutes } from "../../../routes/routes";

export const TransactionCard = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={style.container}
            onPress={() => navigation.navigate(MainRoutes.Detail)}
        >
            <View style={style.indicatorStart} />
            <View style={style.containerContent}>
                <View>
                    <View style={style.containerBank}>
                        <Text style={style.textTransfer}>Permata</Text>
                        <Image
                            source={require("../../../../../assets/arrow-right.png")}
                            style={style.iconArrow}
                        />
                        <Text style={style.textTransfer}>BNI</Text>
                    </View>
                    <Text style={style.textName}>-SYIFA SALSABYLA</Text>
                    <Text style={style.textInfo}>Rp10.028. 8 April 2020</Text>
                </View>
                <Text style={style.status}>Berhasil</Text>
            </View>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    container: {
        borderRadius: 8,
        flexDirection: "row",
        backgroundColor: Colors.White,
        overflow: 'hidden',
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
    status: {
        fontSize: 9.92,
        borderRadius: 4,
        borderColor: Colors.Orange,
        borderWidth: 1.2,
        paddingVertical: 4.4,
        paddingHorizontal: 9.6,
    },
    indicatorStart: {
        backgroundColor: Colors.Orange,
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
