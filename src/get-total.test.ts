import test from 'ava';
import {getTotal} from './get-total';
import {ICalc} from './calc';

const addTaxDependency = ():ICalc => (price: number): number => price + (price * 0.5);
const addTipDependency = ():ICalc => (price: number): number => price + (price * 0.5);

test('getTotal', t => {
    // getTotal called with injected dependencies
    const actual = getTotal(addTaxDependency(), addTipDependency())(10);
    t.deepEqual(actual, 40); 
});