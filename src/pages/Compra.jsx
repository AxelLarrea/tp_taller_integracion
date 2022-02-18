import React, { useState } from 'react';
import Header from '../components/Header';
import './Cobros.css';


const Compra = () => {


    const [formCompra, setFormCompra] = useState({
        precio: '',
        paciente: '',
        obra_social: '',
        medico: ''
    });

    const [datos, setDatos] = useState();

    const handleChange = (e) => {
        setFormCompra({...formCompra, [e.target.name] : e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Entra a la petición');
        const res = await fetch('http://localhost:4000/checkout', { 
            method: 'POST',
            body: JSON.stringify(formCompra),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        });
        const data = await res.json();
        console.log('Data de mcp: ', data);
        setDatos(data);
    }

    if(datos){
        window.location.href = datos.url;
    }

    console.log(formCompra);
     
    return (
        <>
            <Header/>

            <form onSubmit={handleSubmit} className="formulario-cobro">
                <input type="text" name="precio" placeholder="Precio" onChange={handleChange}/>
                <input type="text" name="paciente" placeholder="Paciente" onChange={handleChange}/>
                <input type="text" name="obra_social" placeholder="Obra Social" onChange={handleChange}/>
                <input type="text" name="medico" placeholder="Médico" onChange={handleChange}/>
                <button type="submit">Comprar</button>
            </form>
        </>
    );
};
 
export default Compra;