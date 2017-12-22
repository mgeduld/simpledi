import {getTotal} from './get-total';

// getTotal called without injecting dependencies
// It will use its imported defaults
console.log(getTotal()(5));