import { buscarHeroe as buscarHeroeCallbacks } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css';

// const heroeid = prompt("cual heroe quieres");
const heroeid ='capi';
const heroeid2 ='spider';


Promise.all([buscarHeroe(heroeid), buscarHeroe(heroeid2)])
.then(([heroe1, heroe2]) =>{
      console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} al campo`);
}).catch(err =>{
    alert(err);
}).finally(()=>{
    console.log('se termino el promise.all');
});

//promise

// buscarHeroe(heroeid).then(heroe =>{
//     console.log(`enviando a ${heroe.nombre} por chelas`);
// })



//callback

// buscarHeroe(heroeid, (err,heroe1)=>{
//     if(err){return console.error(err);}
//     buscarHeroe(heroeid2, (err, heroe2)=>{
//         if(err){return console.error(err);}
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} al campo`);
//     })
// })

console.log("primero esto despues la promesa");