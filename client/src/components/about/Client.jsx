import style from './styles/client.module.css'
//------- IMPORT ASSETS -----
import disney from '../../assets/svg/disney.svg'
import cocacola from '../../assets/svg/cocacola.svg'
import bmw from '../../assets/svg/bmw.svg'
import nike from '../../assets/svg/nike.svg'

const Client = () => {

    return (
        <div className={style.contClient}>
            <h1>NUESTROS CLIENTES</h1>
            <div className={style.contImg}>
                <div>
                    <img src={disney} alt='img' className={style.imgClient}/>
                </div>
                <div>
                    <img src={cocacola} alt='img' className={style.imgClient} />
                </div>
                <div>
                    <img src={bmw} alt='img' className={style.imgClient} />
                </div>
                <div>
                    <img src={nike} alt='img' className={style.imgClient} />
                </div>
            </div>
        </div>
    )
}

export default Client;