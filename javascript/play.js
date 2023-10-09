//declaring variables
var  name='keneth';
let age=22;
age=34;
var hasHobbies=true;
console.log(name);
//let, variable can change
//const,-use when  variable will not change
//functions
function summarizeUser( UserName,userAge,userhasHobbies){
    return('i am' +UserName+'my age is'+userAge+' and my hobby is set to'+userhasHobbies
    );
}
console.log(summarizeUser(name,age,hasHobbies));