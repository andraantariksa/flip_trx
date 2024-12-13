import React from "react";
import { TransactionCard } from "../TransactionCard";
import "@testing-library/jest-native";
import { transactionFixtures } from "../../../../../../__test__/fixtures/transactions";
import { render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";

describe("<TransactionCard />", () => {
    test("Text rendered correctly", () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <TransactionCard transaction={transactionFixtures[0]} />
            </NavigationContainer>,
        );
        expect(getByTestId("senderBank")).toHaveTextContent("BCA");
        expect(getByTestId("receiverBank")).toHaveTextContent("BRI");
        expect(getByTestId("info")).toHaveTextContent(
            "Rp3.959.008 ● 30 Juni 2025",
        );
        expect(getByTestId("receiverName")).toHaveTextContent("ANDRA");
        expect(getByTestId("status")).toHaveTextContent("Pengecekan");
    });
});
