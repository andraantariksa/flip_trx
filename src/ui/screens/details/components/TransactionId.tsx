import { TouchableOpacity, StyleSheet, Text } from "react-native";
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
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  containerHeader: {
    paddingHorizontal: 18.4,
    paddingVertical: 21.6,
    flexDirection: "row",
  },
  textTitle: {
    fontSize: 12.8,
    fontWeight: "600",
  },
});

export default TransactionId;
