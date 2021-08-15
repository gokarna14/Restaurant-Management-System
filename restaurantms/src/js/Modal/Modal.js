import React, { useState } from 'react'
import '../../css/Modal.css'
import axios from 'axios'
import { columns } from '../db'

import Display from '../Display/Display'


const Modal = (props)=>{

    const [gotData, setgotData] = useState([])
    const [showDisplay, setShowDisplay] = useState(false)

    const showMayBeItems=()=>{
        var sql =''
        if (!props.complexDel){
        sql = "SELECT * FROM " + props.table + " WHERE " + props.primaryKeyName + " = '" + props.delID + "'"
        }
        else{
            sql = props.complexSql
            sql = sql.slice(6)
            sql = "SELECT * " + sql 

        }
        axios.post('/api/show_data/', {sql:sql}).then(res=>{
                setgotData(res.data)
            }).catch(err=>{
                console.log(err)
            })
        setShowDisplay(true)
    }

    const details =()=>{
        showMayBeItems()
    }


    return( 
        <div className='modalBackground'>
            <div className="modalContainer">
                <div className='title'>
                    <h1>Are you sure to delete?</h1>
                    <hr />
                </div>
                <div className="bodyz">
                    <button onClick={details} className={'btn btn-outline-dark'} >VIEW DETAILS OF DATA</button>
                </div>
            {!props.complexDel && <div className='footer'>
                    <button onClick={()=>{props.closeModal(false)}}>Cancel</button>
                    <button onClick={()=>props.delWithID()} >Delete</button>
                </div>}
            {props.complexDel && <div className='footer'>
                <button onClick={()=>{props.closeModal(false)}}>Cancel</button>
                <button onClick={props.complexDelz} >Delete</button>
            </div>}
            </div>
                {showDisplay &&
                        <>
                            <div className='btn-outline-danger' style={{fontSize:'85%', overflowY:'scroll'}}>
                            <p><Display db2n={columns[props.table]} gotData={gotData} ></Display></p>
                                
                            </div> 
                        </>
                }
            
        </div>
    )
}

export default Modal;