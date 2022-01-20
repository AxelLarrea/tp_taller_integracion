import React from 'react';
import { Link } from 'react-router-dom';

const IndividualOS = () => {
    return (
        <div className="OS-container">
            <h2>Obra Social</h2>
            <div className="super-btn-container">
                <div className="btn-container-os">
                    <Link to="/obra-social/editar">
                        <button className="os-btn">Editar</button>
                    </Link>
                    <button className="os-btn">Eliminar</button>
                </div>
            </div>
        </div>
    );
}
 
export default IndividualOS;