import About from '../about/About'
import style from './styles/home.module.css'
import {Link} from 'react-router-dom'


const Home = () => {

    return (
        <>
            <div className={style.contHome}>
                <div className={style.contTitleHome}>
                    <h1 className={style.homeTitle}>INNOVAMOS LA CONSTRUCCION</h1>
                </div>
                <div className={style.contBtnHome}>
                    <Link to='contact'>
                        <button className={style.btnHome}>Contacto</button>
                    </Link>
                </div>
            </div>
            <About/>
        </>
        
    )
}

export default Home;