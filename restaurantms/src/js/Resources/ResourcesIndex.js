import React, { useState } from 'react'
import CResources from './CResources';
import RResources from './RResources';
import UResources from './UResources';
import DResources from './DResources';


const ResourcesIndex =()=>{

    const currentDomain = '/Resources';
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
            label: "Add Resources",
            action: ()=>{setDisplay('C')}
        },{
            label: "View Registered Resources",
            action: ()=>{setDisplay('R')}
        },{
            label: "Update Resources Info",
            action: ()=>{setDisplay('U')}
        },{
            label: "Delete Resources Info",
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
            <h2 >Manage Resources information</h2>
            <hr />
                {buttons}
                {
                        (
                            ()=>{
                                if (booleans.C){
                                    return(
                                        <CResources></CResources>

                                    )
                                }
                                else if (booleans.R){
                                    return(
                                            <RResources></RResources>
                                    )
                                }
                                else if (booleans.U){
                                    return(
                                            <UResources></UResources>
                                    )
                                }
                                else if (booleans.D){
                                    return(
                                            <DResources></DResources>
                                    )
                                }
                            }
                        )()
                    }
        </div>
    )
}

export default ResourcesIndex;