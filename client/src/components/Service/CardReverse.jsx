import style from './styles/cardReverse.module.css'

const CardReverse = ({title, description, imagen}) => {

    return (
        <div className={style.contCard}>
            <div className={style.contText}>
                <h1>{title}</h1>
                <div className={style.contDescription}>
                    <h6 className={style.description}>{description}</h6>
                </div>
            </div>
            <div>
                <img src={imagen} alt={`${imagen}`} className={style.cardImg}/>
            </div>
        </div>
    )
}

export default CardReverse;