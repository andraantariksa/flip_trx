import Transaction from "../../domain/entities/transaction";

const BASE_URL = "https://recruitment-test.flip.id/";

interface TransactionDto {
    id: string;
    amount: number;
    unique_code: number;
    status: "SUCCESS" | "PENDING";
    sender_bank: string;
    account_number: string;
    beneficiary_name: string;
    beneficiary_bank: string;
    remark: string;
    created_at: string;
    completed_at: string | null;
    fee: number;
}

export const getTransactions = async (): Promise<
    Record<string, TransactionDto>
> => {
    const url = new URL("frontend-test", BASE_URL).href;
    const response = await fetch(url);
    const data = await response.json();
    return data as Record<string, TransactionDto>;
};

export const transformToTransaction = (dto: TransactionDto): Transaction => {
    return {
        amount: dto.amount,
        code: dto.id,
        completedAt: dto.completed_at,
        createdAt: dto.created_at,
        fee: dto.fee,
        receiverBank: dto.beneficiary_bank,
        receiverName: dto.beneficiary_name,
        remark: dto.remark,
        receiverAccountNumber: dto.account_number,
        senderBank: dto.sender_bank,
        status: dto.status,
        uniqueCode: dto.unique_code,
    };
};

export const transformToTransactions = (
    object: Record<string, TransactionDto>,
): Array<Transaction> => {
    const values = Object.values(object);
    return values.map(transformToTransaction);
};
