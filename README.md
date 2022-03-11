# React JS Developer Position Quiz

## Q1
[Quize 001](./test1.ts)

## Q2
[Quize 002](./test1.ts)

## Q3
The code 
```js
if (recipe == 'SPANISH') {
   fudge = SPANISH_FUDGE;
   amt = base * SPANISH_FUDGE;
   sugar = 2 * bottom(amt) + top(amt) * 1.17;
} else if ((recipe == 'FRENCH') || (recipe == 'ENGLISH')) {
   fudge = (recipe == 'FRENCH') ? FRENCH_FUDGE : ENGLISH_FUDGE;
   amt = base * fudge;
   sugar = 2 * bottom(amt) + top(amt) * 1.17;
   if (recipe == 'FRENCH') {
       chocolate = 7;
   }
} else {
   fudge = 1;
   amt = base;
   sugar = 2 * bottom(amt) + top(amt) * 1.17;
}
``` 
Refactored to [Quize 003](./test3.js) to improve readibility and reduce the unnecessary complexity

## Q4
[Quize 003](./test4.js)

Since the method of the `fetch` request is `POST`, the body would need a JSON object instead of an encodedURI.

so `body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay` will simply be `body: json.json`

## Q5
[Quize 003](./test1.ts)