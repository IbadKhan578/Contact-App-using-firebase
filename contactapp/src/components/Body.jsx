import React, { useEffect, useState } from "react";
import db from "../config/firebase";
import { assets } from "../Assets/assets";

import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";

function Body({ searchTerm}) {
  let [contact, setContact] = useState([]);

  let filterdContact = contact.filter((c)=>
    c.Name.toLowerCase().includes(searchTerm.toLowerCase())


  )


  useEffect(() => {
    const contactsRef = collection(db, "contacts");

    const unsubscribe = onSnapshot(contactsRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContact(contactList);
    });

    return () => unsubscribe(); // cleanup on unmount
  }, []);

  const handleDelete = async (id, name) => {
    const confirmDelete = window.confirm(
      `Are you sure You want to delete ${name}'s contact?`
    );
    if (!confirmDelete) {
      return;
    }

    try {
      await deleteDoc(doc(db, "contacts", id));
      alert("Contact deleted ");
    } catch (error) {
      console.log("Error Deleting Contact :", error);
      alert("Failed to delete contact");
    }
  };

  return (
    <div>
      {filterdContact.length === 0 ? (
        <div className="no-contact">
          <img src={assets.Hands_Contact} alt="" /> No Contact Found
        </div>
      ) : (
        filterdContact.map((contact) => {
          return (
            <div className="contact-box" key={contact.id}>
              <i className="fa-regular fa-user user-icon"></i>
              <div className="contact-detail">
                <span className="name">{contact.Name}</span>
                <span className="email">{contact.Email}</span>
              </div>
              <div className="icons">
                <i className="fa-solid fa-pen-to-square edit-icon"></i>
                <button onClick={() => handleDelete(contact.id, contact.Name)}>
                  <i className="fa-solid fa-trash-can dlt-icon"></i>{" "}
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Body;
