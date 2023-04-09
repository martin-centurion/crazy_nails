import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
          <Routes>
            
              <Route path='/' element={ <App /> } />  
              <Route path='/servicios' element={ <ItemListContainer />} />
              <Route path='/servicio/:idUser' element={ <ItemDetailContainer />} />

          </Routes>    
    
    </BrowserRouter>

  </React.StrictMode>,
)
