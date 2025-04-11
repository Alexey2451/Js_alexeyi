
interface GetDeclinationsProps {
    count: number;
    few: string;
    many: string;
    one: string;
    withoutCount?: boolean;
}

export const getDeclinations = ({ count, few, many, one, withoutCount }: GetDeclinationsProps) => {
    const isFactional = Math.round(count) !== count;
    let declension = many;
    if (isFactional) {
        declension = few;
    } else {
        const units = Math.abs(count % 10);
        const tens = Math.abs(count % 100);
        if (units === 1 && tens !== 11) {
            declension = one;
        } else if (2 <= units && units <= 4 && (tens < 10 || 20 <= tens)) {
            declension = few;
        }
    }

    if (withoutCount) {
        return `${declension}`;
    }

    return `${count}\u00A0${declension}`;
};
