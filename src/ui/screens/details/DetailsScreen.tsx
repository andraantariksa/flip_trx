import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../../colors";
import TransactionId from "./components/TransactionId";

const Divider = () => <View style={style.divider} />;

export default function DetailScreen() {
    return <View style={style.container}>
        <TransactionId transactionId="#FT16526923" />
        <Divider />
        <View style={style.containerStatus}>
            <Text style={style.textTitle}>DETAIL TRANSAKSI</Text>
            <Text style={style.textStatus}>Tutup</Text>
        </View>
        <Divider />
        <View style={style.containerContent}>
            <View style={style.containerBank}>
                <Text style={style.textTransfer}>
                    Permata
                </Text>
                <Image source={require('../../../../assets/arrow-right.png')} style={style.iconArrow} />
                <Text style={style.textTransfer}>
                    BNI
                </Text>
            </View>
            <View style={style.containerColumn}>
                <View style={style.containerRow}>
                    <View style={style.containerCellLeft}>
                        <Text style={style.textInfoTitle}>-SYIFA SALSABYLA</Text>
                        <Text style={style.textInfoSubtitle}>0313955548</Text>
                    </View>
                    <View style={style.containerCellRight}>
                        <Text style={style.textInfoTitle}>NOMINAL</Text>
                        <Text style={style.textInfoSubtitle}>Rp10.028</Text>
                    </View>
                </View>
                <View style={style.containerRow}>
                    <View style={style.containerCellLeft}>
                        <Text style={style.textInfoTitle}>BERITA TRANSFER</Text>
                        <Text style={style.textInfoSubtitle}>Coba mbanking yey</Text>
                    </View>
                    <View style={style.containerCellRight}>
                        <Text style={style.textInfoTitle}>KODE UNIK</Text>
                        <Text style={style.textInfoSubtitle}>50</Text>
                    </View>
                </View>
                <View style={style.containerRow}>
                    <View style={style.containerCellLeft}>
                        <Text style={style.textInfoTitle}>WAKTU DIBUAT</Text>
                        <Text style={style.textInfoSubtitle}>8 April 2020</Text>
                    </View>
                    <View style={style.containerCellRight} />
                </View>
            </View>
        </View>
    </View>;
};

const style = StyleSheet.create({
    divider: {
        height: 2,
        width: '100%',
        backgroundColor: Colors.Gray,
    },
    containerStatus: {
        paddingHorizontal: 18.4,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    },
    containerRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerCellLeft: {
        flex: 2,
    },
    containerCellRight: {
        flex: 1,
    },
    textTitle: {
        fontSize: 12.8,
        fontWeight: '600',
    },
    textTransfer: {
        fontSize: 15.6,
        fontWeight: '600',
    },
    textStatus: {
        color: Colors.Orange,
        fontSize: 12.8,
    },
    textInfoTitle: {
        fontSize: 12,
        fontWeight: '600',
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
        flexDirection: 'row',
        alignItems: 'center',
    },
});
