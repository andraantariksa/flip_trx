import React from "react";
import "@testing-library/jest-native";
import { render, fireEvent } from "@testing-library/react-native";
import FilterModal, { SortBy } from "@/ui/screens/index/components/FilterModal";

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
