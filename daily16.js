function fib(num){
    if(num === 1){
        return 0
    }
    else if(num === 2){
        return 1
    }
    else{
        fib(num-1) + fib(num-2)
        return
    }

}