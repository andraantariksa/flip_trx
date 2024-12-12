type Transaction = {
    code: string;
    amount: number;
    uniqueCode: number;
    status: "SUCCESS" | "PENDING";
    senderAccountNumber: string;
    senderBank: string;
    receiverBank: string;
    receiverName: string;
    remark: string;
    createdAt: Date;
    completedAt: Date | null;
    fee: number;
};

export default Transaction;
