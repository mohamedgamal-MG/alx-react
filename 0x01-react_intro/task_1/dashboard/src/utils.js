export function getFullYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
};
export const getFooterCopy = (isIndex) => (isIndex ? "Holberton School" : "Holberton School main dashboard");