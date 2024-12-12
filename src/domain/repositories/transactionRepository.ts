import Transaction from "../entities/transaction";

interface TransactionRepository {
    getAll(): Promise<Array<Transaction>>;
}

export default TransactionRepository;
