import React from "react";
import "@testing-library/jest-native";
import { render } from "@testing-library/react-native";
import { transactionFixtures } from "@/__test__/fixtures/transactions";
import DetailScreen, { DetailScreenProps } from "../DetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

jest.mock(
    "react-native-safe-area-context",
    () => require("react-native-safe-area-context/jest/mock").default,
);

describe("<DetailScreen />", () => {
    test("Text rendered correctly", () => {
        const route: DetailScreenProps["route"] = {
            params: {
                transaction: transactionFixtures[0],
            },
        };
        const { getByTestId } = render(
            <SafeAreaProvider>
                <NavigationContainer>
                    <DetailScreen route={route} />
                </NavigationContainer>
            </SafeAreaProvider>,
        );

        expect(getByTestId("receiverName")).toHaveTextContent("ANDRA");
        expect(getByTestId("senderBank")).toHaveTextContent("BCA");
        expect(getByTestId("receiverBank")).toHaveTextContent("BRI");
        expect(getByTestId("receiverAccountNumber")).toHaveTextContent(
            "9642433064",
        );
        expect(getByTestId("remark")).toHaveTextContent(
            "Hi there, from fixtures",
        );
        expect(getByTestId("amount")).toHaveTextContent("Rp1.000");
        expect(getByTestId("uniqueCode")).toHaveTextContent("141");
        expect(getByTestId("createdAt")).toHaveTextContent("30 Juni 2025");
        expect(getByTestId("transactionId")).toHaveTextContent(
            "ID TRANSAKSI: #FT0001",
        );
    });
});
