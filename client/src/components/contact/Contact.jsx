import MapView from './mapView'
import style from './styles/contact.module.css'

const Contact = () => {

    return (
        <div className={style.contContact}>
            <div className={style.contTitle}>
                <h1>CONTACTO</h1>
            </div>
            <div className={style.contMap}>
                <MapView/>
            </div>
            <div className={style.contData}>
                <div className={style.contDataOne}>
                    <h4>PREGUNTAS</h4>
                    <div className={style.contTxt}>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque veniam repellat dolorum, facilis earum perferendis porro est minima quaerat.</p>
                    </div>
                    <div className={style.contInputs}>
                        <input placeholder='Nombre' className={style.input}/>
                        <input placeholder='Email' className={style.input}/>
                        <input placeholder='Asunto' className={style.input}/>
                        <textarea placeholder='Mensaje' className={style.input} rows={5} style={{resize: 'none'}}/>
                    </div>
                </div>
                <div className={style.contDataTwo}>
                    <div className={style.contDataSection}>
                        <h4>OFICINA</h4>
                        <p>Direccion de la oficina</p>
                        <p>Info adicional de oficina</p>
                        <p>Contacto comercial: contacto@mail.com</p>
                        <p>Consultas: consulta@mail.com</p>
                        <p>Telefono: 112223344</p>
                    </div>
                    <div className={style.contDataSection}>
                        <h4>TRABAJA CON NOSOTROS</h4>
                        <p>Si queres ser parte de nuestra empresa, manda un email con tu CV a postulante@mail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Contact;