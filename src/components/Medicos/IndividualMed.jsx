import React from 'react';
import { Link } from 'react-router-dom';

const IndividualMed = ({medico_obj}) => {

    const {cuil, nombre, apellido} = medico_obj;

    
    return (
        <div className="super-os-container">
            <div className="OS-container">
                <h2>{`${nombre} ${apellido}`}</h2>
                <div className="super-btn-container">
                    <div className="btn-container-os">
                        <Link to={`editar/${cuil}`}>
                            <button className="os-btn">Editar</button>
                        </Link>
                        <button className="os-btn">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndividualMed;