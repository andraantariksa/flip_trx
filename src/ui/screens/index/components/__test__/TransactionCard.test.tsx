import React from "react";
import { TransactionCard } from "../TransactionCard";
import "@testing-library/jest-native";
import { transactionFixture } from "../../../../../../__test__/fixtures/transactions";
import { render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";

jest.useFakeTimers();

describe("<TransactionCard />", () => {
    test("Text rendered correctly", () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <TransactionCard transaction={transactionFixture} />
            </NavigationContainer>,
        );
        expect(getByTestId("senderBank")).toHaveTextContent("BCA");
        expect(getByTestId("receiverBank")).toHaveTextContent("BRI");
        expect(getByTestId("info")).toHaveTextContent(
            "Rp3.959.008 ● 30 Juni 2025",
        );
        expect(getByTestId("receiverName")).toHaveTextContent("Andra");
        expect(getByTestId("status")).toHaveTextContent("Pengecekan");
    });
});
