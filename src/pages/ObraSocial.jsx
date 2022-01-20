import React from 'react';
import Header from '../components/Header';
import AgregarOS from '../components/ObraSocial/AgregarOS';
import HomeOS from '../components/ObraSocial/HomeOS';

const ObraSocial = () => {
    return (
        <>
            <Header/>
            <HomeOS/>
            {/* <AgregarOS text="Agregar" btntext="Agregar"/> */}
        </>
    );
}

export default ObraSocial;