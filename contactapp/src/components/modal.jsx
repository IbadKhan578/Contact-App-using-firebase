import React from 'react'

function Modal({isOpen}){


return(
    <>
{
  isOpen ? (
    <div className="modal">
      <form>
        <p className='name'>Name</p>
        <input type="text" />

        <p>Email</p>
        <input type="email" />

        <div className="modal-btn">
          <button>Add Contact</button>
        </div>
      </form>
    </div>
  ) : null
}



    
    
    
    
    </>
 
   )

   }




export default Modal;