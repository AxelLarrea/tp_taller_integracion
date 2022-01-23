import React from 'react';
import {Link} from 'react-router-dom';
import boton_regresar from '../../assets/boton_regresar.png';

const FormComponent = ({text}) => {
    return (
        <>
            <div className="regresar-btn">
                <Link to="/medicos">
                    <img src={boton_regresar} alt="regresar"></img>
                    <h2>Regresar</h2>
                </Link>
            </div>

            <div className="super-form-container">
                <div className="med-form-container">
                    <h2>{text} Médico</h2>
                    <form className="med-form">
                        <div className="fst-inputs">
                            <input type="text" placeholder="Nombre" id="nombre" name="nombre"></input>
                            <input type="text" placeholder="Apellido" id="apellido" name="apellido"></input>
                            <input type="date" id="fecha" name="fecha"></input>

                        </div>

                        <div className="fst-inputs">
                            <input type="text" placeholder="DNI" id="dni" name="dni"></input>
                            <input type="text" placeholder="CUIL" id="cuil" name="cuil"></input>
                            <input type="text" placeholder="------------------" id="?" name="?"></input>
                        </div>

                        <div className="snd-inputs">
                            <input type="text" placeholder="Correo Electrónico" id="email" name="email"></input>
                            <input type="text" placeholder="Número de Celular" id="cel" name="cel"></input>
                        </div>

                        <div className="snd-inputs">
                            <input type="text" placeholder="Provincia" id="provincia" name="provincia"></input>
                            <input type="text" placeholder="Ciudad" id="ciudad" name="ciudad"></input>
                        </div>

                        <div className="trd-inputs">
                            <input type="text" placeholder="Dirección" id="direccion" name="direccion"></input>
                            <input type="text" placeholder="Código Postal" id="cp" name="cp"></input>
                            <input type="text" placeholder="Género" id="genero" name="genero"></input>
                            <input type="text" placeholder="Grupo Sanguíneo" id="grupo sanguineo" name="grupo sanguineo"></input>
                        </div>
                        
                        <div className="fth-inputs">
                            <input type="text" placeholder="Especialidad" id="especialidad" name="especialidad"></input>
                            <input type="text" placeholder="Mutual que acepta" id="mutual" name="mutual"></input>
                        </div>

                        <button type="submit">{text}</button>
                    </form>
                </div>

            </div>
        </>
    );
}
 
export default FormComponent;