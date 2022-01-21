import React from 'react';
import boton_regresar from '../assets/boton_regresar.png';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router';
import '../styles/SendMensaje.css';



const SendMensaje = () => {

    let location = useLocation();
    let cyu = '';
    let correo = '';
    let mensaje = '';

    if (location.search.length !== 0) {
        cyu = location.search.split('?nombre=')[1].split('&message=');
        correo = cyu[0].replace('%40', '@');
        mensaje = cyu[1];
    }
    
    console.log(`Correo: ${correo}, Mensaje: ${mensaje}`);


    return (
        <>
            <div className="regresar-btn">
                <Link to="/">
                    <img src={boton_regresar} alt="regresar"></img>
                    <h2>Regresar</h2>
                </Link>
            </div>

            <div className="message-super-container">
                <div className="message-form-container">
                    <h1>Enviar Mensaje</h1>

                    <form>
                        <div className="message-input-container">
                            <input
                                type="text" 
                                name="nombre"
                                id="nombre"
                                placeholder="Nombre del médico"                
                            />

                            {/* <input 
                                type="text" 
                                name="mensaje"
                                id="mensaje"
                                maxLength="300"
                            /> */}
                            
                            {/* <div 
                                role="textbox" 
                                contenteditable="true" 
                                className="mensaje"
                            >

                            </div> */}

                            <textarea
                                    name="message"
                            >

                            </textarea>

                            <button type="submit">
                                <h3>Enviar</h3>
                            </button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
 
export default SendMensaje;