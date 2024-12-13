import Transaction from "../../src/domain/entities/transaction";

export const transactionFixture: Transaction = {
    amount: 3959008,
    code: "FT51296",
    completedAt: new Date("2025-06-30T03:24:01"),
    createdAt: new Date("2025-06-30T03:24:01"),
    fee: 2,
    receiverBank: "bri",
    receiverName: "Andra",
    senderAccountNumber: "9642433064",
    remark: "Hi there, from fixttures!",
    senderBank: "bca",
    status: "PENDING",
    uniqueCode: 141,
};
