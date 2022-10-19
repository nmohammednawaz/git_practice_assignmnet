// Program to check whether a string is palindrome or not.

let string = "ababab";
let isPalindrome = false;

// Ieterate loop from 0 to length of the string
for(let i = 0; i < string.length; i++){
  if(string[i] == string[string.length-i]){
    isPalindrome = true;
  }
}
if(isPalindrome==true){
  console.log(string,"is palindrome");
}else{
  console.log(string,"is not palindrome");
}