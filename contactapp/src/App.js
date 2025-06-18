import logo from './logo.svg';
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
    function handleOpen(){
        setOpen(e=>!e)

    }

  return (
    <>
    <Nav  handleOpen={handleOpen}/>
    <Body />
    <Modal isOpen={isOpen} />

    </>
  );
}

export default App;
