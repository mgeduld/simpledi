import test from 'ava';
import {getTotal} from './get-total';

const addTaxDependency = () => (price: number): number => price + (price * 0.5);
const addTipDependency = () => (price: number): number => price + (price * 0.5);

test('getTotal', t => {
    // getTotal called with injected dependencies
    const actual = getTotal(addTaxDependency(), addTipDependency())(10);
    t.deepEqual(actual, 40); 
});