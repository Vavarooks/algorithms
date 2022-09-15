const centsDict = {
    Quarter:25,
    Dimes:10,
    Nickels:5,
    Pennies:1
}
const change = {
    Quarter:0,
    Dimes:0,
    Nickels:0,
    Pennies:0
}
function coinChange(cents) {
    for(keys in centsDict) {
        console.log(keys)
        switch(keys) {
            case "Quarter":
                change[keys] = Math.floor(cents / 25)
            break;
            case "Dimes":
                var totalbefore = change["Quarter"] * 25
                var currentChange = cents - totalbefore;
                change[keys] = Math.floor(currentChange / 10)
            break;
            case "Nickels":
                var totalbefore = change["Dimes"] * 10 + change["Quarter"] * 25
                console.log(totalbefore);
                var currentChange = cents - totalbefore;
                console.log(currentChange);
                change[keys] = Math.floor(currentChange / 5)                
            break;
            case "Pennies":
                var totalbefore = change["Quarter"] * 25 + change["Dimes"] * 10 + change["Nickels"] * 5
                console.log(totalbefore);
                var currentChange = cents - totalbefore;
                change[keys] = Math.floor(currentChange / 1)   
            break;
        }

    }
    console.log(change);
}

coinChange(67)

//if you get the time, work on dollarAndCoinChange
//given a cent amount, return an object with the count
//of how many dollars(1s, 5s, 10s) and how many coins
//should be returned. NOTE: use whole cents, not decimals
//4632 -> 4 tens, 1 five, 1 one, 1 quarter, 0 dimes, 1 nickel, 2 pennies
function dollarAndCoinChange(cents){
}