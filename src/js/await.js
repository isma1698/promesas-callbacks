import {buscarHeroeAsync, buscarHeroe} from './promesas';

const heroesIds =['capi','iron','spider'];
const heroesPromesas = heroesIds.map(buscarHeroe);


export const obtenerHeroesArr = async()=>{
    return await Promise.all(heroesIds.map(buscarHeroe));
}

export const obtenerHeroesAwait = async(id)=>{
    try{
        const heroe =await buscarHeroeAsync(id);
        return heroe;
    }
    catch (err){
     console.log('catch!!!!!');
     return{
         nombre: 'sin nombre',
         poder: 'sin poder'
     };
    }
   
}


export const heroesCiclo = async()=>{
    console.time('HeroesCiclo');
    for await (const heroe of heroesPromesas){
        console.log(heroe);
    } 

    console.timeEnd('HeroesCiclo');
}


export const heroeIfAwait = async(id) =>{
    if ((await buscarHeroeAsync(id)).nombre == 'Ironman'){
        console.log("el mejor");
    }else{
        console.log('naaaa');
    }
}