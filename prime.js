// Program to check whether a number is Prime or not

let num = 4;
let isPrime = false;

// Ieterate loop from 1 to number
for(let i = 1; i < num; i++){
  if(num % i == 0){
    isPrime = true;
  }
}
if(isPrime){
  console.log(num,"is prime");
}else{
  console.log(num,"is not prime");
}