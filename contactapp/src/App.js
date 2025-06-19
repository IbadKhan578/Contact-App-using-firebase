import React, {useState}from 'react'
import './App.css';
import Nav from './components/Nav';
import './components/navbar.css';
import Body from './components/Body';
import './components/body.css';
import Modal from './components/modal';
import './components/modal.css';

function App() {
 let [isOpen,setOpen]=useState(false);
   let [searchTerm, setSearchTerm]= useState('');
    function HandleSearchTerm(e){
      setSearchTerm(e.target.value);
      console.log(e.target.value)

    }

 
 
    function handleOpen(){
        setOpen(e=>!e)

    }

  return (
    <>
    <div className={`main-content ${isOpen ? "blurred" : ""}`}>
    <Nav  handleOpen={handleOpen} handleSearchTerm={HandleSearchTerm}/>
    <Body searchTerm={searchTerm}/>
    </div>
    
    <Modal isOpen={isOpen} handleOpen={handleOpen} />

    </>
  );
}

export default App;
