import style from './styles/values.module.css'
//----- IMPORT ASSETS ------
import values1 from '../../assets/images/values1.jpg'
import values2 from '../../assets/images/values2.jpg'
import values3 from '../../assets/images/values3.jpg'

const Values = () => {

    return (
        <div className={style.contValues}>
            <div className={style.contValueTxt}>
                <div>
                    <h1>NUESTROS VALORES</h1>
                </div>
                <div>
                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum consequatur dolorum, recusandae libero corrupti aut nam nulla voluptatum neque impedit accusantium culpa ipsum doloremque tenetur accusamus perspiciatis similique mollitia esse.</h5>
                </div>
            </div>
            <div className={style.contValuesSection}>
                <div className={style.sectionValue}>
                    <h2>CAPACITACION</h2>
                    <div className={style.sectionTxt}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugiat, vel delectus accusamus quisquam similique, dolorum libero fuga repellat dolor facilis maxime reprehenderit rerum earum expedita nam, labore quia deserunt.</p>
                    </div>
                    <img src={values1} alt='img' className={style.imgValues}/>
                </div>
                <div className={style.sectionValue}>
                    <h2>DINAMISMO</h2>
                    <div className={style.sectionTxt}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugiat, vel delectus accusamus quisquam similique, dolorum libero fuga repellat dolor facilis maxime reprehenderit rerum earum expedita nam, labore quia deserunt.</p>
                    </div>
                    <img src={values2} alt='img' className={style.imgValues}/>
                </div>
                <div className={style.sectionValue}>
                    <h2>FLEXIBILIDAD</h2>
                    <div className={style.sectionTxt}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugiat, vel delectus accusamus quisquam similique, dolorum libero fuga repellat dolor facilis maxime reprehenderit rerum earum expedita nam, labore quia deserunt.</p>
                    </div>
                    <img src={values3} alt='img' className={style.imgValues}/>
                </div>
            </div>
        </div>
    )
}

export default Values;