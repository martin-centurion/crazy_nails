import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Button from '../Button/Button';
import { BiShoppingBag } from 'react-icons/bi';
import Icons from '../Icons/Icons';
import './styles.css';
import Loader from '../Loader/Loader';


import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore';

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

async function getSingleItemFromDatabase(idItem) {
    const servicesColectionRef = collection(db, 'services');
    const docRef = doc(servicesColectionRef, idItem);

    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists() === false) 
    throw new Error("No existe el documento") 

    return { ...docSnapshot.data(), id: docSnapshot.id };

}


function ItemDetailContainer() {

    const [service, setService] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const params = useParams();
    const idUser = params.idUser;

    useEffect(() => {
        getSingleItemFromDatabase(idUser)
            .then((respuesta) => {
                setService(respuesta);
                setIsLoading(false);
            })
            .catch((error) => alert(error));
    }, [idUser]);
    
  return (
    <div className='container'>
        <NavBar />
        {
            isLoading?
            <Loader />
            :
            <div className='detail'>
                <div className='detail__content'>
                    <div className='detail__content-title' key={service.id}>
                                <h3>{service.name}</h3>
                                <h4>{service.include}</h4>
                                <p>{service.description}</p>
                            <div className='detail__content-img'>
                                <img src={service.img} alt={service.name} />
                            </div>
                                <Link to={`/servicio/${service.id}`}>
                                    <Button>${service.price}<Icons><BiShoppingBag /></Icons></Button>
                                </Link>
                    </div>
                </div>
            </div>
        }
    </div>

  )
}

export default ItemDetailContainer;