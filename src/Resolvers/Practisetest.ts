// export const isPrime = (value: number): boolean => {
//   if (value <= 1) return false;
//   if (value <= 3) return true;

//   if (value % 2 === 0 || value % 3 === 0) return false;
//   for (let i = 5; i * i <= value; i += 6) {
//     if (value % i === 0 || value % (i + 2) === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// export const factorial = (value: number): number => {
//   if (value < 0) throw "No factorail for negative number";
//   if (value === 0 || value === 1) return 1;
//   let result = 1;
//   for (let i = 2; i <= value; i++) {
//     result *= i;
//   }
//   return result;
// };
