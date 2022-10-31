import style from './styles/footer.module.css'
import {FaInstagram, FaEnvelope, FaWhatsapp} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={style.contFooter}>
            <div className={style.contLogo}>
                <h1>LOGO</h1>
            </div>
            <div className={style.contItems}>
                <a href='/' className={style.link}>Inicio</a>
                <a href='/' className={style.link}>Nosotros</a>
                <a href='/' className={style.link}>Proyectos</a>
                <a href='/' className={style.link}>Contacto</a>
                <a href='/' className={style.link}>Trabaja con nosotros</a>
            </div>
            <div className={style.contContacto}>
                <h5>MEDIOS DE CONTACTO</h5>
                {/* <h5></h5> */}
                <div className={style.contIcons}>
                    <FaWhatsapp className={style.icon}/>
                    <FaEnvelope className={style.icon}/>
                    <FaInstagram className={style.icon}/>
                </div>
                <h5>Nuestras oficinas</h5>
                <h6>Calle 75 n° 1245 Palermo, Buenos Aires</h6>
                <h6>Calle San Benito n° 452 Rosario, Santa Fe</h6>
            </div>
        </div>
    )
}


export default Footer;