export const formatDate = (date: string) => {
    const dateObj = new Date(date);

    const dayInMonth = dateObj.toLocaleString("id-ID", { day: "numeric" });
    const month = dateObj.toLocaleString("id-ID", { month: "long" });
    const year = dateObj.toLocaleString("id-ID", { year: "numeric" });

    return `${dayInMonth} ${month} ${year}`;
};
