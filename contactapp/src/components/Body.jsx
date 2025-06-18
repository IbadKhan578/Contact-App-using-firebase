import React, { useEffect, useState } from 'react'
import db from '../config/firebase';
import { assets } from '../Assets/assets';

import {collection, getDocs} from 'firebase/firestore'

function Body(){

    let [contact, setContact] =useState([]);






    useEffect(()=>{


      

    },[contact])





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
                setContact(contactList);
                
            } catch (error) {
                console.log(error)
                
            }
        }

        getContacts();

    },[])
   
    return (
     <div>
  {contact.length === 0 ? (
    <div className='no-contact'>
      <img src={assets.Hands_Contact} alt="" /> No Contact Found
    </div>
  ) : (
    contact.map((contact) => {
      return (
        <div className="contact-box" key={contact.id}>
          <i className="fa-regular fa-user user-icon"></i>
          <div className="contact-detail">
            <span className="name">{contact.Name}</span>
            <span>{contact.Email}</span>
          </div>
          <div className="icons">
            <i className="fa-solid fa-pen-to-square edit-icon"></i>
            <i className="fa-solid fa-trash-can dlt-icon"></i>
          </div>
        </div>
      );
    })
  )}
</div>

    );


}

export default Body;