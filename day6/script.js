const accountId = 12345678
let accountEmail = "abhi.vish1122@gmail.com"
var accountPassword = "112233"
accountCity = "Ayodhya"

// accountId = 2 // not allowed

accountEmail = "akash123@gmail.com"
accountPassword = "212121"
accountCity = "Noida"
let accontState;
console.log(accountId);
/*
  prefer not to use var 
  becouse of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accontState])


