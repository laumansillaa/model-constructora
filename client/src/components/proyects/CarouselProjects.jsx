import {Carousel} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import style from './styles/carouselProjects.module.css'


const CarouselProjects = ({pictures}) => {

    return (
        <Carousel className={style.carouselImg} variant='dark'>
                {
                    pictures.map(e => {
                        return (
                            <Carousel.Item key={`${e}`} className={style.carouselImg}>
                                <img src={e} alt={`${e}`} className={style.img}/>
                            </Carousel.Item>
                        )
                    })
                }
        </Carousel>
    )
}

export default CarouselProjects;