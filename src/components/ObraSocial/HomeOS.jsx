import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import boton_regresar from '../../assets/boton_regresar.png';
import boton_agregar from '../../assets/boton_agregar.png';
import '../../styles/HomeOS.css';

import IndividualOS from './IndividualOS';

const HomeOS = () => {


    // Hook para guardar los datos de las Obras Sociales
    const [obras, setObras] = useState([]);
    
    const cargarObras = async () => {
        const response = await fetch("http://localhost:4000/obra-social");
        const data = await response.json();
        setObras(data);
    }

    useEffect(() => {
        cargarObras();
    }, []);

    
    return (
        <>
            <div className="btn-container">
                <div className="regresar-btn-os">
                    <Link to="/">
                        <img src={boton_regresar} alt="regresar"></img>
                        <h2>Regresar</h2>
                    </Link>
                </div>

                <div className="agregar-btn">
                    <Link to="/obra-social/agregar">
                        <h2>Agregar Obra Social</h2>
                        <img src={boton_agregar} alt="agregar"></img>
                    </Link>
                </div>
            </div>
            
            <div className="main-container">
                <div className="filter-container">
                    <h2>Filtros</h2>
                    <select name="filtro 1" className="filter">
                        <option value="opcion 1">Opción 1</option>
                        <option value="opcion 2">Opción 2</option>
                        <option value="opcion 3">Opción 3</option>
                    </select>

                    <select name="filtro 2" className="filter">
                        <option value="opcion 1">Opción 1</option>
                        <option value="opcion 2">Opción 2</option>
                        <option value="opcion 3">Opción 3</option>
                    </select>

                    <select name="filtro 3" className="filter">
                        <option value="opcion 1">Opción 1</option>
                        <option value="opcion 2">Opción 2</option>
                        <option value="opcion 3">Opción 3</option>
                    </select>

                    <select name="filtro 4" className="filter">
                        <option value="opcion 1">Opción 1</option>
                        <option value="opcion 2">Opción 2</option>
                        <option value="opcion 3">Opción 3</option>
                    </select>

                    <select name="filtro 5" className="filter">
                        <option value="opcion 1">Opción 1</option>
                        <option value="opcion 2">Opción 2</option>
                        <option value="opcion 3">Opción 3</option>
                    </select>
                </div>

                <div className="list-container">
                    <section>

                        {
                            obras.map( obra => {
                                return <IndividualOS
                                            obra={obra}
                                            key={obra.id}
                                            setObras={setObras}
                                            obras={obras}
                                        />
                            })
                        }

                    </section>
                </div>
            </div>
        </>
    );
}

export default HomeOS;