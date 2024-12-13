import {
    Modal,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageSourcePropType,
    Pressable,
} from "react-native";
import { Colors } from "../../../colors";

const SortBy = {
    none: "URUTKAN",
    nameAsc: "Nama A-Z",
    nameDesc: "Nama Z-A",
    dateDesc: "Tanggal Terbaru",
    dateAsc: "Tanggal Terlama",
};
export type SortByKey = keyof typeof SortBy;
const sortByEntries = Object.entries(SortBy) as Array<[SortByKey, string]>;

type ModalItemProps = {
    label: string;
    value: SortByKey;
    isChecked: boolean;
    onPress: () => void;
};

function ModalItem({ label, value, isChecked, onPress }: ModalItemProps) {
    let radioIcon: ImageSourcePropType;
    if (isChecked) {
        radioIcon = require("../../../../../assets/radio_check.png");
    } else {
        radioIcon = require("../../../../../assets/radio_uncheck.png");
    }

    return (
        <TouchableOpacity style={style.containerRadio} onPress={onPress}>
            <Image source={radioIcon} style={style.iconRadio} />
            <Text style={style.textRadio}>{label}</Text>
        </TouchableOpacity>
    );
}

export type SortModalProps = {
    value: SortByKey;
    onRequestClose?: () => void;
    visible: boolean;
    onChangeValue: (value: SortByKey) => void;
};

export default function SortModal({
    value: selectedValue,
    onRequestClose,
    onChangeValue,
    visible,
}: SortModalProps) {
    return (
        <Modal
            transparent={true}
            visible={visible}
            onRequestClose={onRequestClose}
        >
            <Pressable style={style.containerOverlay} onPress={onRequestClose}>
                <View
                    style={style.containerContent}
                    // Prevent `onRequestClose` propagated below
                    onStartShouldSetResponder={() => true}
                >
                    {sortByEntries.map(([value, label]) => {
                        const onPress = () => {
                            onChangeValue(value);
                            onRequestClose?.();
                        };

                        return (
                            <ModalItem
                                key={value}
                                value={value}
                                label={label}
                                onPress={onPress}
                                isChecked={value == selectedValue}
                            />
                        );
                    })}
                </View>
            </Pressable>
        </Modal>
    );
}

const style = StyleSheet.create({
    containerModal: {},
    containerOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.BlackTransparent,
        padding: 18.8,
    },
    containerContent: {
        backgroundColor: Colors.White,
        paddingVertical: 22,
        width: "100%",
    },
    containerRadio: {
        paddingVertical: 17.2,
        paddingHorizontal: 20.8,
        flexDirection: "row",
        gap: 9.6,
        alignItems: "center",
    },
    textRadio: {
        fontSize: 12.2,
        fontWeight: "600",
    },
    iconRadio: {
        width: 16,
        height: 16,
    },
});
