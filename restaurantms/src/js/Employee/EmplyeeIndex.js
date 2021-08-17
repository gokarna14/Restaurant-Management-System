import React, { useState } from 'react'
import CEmployee from './CEmployee';
import REmployee from './REmployee';
import UEmployee from './UEmployee';
import DEmployee from './DEmployee';


const EmployeeIndex =()=>{

    const currentDomain = '/Employee';
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
            label: "Add Employee",
            action: ()=>{setDisplay('C')}
        },{
            label: "View Registered Employee",
            action: ()=>{setDisplay('R')}
        },{
            label: "Update Employee Info",
            action: ()=>{setDisplay('U')}
        },{
            label: "Delete Employee Info",
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
            <h2 >Manage Employee information</h2>
            <hr />
                {buttons}
                {
                        (
                            ()=>{
                                if (booleans.C){
                                    return(
                                        <CEmployee></CEmployee>

                                    )
                                }
                                else if (booleans.R){
                                    return(
                                            <REmployee></REmployee>
                                    )
                                }
                                else if (booleans.U){
                                    return(
                                            <UEmployee></UEmployee>
                                    )
                                }
                                else if (booleans.D){
                                    return(
                                            <DEmployee></DEmployee>
                                    )
                                }
                            }
                        )()
                    }
        </div>
    )
}

export default EmployeeIndex;