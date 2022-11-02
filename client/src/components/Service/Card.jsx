import style from './styles/card.module.css'

const Card = ({title, description, imagen}) => {

    return (
        <div className={style.contCard}>
            <div className={style.contText}>
                <h1>{title}</h1>
                <div className={style.contDescription}>
                    <h6 className={style.description}>{description}</h6>
                </div>
            </div>
            <div className={style.zoom}>
                <img src={imagen} alt={`${imagen}`} className={style.cardImg}/>
            </div>
        </div>
    )
}

export default Card;