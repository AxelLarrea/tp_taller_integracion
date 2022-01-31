import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';


const MedChecker = ({setForm, form}) => {

    let navigate = useNavigate();

    const [pass, setPass] = useState(false);

    const handleInputChange = e => {
        console.log(e.target.value);
        if(e.target.value.length === 11){
            setPass(true);
        }
        else{
            setPass(false);
        }
    }

    

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
                        onChange={handleInputChange}
                    >
                    </input>
                    
                    <button className="verificar-btn" type="submit" onClick={() => {pass && navigate("/medicos/agregar")}}>
                        <span>Verificar</span>
                    </button>
                </form>
            </div>
        </>
    );
}
 
export default MedChecker;