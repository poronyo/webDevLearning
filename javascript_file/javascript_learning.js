console.log('hello world');
console.log('---------------');


// let houseKeeper1 =  {
    // name : "test",
    // yearexperience : 5, 
    // age : 20 ,
    // language : ["english","Frence"],
// }
// 
// function bellBoy (name,age,workPermit,languages){
    // this.name = name;
    // this.age = age;
    // this.workPermitStatus = workPermit;
    // this.language = languages; 
// }
// 
// let man1 = new bellBoy("timmy",19,true,["Chinese","thai"])
// 
// console.log(man1.name)
// console.log(houseKeeper1)

function houseKeeper (yearsOfEperience, name, cleaningRepertoire){
    this.yearsOfEperience= yearsOfEperience;
    this.name =name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.cleaning = function(){
        console.log("cleaning in progress.....")
    }
}


let houseKeeper_new = new houseKeeper(12,"james",["bedroom"])
houseKeeper_new.cleaning()