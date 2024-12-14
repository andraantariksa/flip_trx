import { useQuery, UseQueryResult } from "@tanstack/react-query";
import TransactionRepositoryImpl from "../../data/repository/transactionRepository";
import { SortByKey } from "../screens/index/components/FilterModal";
import Transaction from "../../domain/entities/transaction";

const sorter = {
    dateAsc: (trxA, trxB) =>
        new Date(trxA.createdAt).getTime() - new Date(trxB.createdAt).getTime(),
    dateDesc: (trxA, trxB) =>
        new Date(trxB.createdAt).getTime() - new Date(trxA.createdAt).getTime(),
    nameAsc: (trxA, trxB) => trxA.receiverName.localeCompare(trxB.receiverName),
    nameDesc: (trxA, trxB) =>
        trxB.receiverName.localeCompare(trxA.receiverName),
    none: () => 0,
} as Record<SortByKey, (trxA: Transaction, trxB: Transaction) => number>;

export default function useTransactionsQuery(
    sortBy: SortByKey,
    searchQuery: string | null = null,
): UseQueryResult<Transaction[] | undefined, Error> {
    return useQuery({
        queryKey: ["transactions"],
        queryFn: async () => {
            const transactionRepository = new TransactionRepositoryImpl();
            return await transactionRepository.getAll();
        },
        select: (transactions) => {
            if (transactions === undefined) {
                return undefined;
            }

            let filteredTransactions: Array<Transaction>;
            if (searchQuery !== null) {
                const searchPredicate = (transaction: Transaction) => {
                    const normalizedSearchQuery = searchQuery.toLowerCase();

                    const receiverNameMatch = transaction.receiverName
                        .toLowerCase()
                        .includes(normalizedSearchQuery);
                    const senderBankMatch = transaction.senderBank
                        .toLowerCase()
                        .includes(normalizedSearchQuery);
                    const receiverBankMatch = transaction.receiverBank
                        .toLowerCase()
                        .includes(normalizedSearchQuery);
                    const amountMatch = transaction.amount
                        .toString()
                        .includes(normalizedSearchQuery);
                    return (
                        receiverBankMatch ||
                        senderBankMatch ||
                        amountMatch ||
                        receiverNameMatch
                    );
                };
                filteredTransactions = transactions.filter(searchPredicate);
            } else {
                filteredTransactions = transactions;
            }

            if (sortBy === "none") {
                return filteredTransactions;
            }

            const sortedTransactions = [...filteredTransactions].sort(
                sorter[sortBy],
            );
            return sortedTransactions;
        },
    });
}
