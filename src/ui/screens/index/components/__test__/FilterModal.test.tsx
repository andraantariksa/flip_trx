import React from "react";
import { TransactionCard } from "../TransactionCard";
import "@testing-library/jest-native";
import { transactionFixture } from "../../../../../../__test__/fixtures/transactions";
import { render, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import FilterModal, { SortBy } from "../FilterModal";

describe("<FilterModal />", () => {
    test("Should select the pressed value", () => {
        const onChangeValue = jest.fn();
        const { getByText } = render(
            <FilterModal
                onChangeValue={onChangeValue}
                visible={true}
                value="none"
            />,
        );

        const instance = getByText(SortBy.dateDesc);
        fireEvent.press(instance);
        expect(onChangeValue.mock.lastCall).toStrictEqual(["dateDesc"]);
    });
});
