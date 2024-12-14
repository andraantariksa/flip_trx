export type TransactionStatus = "SUCCESS" | "PENDING";

type Transaction = {
    code: string;
    amount: number;
    uniqueCode: number;
    status: TransactionStatus;
    senderBank: string;
    receiverBank: string;
    receiverName: string;
    receiverAccountNumber: string;
    remark: string;
    createdAt: string;
    completedAt: string | null;
    fee: number;
};

export default Transaction;
