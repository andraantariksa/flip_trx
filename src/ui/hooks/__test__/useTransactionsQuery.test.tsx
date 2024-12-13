import React, { act } from "react";
import "@testing-library/jest-native";
import { render, renderHook, waitFor } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import useTransactionsQuery from "../useTransactionsQuery";
import TransactionRepositoryImpl from "../../../data/repository/transactionRepository";
import { transactionFixtures } from "../../../../__test__/fixtures/transactions";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SortByKey } from "../../screens/index/components/FilterModal";
import { formatDate } from "../../../utils/date";

jest.mock("../../../data/repository/transactionRepository");

const testQueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
});

const mockRepository = () => {
    const mocked =
        TransactionRepositoryImpl as unknown as jest.Mock<TransactionRepositoryImpl>;
    mocked.mockImplementation(() => ({
        getAll: jest.fn().mockResolvedValue(transactionFixtures),
    }));
};

const runHookAndWaitResult = async (
    sortBy: SortByKey,
    searchQuery: string | null = null,
) => {
    const { result, unmount } = renderHook(
        () => useTransactionsQuery(sortBy, searchQuery),
        {
            wrapper: ({ children }) => (
                <QueryClientProvider client={testQueryClient}>
                    {children}
                </QueryClientProvider>
            ),
        },
    );
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    unmount();
    return result.current;
};

describe("useTransactionsQuery", () => {
    test("data undefined when theres an error", async () => {
        const mocked =
            TransactionRepositoryImpl as unknown as jest.Mock<TransactionRepositoryImpl>;
        mocked.mockImplementation(() => ({
            getAll: jest.fn().mockRejectedValue(new Error("Network error")),
        }));

        const result = await runHookAndWaitResult("none");

        expect(result.data).toBeUndefined();
    });

    test("data sorted correctly using name `nameAsc`", async () => {
        mockRepository();

        const result = await runHookAndWaitResult("nameAsc");

        const dates = result.data!.map(
            (transaction) => transaction.receiverName,
        );
        expect(dates).toStrictEqual(["Andra", "Andri", "Indra"]);
    });

    test("data sorted correctly using name `nameDesc`", async () => {
        mockRepository();

        const result = await runHookAndWaitResult("nameDesc");

        const dates = result.data!.map(
            (transaction) => transaction.receiverName,
        );
        expect(dates).toStrictEqual(["Indra", "Andri", "Andra"]);
    });

    test("data sorted correctly using name `dateAsc`", async () => {
        mockRepository();

        const result = await runHookAndWaitResult("dateAsc");

        const dates = result.data!.map((transaction) =>
            formatDate(transaction.createdAt),
        );
        expect(dates).toStrictEqual([
            "30 Mei 2025",
            "29 Juni 2025",
            "30 Juni 2025",
        ]);
    });

    test("data sorted correctly using name `dateDesc`", async () => {
        mockRepository();

        const result = await runHookAndWaitResult("dateDesc");
        const dates = result.data!.map((transaction) =>
            formatDate(transaction.createdAt),
        );

        expect(dates).toStrictEqual([
            "30 Juni 2025",
            "29 Juni 2025",
            "30 Mei 2025",
        ]);
    });

    test("data sorted correctly using sortBy `none`", async () => {
        mockRepository();

        const result = await runHookAndWaitResult("none");

        expect(result.data).toStrictEqual(transactionFixtures);
    });

    test("data filtered correctly using sender or receiver bank code", async () => {
        mockRepository();

        const result = await runHookAndWaitResult("none", "BcA");

        const transactions = result.data!.map(
            ({ senderBank, receiverBank, code }) => ({
                code,
                senderBank,
                receiverBank,
            }),
        );
        expect(transactions).toStrictEqual([
            {
                code: "FT0001",
                senderBank: "bca",
                receiverBank: "bri",
            },
            {
                code: "FT0002",
                receiverBank: "bca",
                senderBank: "bri",
            },
        ]);
    });

    test("data filtered correctly using receiver name", async () => {
        mockRepository();

        const result = await runHookAndWaitResult("none", "inDrA");

        const transactions = result.data!.map(({ code, receiverName }) => ({
            code,
            receiverName,
        }));
        expect(transactions).toStrictEqual([
            {
                code: "FT0003",
                receiverName: "Indra",
            },
        ]);
    });

    test("data filtered correctly using amount", async () => {
        mockRepository();

        const result = await runHookAndWaitResult("none", "2500");

        const transactions = result.data!.map(({ code, amount }) => ({
            code,
            amount,
        }));
        expect(transactions).toStrictEqual([
            {
                code: "FT0002",
                amount: 2500,
            },
        ]);
    });

    test("data filtered correctly using amount and sorted with `dateAsc`", async () => {
        mockRepository();

        const result = await runHookAndWaitResult("dateAsc", "50");

        const transactions = result.data!.map(({ code, amount }) => ({
            code,
            amount,
        }));
        expect(transactions).toStrictEqual([
            {
                code: "FT0003",
                amount: 3500,
            },
            {
                code: "FT0002",
                amount: 2500,
            },
        ]);
    });
});
