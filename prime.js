// Program to check whether a number is Prime or not

let num = 4;
let isPrime = true;

// Ieterate loop from 2 to number
for(let i = 2; i <= num/2; i++){
  if(num % i == 0){
    isPrime = false;
  }
}
if(isPrime){
  console.log(num,"is prime");
}else{
  console.log(num,"is not prime");
}