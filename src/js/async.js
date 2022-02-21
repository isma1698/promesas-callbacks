import './styles.css';
//import {promesaLenta, promesaMedia, promesaRapida} from './js/promesas';
import {buscarHeroe, buscarHeroeAsync} from './js/promesas'



buscarHeroe('capi')
.then(heroe => console.log(heroe))
.catch(console.warn);


buscarHeroeAsync('spider')
.then(heroe => console.log(heroe)).catch(console.error);



// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([promesaLenta, promesaMedia, promesaRapida])
// .then(console.log)
// .catch(console.warn);

// console.log("primero esto despues la promesa");

