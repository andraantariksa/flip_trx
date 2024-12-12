import TransactionRepository from "../../domain/repositories/transactionRepository";
import { getTransactions, transformToTransactions } from "../network/flipService";

class TransactionRepositoryImpl implements TransactionRepository {
    getAll = async () => {
        const transactionRecord = await getTransactions();
        return transformToTransactions(transactionRecord);
    };
}

export default TransactionRepositoryImpl;
