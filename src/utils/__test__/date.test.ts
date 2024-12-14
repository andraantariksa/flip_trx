import { formatDate } from "@/utils/date";

describe("formatDate", () => {
    test("Format single digit day of month correctly", () => {
        const formattedDate = formatDate(new Date("1234-12-01"));
        expect(formattedDate).toBe("1 Desember 1234");
    });

    test("Format double digit date correctly", () => {
        const formattedDate = formatDate(new Date("2025-06-30"));
        expect(formattedDate).toBe("30 Juni 2025");
    });
});
