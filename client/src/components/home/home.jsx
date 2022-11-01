import About from '../about/About'
import style from './styles/home.module.css'


const Home = () => {

    return (
        <>
            <div className={style.contHome}>
                <div className={style.contTitleHome}>
                    <h1 className={style.homeTitle}>INNOVAMOS LA CONSTRUCCION</h1>
                </div>
            </div>
            <About/>
        </>
        
    )
}

export default Home;