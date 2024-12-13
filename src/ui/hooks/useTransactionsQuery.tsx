import { useQuery, UseQueryResult } from "@tanstack/react-query";
import TransactionRepositoryImpl from "../../data/repository/transactionRepository";
import Transaction from "../../domain/entities/transaction";

export default function useTransactionsQuery(): UseQueryResult<
    Transaction[],
    Error
> {
    return useQuery({
        queryKey: ["transactions"],
        queryFn: async () => {
            const transactionRepository = new TransactionRepositoryImpl();
            return await transactionRepository.getAll();
        },
    });
}
