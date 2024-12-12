export const formatDate = (date: Date) => {
    const dayInMonth = date.toLocaleString("id-ID", { day: "numeric" });
    const month = date.toLocaleString("id-ID", { month: "long" });
    const year = date.toLocaleString("id-ID", { year: "numeric" });

    return `${dayInMonth} ${month} ${year}`;
};
