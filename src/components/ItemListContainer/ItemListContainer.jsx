import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import ItemList from '../ItemList/ItemList';

//---------- import Firebase

import { collection, getDocs, query, where } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';


const firebaseConfig = {
  apiKey: "AIzaSyDA5sn_8Ww6xxsXe5_90ky8jlFMPZc1Zmk",
  authDomain: "crazy-nail-app.firebaseapp.com",
  projectId: "crazy-nail-app",
  storageBucket: "crazy-nail-app.appspot.com",
  messagingSenderId: "1042992187781",
  appId: "1:1042992187781:web:64663bd1b2216ed2b95cec"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getItemsFromDatabase() {
    const servicesColectionRef = collection(db, 'services');
    let snapshotServices = await getDocs(servicesColectionRef);
    const documents = snapshotServices.docs;
    const dataServices = documents.map((doc) => ({ ...doc.data(), id: doc.id}))
    return dataServices;  
}

async function getItemsByCategoryFromDatabase(categoryURL) {
    const productsColectionRef = collection(db, "services");
  
    const q = query(productsColectionRef, where("category", "==", categoryURL));
  
    let snapshotServices = await getDocs(q);
    const documents = snapshotServices.docs;
    const dataServices = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataServices;
  }


function ItemListContainer() {
  const [services, setServices] = useState([]);

  const params = useParams();
  const idCategory = params.idCategory;
  
  async function leerDatos() {
    if(idCategory === undefined) {
        let respuesta = await getItemsFromDatabase();
        setServices(respuesta);
    } else {
        let respuesta = await getItemsByCategoryFromDatabase(idCategory);
        setServices(respuesta);
    }
  }

  useEffect(() => {
    leerDatos();
  }, [idCategory]);

  return (
    <div className='container'>
        <NavBar />
        <ItemList services={ services }/>
    </div>
  )
}

export default ItemListContainer;