
import CarouselProjects from "./CarouselProjects";
import style from './styles/card.module.css'
import {AiOutlineEnvironment} from 'react-icons/ai'
import {AiOutlineDollarCircle} from 'react-icons/ai'


const Card = ({assetsProjects}) => {

    return (
        <div className={style.contCard}>
            <div>
                <CarouselProjects pictures={assetsProjects.img}/>
            </div>
            <div className={style.contTitle}>
                <h3>{assetsProjects.title}</h3>
            </div>
            <div className={style.contDescription}>
                <h6>{assetsProjects.description}</h6>
            </div>
            <div className={style.contInfo}>
                <div className={style.info}>
                    <AiOutlineEnvironment className={style.icon}/>
                    <p>{assetsProjects.ubication}</p>
                </div>
                <div className={style.info}>
                    <AiOutlineDollarCircle className={style.icon}/>
                    <p>{assetsProjects.usd}</p>
                </div>
            </div>
        </div>
    )
}


export default Card;