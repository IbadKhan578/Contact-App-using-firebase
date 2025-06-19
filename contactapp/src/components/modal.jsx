import React, { useState } from 'react'

import { addDoc,collection } from 'firebase/firestore';
import db  from '../config/firebase';

function Modal({isOpen,handleOpen}){

  let [name,setName]=useState('');
  let [email,setEmail]=useState('');

  const handleAddContact = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), {
        Name: name,
        Email: email,
      });

      alert("Contact Added Successfully");
      setName("");
      setEmail("");
    } catch (error) {
      console.log("Error adding contact", error);
      alert("Contact was not added");
    }
  };


return(
    <>
{
  isOpen ? (
    <div className="modal">
      <form onSubmit={ (e)=>{
        handleAddContact(e);
        handleOpen();

      } }>
        <div className="cross-icon">
          <button  onClick={handleOpen} >X</button>
        </div>
        <p className='name'>Name</p>
        <input  required  value={name} type="text" onChange={(e)=>setName(e.target.value)} />

        <p>Email</p>
        <input  required value={email}  type="email" onChange={(e)=>setEmail(e.target.value)}/>

        <div className="modal-btn">
          <button type='submit' >Add Contact</button>
        </div>
      </form>
    </div>
  ) : null
}



    
    
    
    
    </>
 
   )

   }




export default Modal;