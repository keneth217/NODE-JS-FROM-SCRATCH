//create objects
const person={
    name:'keneth',age:20,
    greet(){
        console.log('hi ,i am'+this.name);
    }
};
console.log(person)
person.greet();
const copiedPerson={...person}
console.log(copiedPerson)
//arays
const hobies=['play','cook'];
hobies.push('programming')
console.log(hobies.map(hobby=>'hobby:'+hobby))
console.log(hobies)
//spread/rest operators
const copiedArray=[...hobies]///pull ou elements or proprties
console.log(copiedArray)