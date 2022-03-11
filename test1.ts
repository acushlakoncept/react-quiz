

function print(num: number) {
  let results: string[] = [];
  if (num % 2 === 0) results.push("candy");
  if (num % 11 === 0) results.push("bar");
  if ( num % 22 === 0) results.push('candybar')
  if(results.length > 0) {
    return results.join(' ')
  } else return num
}

console.log(print(2))
console.log(print(22))
console.log(print(44))
console.log(print(45))