// Program to check whether a number is Prime or not

let num = 4;
let isPrime = 0;

// Ieterate loop from 1 to number
for(let i = 2; i < num/2; i++){
  if(num % i == 0){
    isPrime = 2;
  }
}
if(isPrime){
  console.log(num,"is prime");
}else{
  console.log(num,"is not prime");
}