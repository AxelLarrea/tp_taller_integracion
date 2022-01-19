import React from 'react';
import boton_regresar from '../../assets/boton_regresar.png';
import {Link} from 'react-router-dom';
import '../../styles/AgregarOS.css';

const AgregarOS = ({text, btntext}) => {
    return (
        <>
            
            <div className="regresar-btn">
                <Link to="/obra-social">
                    <img src={boton_regresar} alt="regresar"></img>
                    <h2>Regresar</h2>
                </Link>
            </div>
            
            <div className="super-container">
                <div className="form-container">
                    <h1>{text} Obra Social</h1>

                    <form>
                        <div className="input-container">
                            <input 
                                type="text" 
                                name="nombre"
                                id="nombre"
                                placeholder="Nombre"                
                            />

                            <input 
                                type="text" 
                                name="porcentaje"
                                id="porcentaje"
                                placeholder="Porcentaje"                
                            />

                            <input 
                                type="text" 
                                name="cobertura"
                                id="cobertura"
                                placeholder="Cobertura"                
                            />
                            
                            <button type="submit">
                                <h3>{btntext}</h3>
                            </button>
                            
                        </div>
                    </form>
                </div>
            </div>
            
        </>
    );
}

export default AgregarOS;

