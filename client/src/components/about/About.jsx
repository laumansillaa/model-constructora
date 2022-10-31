import CarouselImg from './Carousel';
import style from './styles/about.module.css'
import Values from './Values';
// ------ Assets -----
import asset1 from '../../assets/images/asset1.jpg'
import asset2 from '../../assets/images/asset2.jpg'
import asset4 from '../../assets/images/asset4.jpg'
import asset5 from '../../assets/images/asset5.jpg'

const About = () => {

    const assetsImg=[asset1, asset2, asset4, asset5]

    return(
        <div className={style.contAbout}>
            <div className={style.contOneAbout}>
                <div className={style.contAboutOne}>
                    <h2 className={style.aboutTitle}>Nosotros</h2>
                    <div className={style.contInfoAbout}>
                        <p className={style.textAbout}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales nisl et erat finibus scelerisque. Curabitur quam nisl, porta et neque vitae, aliquam cursus massa. Fusce fermentum ante ac sapien ullamcorper, non rhoncus nisi varius. Pellentesque convallis vel sapien quis euismod. Proin quis turpis ut velit sollicitudin rutrum. Phasellus interdum mollis placerat. Curabitur luctus viverra lacus, ac maximus libero congue eget. Donec sapien erat, feugiat at justo nec, porta efficitur libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut blandit, urna ut faucibus ullamcorper, velit nulla mattis dolor, pretium placerat purus est vel magna. </p>
                    </div>
                </div>
                <div className={style.contAboutCarousel}>
                    <CarouselImg assetsImg={assetsImg}/>
                </div>
            </div>
            <div className={style.contTwoAbout}>
                <div className={style.contSections}>
                    <div>
                        <h2 className={style.sectionTitle}>1997</h2>
                        <label className={style.sectionLabel}>Año de Fundación</label>
                    </div>
                    <div>
                        <h2 className={style.sectionTitle}>190</h2>
                        <label className={style.sectionLabel}>Proyectos concretados</label>
                    </div>
                    <div>
                        <h2 className={style.sectionTitle}>19</h2>
                        <label className={style.sectionLabel}>Países</label>
                    </div>
                </div>
            </div>
            <Values/>
        </div>
    )
}

export default About;