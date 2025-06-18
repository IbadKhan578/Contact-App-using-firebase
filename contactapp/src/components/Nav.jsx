import React, { useState } from 'react'
import { assets } from '../Assets/assets';
function Nav({handleOpen}){

    // let [isOpen,setOpen]=useState(false);
    // function handleOpen(){
    //     setOpen(e=>!e)

    // }



    return( <>
        <div className='navbar'>
            <img src= {assets.logos_firebase} alt="" />
            
            Firebase Contact App


        </div>
        <div className="search-input">
            <label className="search"><i className="fa-solid fa-magnifying-glass"></i>
            <input className='search-contact' type="text" placeholder='Search Contact' />
            </label>
           <p className='plus-icon' onClick={handleOpen}>+</p>

        </div>   </>
    )


}

export default Nav;