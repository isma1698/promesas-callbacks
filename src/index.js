//import { obtenerHeroesArr, obtenerHeroesAwait } from './js/await';
import { heroesCiclo ,heroeIfAwait} from './js/await';
import './styles.css';

// console.time('await');

// obtenerHeroesAwait('capi1').
// then(heroe =>{
//     console.log(heroe);

//     console.timeEnd('await');
// }).catch(console.warn);

heroesCiclo();
heroeIfAwait('spider');