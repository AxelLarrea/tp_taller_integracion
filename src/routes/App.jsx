import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from '../container/Layout';
import Home from '../pages/Home';
import Medicos from '../pages/Medicos';
import ObraSocial from '../pages/ObraSocial';
import Mensajes from '../pages/Mensajes';
import Noticias from '../pages/Noticias';
import Cobros from '../pages/Cobros';
import AgregarOS from '../components/ObraSocial/AgregarOS';
import AgregarMed from '../components/Medicos/AgregarMed';
import EditarMed from '../components/Medicos/EditarMed';
import AgregarNoticia from '../components/Noticias/AgregarNoticia';
import Compra from '../pages/Compra';


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home/>}/>


                    <Route path='/medicos' element={<Medicos/>}/>
                    <Route path='/medicos/agregar' element={<AgregarMed/>}/>
                    <Route path='/medicos/editar/:id' element={<EditarMed/>}/>


                    <Route path='/obra-social' element={<ObraSocial/>}/>  
                    <Route path='/obra-social/editar/:id' element={<AgregarOS text="Editar" btntext="Guardar Cambios"/>}/> 
                    <Route path='/obra-social/agregar' element={<AgregarOS text="Agregar" btntext="Agregar"/>}/>
     

                    <Route path='/mensajes' element={<Mensajes/>}/>


                    <Route path='/noticias' element={<Noticias/>}/>  
                    <Route path='/noticias/agregarnoticia' element={<AgregarNoticia/>}/> 

                    
                    <Route path='/cobros' element={<Cobros/>}/>  

                    <Route path='/compra' element={<Compra/>}/>    
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;