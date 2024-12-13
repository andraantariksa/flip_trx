import { useQuery, UseQueryResult } from "@tanstack/react-query";
import TransactionRepositoryImpl from "../../data/repository/transactionRepository";
import { SortByKey } from "../screens/index/components/FilterModal";
import Transaction from "../../domain/entities/transaction";
import { useMemo } from "react";

export default function useTransactionsQuery(
    sortBy: SortByKey,
): UseQueryResult<Transaction[], Error> {
    const query = useQuery({
        queryKey: ["transactions"],
        queryFn: async () => {
            const transactionRepository = new TransactionRepositoryImpl();
            return await transactionRepository.getAll();
        },
    });
    const transactions = query.data;
    // Assume the `Transaction` data but `code` field never change
    const transactionsDependency = transactions
        ?.map((transaction) => transaction.code)
        ?.join(",");

    const transformedTransactions = useMemo(() => {
        if (transactions === undefined) {
            return undefined;
        }

        if (sortBy === "none") {
            return transactions;
        }

        const sorter: Record<
            SortByKey,
            (trxA: Transaction, trxB: Transaction) => number
        > = {
            dateAsc: (trxA, trxB) =>
                trxA.createdAt.getTime() - trxB.createdAt.getTime(),
            dateDesc: (trxA, trxB) =>
                trxB.createdAt.getTime() - trxA.createdAt.getTime(),
            nameAsc: (trxA, trxB) =>
                trxA.receiverName.localeCompare(trxB.receiverName),
            nameDesc: (trxA, trxB) =>
                trxB.receiverName.localeCompare(trxA.receiverName),
            none: () => 0,
        };

        const sortedTransactions = [...transactions].sort(sorter[sortBy]);
        return sortedTransactions;
    }, [transactionsDependency, sortBy]);

    return {
        ...query,
        data: transformedTransactions,
    } as UseQueryResult<Transaction[], Error>;
}
