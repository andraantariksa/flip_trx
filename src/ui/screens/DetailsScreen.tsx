import { View, Text, StyleSheet } from "react-native";

const Divider = () => <View style={style.divider} />;

export default function DetailScreen() {
    return <View>
        <View style={style.containerHeader}>
            <Text style={style.textTitle}>ID TRANSAKSI: #FT16526923</Text>
        </View>
        <Divider />
        <View style={style.containerStatus}>
            <Text style={style.textTitle}>DETAIL TRANSAKSI</Text>
            <Text style={style.textStatus}>Tutup</Text>
        </View>
        <Divider />
        <View style={style.containerContent}>
            <Text style={style.textTransfer}>Permata→BNI</Text>
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
        backgroundColor: 'red',
    },
    containerHeader: {
        paddingHorizontal: 18.4,
        paddingVertical: 21.6,
        flexDirection: 'row',
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
        color: 'red',
        fontSize: 12.8,
    },
    textInfoTitle: {
        fontSize: 12,
        fontWeight: '600',
    },
    textInfoSubtitle: {
        fontSize: 12,
    },
});
