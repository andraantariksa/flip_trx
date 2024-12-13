import React from "react";
import "@testing-library/jest-native";
import { render } from "@testing-library/react-native";
import { transactionFixture } from "../../../../../__test__/fixtures/transactions";
import DetailScreen, { DetailScreenProps } from "../DetailsScreen";

describe("<DetailScreen />", () => {
    test("Text rendered correctly", () => {
        const route: DetailScreenProps["route"] = {
            params: {
                transaction: transactionFixture,
            },
        };
        const { getByTestId } = render(<DetailScreen route={route} />);

        expect(getByTestId("receiverName")).toHaveTextContent("ANDRA");
        expect(getByTestId("senderBank")).toHaveTextContent("BCA");
        expect(getByTestId("receiverBank")).toHaveTextContent("BRI");
        expect(getByTestId("receiverSenderAccountNumber")).toHaveTextContent(
            "9642433064",
        );
        expect(getByTestId("remark")).toHaveTextContent(
            "Hi there, from fixttures",
        );
        expect(getByTestId("amount")).toHaveTextContent("Rp3.959.008");
        expect(getByTestId("uniqueCode")).toHaveTextContent("141");
        expect(getByTestId("createdAt")).toHaveTextContent("30 Juni 2025");
        expect(getByTestId("transactionId")).toHaveTextContent(
            "ID TRANSAKSI: #FT51296",
        );
    });
});
