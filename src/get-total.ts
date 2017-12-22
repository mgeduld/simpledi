import { addTax as _addTax } from "./add-tax";
import { addTip as _addTip } from "./add-tip";

/*
All exported functions are higher-order functions that
take the returned function's dependencies as parameters.

By default, those parameters are set to the dependences
important into the module.

So if we call get total like this ...

getTotal()(5)

... It uses its default dependencies.

But we can inject other dependencies by calling it like this:

getTotal(injectedGetTax(), injectedAddTip())(5)
*/

export const getTotal = (addTax = _addTax(), addTip = _addTip()) => (
  price: number
) => {
  return addTax(price) + addTip(price) + price;
};
