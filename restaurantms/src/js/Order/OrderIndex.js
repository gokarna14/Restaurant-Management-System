import React, { useState } from 'react'
import COrder from './COrder';
import ROrder from './ROrder';
import UOrder from './UOrder';
import DOrder from './DOrder.js';


const OrderIndex =()=>{

    const currentDomain = '/Order';
    const [booleans, setBooleans] = useState({
        C : false,
        R : false,
        U: false,
        D: false
    })

    const setDisplay =(code)=>{
        setBooleans({
            C: code === 'C',
            R: code === 'R',
            U: code === 'U',
            D: code === 'D'
        })
    }
    const[names, setNames] = useState([
        {
            label: "Add Order",
            action: ()=>{setDisplay('C')}
        },{
            label: "View Registered Order",
            action: ()=>{setDisplay('R')}
        },{
            label: "Update Order",
            action: ()=>{setDisplay('U')}
        },{
            label: "Delete Order",
            action: ()=>{setDisplay('D')}
        },
    ])


    const buttons = names.map(
        (i)=>{
            return (
                <>
                    <button className="btn btn-outline-danger" onClick={i.action}>
                        {i.label}
                    </button> 
                </>
            )
        }
    )



    return(
        <div style={{textAlign:'center'}} >
            <h2 >Manage Order information</h2>
                {buttons}
                {
                        (
                            ()=>{
                                if (booleans.C){
                                    return(
                                        <COrder></COrder>

                                    )
                                }
                                else if (booleans.R){
                                    return(
                                            <ROrder></ROrder>
                                    )
                                }
                                else if (booleans.U){
                                    return(
                                            <UOrder></UOrder>
                                    )
                                }
                                else if (booleans.D){
                                    return(
                                            <DOrder></DOrder>
                                    )
                                }
                            }
                        )()
                    }
        </div>
    )
}

export default OrderIndex;