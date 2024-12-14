import React from "react";
import "@testing-library/jest-native";
import { render, fireEvent } from "@testing-library/react-native";
import * as Clipboard from "expo-clipboard";
import TransactionId from "@/ui/screens/details/components/TransactionId";

describe("<TransactionId />", () => {
    test("Transaction ID copied on press", () => {
        const { getByTestId } = render(
            <TransactionId transactionId="TRX2000" />,
        );
        const spy = jest.spyOn(Clipboard, "setStringAsync");

        fireEvent.press(getByTestId("transactionId"));

        expect(spy).toHaveBeenCalledWith("TRX2000");
    });
});
