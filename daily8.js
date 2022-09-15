//Write an algorithm that takes in a string and checks to make sure the parentheses are valid.
//all '(' should have a matching ')'
//parentheses should also be in the correct order(i.e. ')(' would not be valid)

//example: ()           -> true
//example: (([(8+13)])) -> true
//example: (()))()      -> false
//example: (            -> false
//example: ())())((()   -> false

function parensValid(input) {   
    var pars = " "   
    for (var i = 0; i < input.length; i++){     
        pars += input[i];
        console.log(pars)
        if (pars[i] == "("){  
            
            console.log("False")
        }
        else if(pars[i] == ")"){
            
        }
        else {    
            console.log("True")
            return    
        } 
    } 
}  
parensValid("()")
parensValid(")")