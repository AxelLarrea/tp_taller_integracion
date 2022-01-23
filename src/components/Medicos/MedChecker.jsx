import React from 'react';
import {useNavigate} from 'react-router-dom';


const MedChecker = () => {

    let navigate = useNavigate();


    return (
        <>
            <div className="check-container">
                <h2>Ingrese el CUIL del Médico</h2>
                
                <form>
                    <input
                        type="text"
                        placeholder="__-________-_"
                        name="cuil"
                        id="cuil"
                        required
                    >
                    </input>
                    
                    <button className="verificar-btn" type="submit" onClick={() => {navigate("/medicos/agregar")}}>
                        <span>Verificar</span>
                    </button>
                </form>
            </div>
        </>
    );
}
 
export default MedChecker;