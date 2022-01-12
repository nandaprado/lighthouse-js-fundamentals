// The function should return an empty array [] if given incorrect 
// parameters, such as:
// 1. start, end, or step being undefined
// 2. start being greater than end
// 3. step being 0, or negative

function range(start, end, step){
  let rangeArray = [];
   
  if (start === undefined || step === undefined || end === undefined || start > end || step <= 0){
    return rangeArray = [ ] ; 
  }

  while (start <= end){
    rangeArray.push(start);
    
    start += step;
  }

  return rangeArray
}

//test function
console.log(range(0, 10, 2)); /* expected output [ 0, 2, 4, 6, 8, 10 ] */
console.log(range(10, 30, 5)); /* expected output [ 10, 15, 20, 25, 30 ] */
console.log(range(-5, 2, 3)); /* expected output [ -5, -2, 1 ] */


