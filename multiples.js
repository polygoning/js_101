var sum = 0;
for (x = 0; x <= 1000; x++) {
   if (x % 3 === 0 | x % 5 === 0 | x % 6 === 0 | x % 9 === 0) {
       sum += x;
   }
}

console.log(sum);
