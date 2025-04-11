export const calculateDiscount = ({ price, discountPrice }: { price: number; discountPrice: number }) => {
    const res = Number.parseInt(`${((price - discountPrice) / price) * 100}`);

    return res === 100 ? 0 : res;
};
