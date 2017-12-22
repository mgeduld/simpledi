# A really simple, functional dependency-injection system for ES6. No classes required.

This will allow us to override any module imports, so we'll be able to test a
module by itself, without all the baggage of what it imports.

There's a little bit of extra code needed, because all exports must be higher-order
functions, but any DI system is going to have some boilerplate. I've tried
to keep it as minimal as possible, here.

Note: this is not a code library you need to import. It's just a demo of a coding technique.

# Export higher-order functions

Whereas normally we'd export this way:

`export const double = (n) => n * 2;`

We'll now export this way: 

`export const double = () => (n) => n * 2;`

# Import and inject:

Whereas, normally we'd use double this way:

```javascript
import {double} from './whatever';

export const total = (price) => price * double(price) + (price * .2);

double(5);
```

Now we'll use it this way:

```javascript
import {double as _double} from './whatever';

export const total = (double = _double()) => (price) => double(price) + (price * .2);
```

We can now call total in a couple of different ways:

```javascript
import {total} from './something';
total()(5); // uses total's default dependencies
```

or

```javascript
// ineffective double
const double = () => (n) => n;

import {total} from './something';

total(double())(5); // uses injected version of double
```

In some cases, the higher-order functions aren't necessary. For instance, in the last example, we could have done this:

```javascript
// ineffective double
const double => (n) => n;

import {total} from './something';

total(double(5); // uses injected version of double
```

But if we always use higher-order functions for exports, we don't have to think about when to use them and when not to. 

