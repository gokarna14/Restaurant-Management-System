import React, { useState } from 'react'
import CCustomer from './CCustomer';
import RCustomer from './RCustomer';
import UCustomer from './UCustomer';
import DCustomer from './DCustomer';


const CustomerIndex =()=>{

    const currentDomain = '/Customer';
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
            label: "Add Customer",
            action: ()=>{setDisplay('C')}
        },{
            label: "View Registered Customer",
            action: ()=>{setDisplay('R')}
        },{
            label: "Update Customer Info",
            action: ()=>{setDisplay('U')}
        },{
            label: "Delete Customer Info",
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
            <h2 >Manage Customer information</h2>
                {buttons}
                {
                        (
                            ()=>{
                                if (booleans.C){
                                    return(
                                        <CCustomer></CCustomer>

                                    )
                                }
                                else if (booleans.R){
                                    return(
                                            <RCustomer></RCustomer>
                                    )
                                }
                                else if (booleans.U){
                                    return(
                                            <UCustomer></UCustomer>
                                    )
                                }
                                else if (booleans.D){
                                    return(
                                            <DCustomer></DCustomer>
                                    )
                                }
                            }
                        )()
                    }
        </div>
    )
}

export default CustomerIndex;