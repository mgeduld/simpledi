// since addTax has no dependencies, there are no parameters
// for its higher order function. You can use it like this:
// addTax()(5)
export const addTip = () => (price: number): number => price + price * 0.15;
