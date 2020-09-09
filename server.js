let superheroes = require('superheroes');

//kõikide superherode loetelu näitamine
//console.log(superheroes.all);

//random superkangelase leidmine nimekirast
console.log(superheroes.random()); 

/*superheroes.all.forEach(hero=> {
    console.log(hero);
});*/

/*
TASK 1 
1. get the name of all supervilliains 
2. get random sv name
3. maka a random superhero fight a random supervillian in the console.log()
*/

// list on superv
let supervillains=require('supervillains');
//console.log(supervillains.all);

supervillains.all.forEach(supervillain =>{
    console.log(supervillain);
} );

//random nimi 
console.log(supervillains.random());

//võitlemine 
console.log(`${superheroes.random()} fights ${supervillains.random()}`);

