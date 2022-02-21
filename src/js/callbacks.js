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

//el callback de retorno

export const buscarHeroe = (id, callback)=>{
    const heroe = heroes[id];
    if(heroe){
        callback(null, heroe);
    }else{
        callback(`no existe un heroe con el id: ${id}`);
    }
    

}