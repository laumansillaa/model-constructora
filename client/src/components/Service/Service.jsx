import Card from './Card';
import CardReverse from './CardReverse';
import style from './styles/service.module.css'
import ecologico from '../../assets/images/ecologico.jpg'
import edimodern from '../../assets/images/edimodern.jpg'

const Service = () => {

    return (
        <div className={style.contService}>
            <div className={style.contTitle}>
                <h1 className={style.title}>SERVICIOS</h1>
            </div>
            <div className={style.contCards}>
                <Card title={'OBRAS ECOLOGICAS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales nisl et erat finibus scelerisque. Curabitur quam nisl, porta et neque vitae, aliquam cursus massa. Fusce fermentum ante ac sapien ullamcorper, non rhoncus nisi varius. Pellentesque convallis vel sapien quis euismod. Proin quis turpis ut velit sollicitudin rutrum. Phasellus interdum mollis placerat. Curabitur luctus viverra lacus, ac maximus libero congue eget. Donec sapien erat, feugiat at justo nec, porta efficitur libero.'} imagen={ecologico}/>
                <CardReverse title={'CENTROS CULTURALES'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales nisl et erat finibus scelerisque. Curabitur quam nisl, porta et neque vitae, aliquam cursus massa. Fusce fermentum ante ac sapien ullamcorper, non rhoncus nisi varius. Pellentesque convallis vel sapien quis euismod. Proin quis turpis ut velit sollicitudin rutrum.'} imagen={edimodern}/>
            </div>
            
        </div>
    )
}

export default Service;