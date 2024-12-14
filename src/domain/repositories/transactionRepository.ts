import Transaction from "@/domain/entities/transaction";

interface TransactionRepository {
    getAll(): Promise<Array<Transaction>>;
}

export default TransactionRepository;
