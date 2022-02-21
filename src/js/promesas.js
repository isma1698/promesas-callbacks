const heroes ={
    capi:{
        nombre: 'steve rodgers',
        poder: 'golpes'
    },
    iron:{
        nombre: 'Ironman',
        poder: 'dinero'
    },
    spider:{
        nombre: 'Peter Parker',
        poder: 'telarañas'
    },

}

export const buscarHeroe = (id) =>{
    const heroe = heroes[id];

    return new Promise((resolve, reject)=>{
        if(heroe){
            setTimeout(()=>{
                resolve(heroe);
            },500);
            
        }else{
            reject(`No existe un heroe con el id: ${id}`);
        }
    });
}

export const buscarHeroeAsync = async(id) =>{
    const heroe = heroes[id];

        if(heroe){
           return heroe;
        }else{
            throw Error(`No existe un heroe con el id: ${id}`);
        }
    
}


const promesaLenta = new Promise((resolve, reject) =>{
    setTimeout(()=> resolve('promesa Lenta '),2000);

});
const promesaMedia = new Promise((resolve, reject) =>{
    setTimeout(()=> resolve('promesa media '),1500);

});
const promesaRapida = new Promise((resolve, reject) =>{
    setTimeout(()=> resolve('promesa rapida '),1000);

});

export{
    promesaLenta,
    promesaMedia,
    promesaRapida
}

