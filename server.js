let superheroes = require('superheroes');

//kõikide superherode loetelu näitamine
//console.log(superheroes.all);

//random superkangelase leidmine nimekirast
console.log(superheroes.random()); 

superheroes.all.forEach(hero=> {
    console.log(hero);
});