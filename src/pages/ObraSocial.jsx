import React from 'react';
import Header from '../components/Header';
import AgregarOS from '../components/ObraSocial/AgregarOS';

const ObraSocial = () => {
    return (
        <>
            <Header/>
            <AgregarOS text="Agregar" btntext="Agregar"/>
        </>
    );
}

export default ObraSocial;