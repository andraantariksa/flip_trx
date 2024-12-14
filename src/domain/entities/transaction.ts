export type TransactionStatus = "SUCCESS" | "PENDING";

type Transaction = {
    code: string;
    amount: number;
    uniqueCode: number;
    status: TransactionStatus;
    senderAccountNumber: string;
    senderBank: string;
    receiverBank: string;
    receiverName: string;
    remark: string;
    createdAt: string;
    completedAt: string | null;
    fee: number;
};

export default Transaction;
