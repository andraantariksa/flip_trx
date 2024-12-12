import { TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import * as Clipboard from "expo-clipboard";

export type TransactionIdProps = {
  transactionId: string;
};

function TransactionId({ transactionId }: TransactionIdProps) {
  const copyText = () => {
    Clipboard.setStringAsync(transactionId);
  };

  return (
    <TouchableOpacity style={style.containerHeader} onPress={copyText}>
      <Text style={style.textTitle}>ID TRANSAKSI: {transactionId}</Text>
      <Image
        source={require("../../../../../assets/copy.png")}
        style={style.iconCopy}
      />
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  containerHeader: {
    paddingHorizontal: 18.4,
    paddingVertical: 21.6,
    flexDirection: "row",
    gap: 5.6,
  },
  textTitle: {
    fontSize: 12.8,
    fontWeight: "600",
  },
  iconCopy: {
    width: 13.6,
    height: 16,
  },
});

export default TransactionId;
