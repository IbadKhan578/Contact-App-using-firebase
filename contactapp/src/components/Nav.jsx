import React from 'react'
import { assets } from '../Assets/assets';
function Nav(){

    return( <>
        <div className='navbar'>
            <img src= {assets.logos_firebase} alt="" />
            
            Firebase Contact App


        </div>
        <div className="search-input">
            <label><i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder='Search Contact' />
            </label>
           <p>+</p>

        </div>   </>
    )


}

export default Nav;