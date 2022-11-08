import Card from './Card';
import style from './styles/proyects.module.css'
//------- ASSETS PROJECTS -----
import ecologico2 from '../../assets/proyects/ecologico/ecologico2.jpg'
import ecologico3 from '../../assets/proyects/ecologico/ecologico3.jpg'
import ecologico4 from '../../assets/proyects/ecologico/ecologico4.jpg'
import ecologico5 from '../../assets/proyects/ecologico/ecologico5.jpg'

import cultural1 from '../../assets/proyects/culturales/cultural1.webp'
import cultural2 from '../../assets/proyects/culturales/cultural2.webp'
import cultural3 from '../../assets/proyects/culturales/cultural3.webp'
import cultural4 from '../../assets/proyects/culturales/cultural4.webp'

import rascacielo1 from '../../assets/proyects/rascacielo/rascacielo1.jpg'
import rascacielo2 from '../../assets/proyects/rascacielo/rascacielo2.jpg'
import rascacielo3 from '../../assets/proyects/rascacielo/rascacielo3.jpg'
import rascacielo4 from '../../assets/proyects/rascacielo/rascacielo4.jpg'

import estadio1 from '../../assets/proyects/estadio/estadio1.jpg'
import estadio2 from '../../assets/proyects/estadio/estadio2.jpg'
import estadio3 from '../../assets/proyects/estadio/estadio3.jpg'
import estadio4 from '../../assets/proyects/estadio/estadio4.jpg' 

const Proyects = () => {

    const ecologico = {
        title: 'Torre Commerzbank',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales nisl et erat finibus scelerisque. Curabitur quam nisl, porta et neque vitae, aliquam cursus massa.',
        img: [ecologico2, ecologico3, ecologico4, ecologico5],
        ubication: 'Fráncfort - Alemania',
        usd: '600.000.000 DM'

    }

    const cultural = {
        title: 'Centro Cultural Gabriela Mistral',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales nisl et erat finibus scelerisque. Curabitur quam nisl, porta et neque vitae, aliquam cursus massa.',
        img: [cultural1, cultural2, cultural3, cultural4],
        ubication: 'Santiago de Chile - Chile',
        usd: 'USD 12 000 000'
    }

    const rascacielo = {
        title: 'Alvear Tower',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales nisl et erat finibus scelerisque. Curabitur quam nisl, porta et neque vitae, aliquam cursus massa.',
        img: [rascacielo1, rascacielo2, rascacielo3, rascacielo4],
        ubication: 'Puerto Madero - Buenos Aires',
        usd: 'USD 130 000 000'
    }

    const estadio = {
        title: 'Estadio Unico de S. del Estero',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales nisl et erat finibus scelerisque. Curabitur quam nisl, porta et neque vitae, aliquam cursus massa.',
        img: [estadio1, estadio2, estadio3, estadio4],
        ubication: 'Santiago del Estero',
        usd: 'ARS 1.500 000 000'

    }

    return (
        <div className={style.contProject}>
            <div className={style.contTitle}>
                <h1>PROYECTOS</h1>
            </div>
            <div className={style.contCard}>
                <Card assetsProjects={ecologico}/>
                <Card assetsProjects={cultural}/>
                <Card assetsProjects={rascacielo}/>
                <Card assetsProjects={estadio}/>
            </div>
        </div>
    )
}

export default Proyects;