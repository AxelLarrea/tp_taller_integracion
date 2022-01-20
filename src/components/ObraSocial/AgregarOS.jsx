import React from 'react';
import boton_regresar from '../../assets/boton_regresar.png';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import '../../styles/AgregarOS.css';
import Header from '../Header';

const AgregarOS = ({text, btntext}) => {

    let location = useLocation();
    let npc = '';
    let splitstr = '';
    let nombre = '';
    let porcentaje = '';
    let cobertura = '';

    if (location.search.length !== 0) {
        splitstr = location.search.split('?nombre=')[1].split('&porcentaje=');
        npc = splitstr[1].split('&cobertura=');
        nombre = splitstr[0];
        porcentaje = npc[0];
        cobertura = npc[1];
    }
    
    console.log(`Nombre: ${nombre}, Porcentaje: ${porcentaje}, Cobertura: ${cobertura}`);


    return (
        <>
            <Header/>

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

