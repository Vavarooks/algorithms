//recursively find the factorial of num and return it!
function factorial(num){
    if(num == 1){
        return 1;
    }
    else{
        return (num * factorial(num - 1))
    }

}

console.log(factorial(6))
