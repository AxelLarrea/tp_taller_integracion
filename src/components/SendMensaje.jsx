import React from 'react';
import boton_regresar from '../assets/boton_regresar.png';
import {Link} from 'react-router-dom';
import '../styles/SendMensaje.css';

const SendMensaje = () => {

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