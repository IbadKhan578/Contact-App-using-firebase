import React, { useEffect, useState } from 'react'
import db from '../config/firebase';

import {collection, getDocs} from 'firebase/firestore'

function Body(){

    let [contact, setContact] =useState([]);

    useEffect(()=>{
        const getContacts= async ()=>{

         try {
             const contactsRef= collection(db,"contacts");
            const contactsSnapShot = await getDocs(contactsRef);
         const contactList = contactsSnapShot.docs.map((doc)=>{
          return  {
            id:doc.id,
            ...doc.data()
          };

           })
                console.log(contactList)
                
            } catch (error) {
                
            }
        }

        getContacts();




    },[])
   


}

export default Body;