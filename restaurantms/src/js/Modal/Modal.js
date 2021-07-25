import React, { useState } from 'react'
import '../../css/Modal.css'

const Modal = ({closeModal})=>{

    

    return(
        <div className='modalBackground'>
            <div className="modalContainer">
                <button onClick={()=>{closeModal(false)}}> X </button>
                <div className='title'>
                    <h1>Are you sure to delete?</h1>
                </div>
                <div className="body">
                    <p>Detail of the data</p>
                </div>
                <div className='footer'>
                    <button onClick={()=>{closeModal(false)}}>Cancel</button>
                    <button>Continue</button>
                </div>
            </div>
            
        </div>
    )
}

export default Modal;