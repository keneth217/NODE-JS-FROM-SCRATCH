//create objects
const person={
    name:'keneth',age:20,
    greet(){
        console.log('hi ,i am'+this.name);
    }
};
console.log(person)
//destructure syntax
const printName=({name})=>{console.log(name)}
printName(person)