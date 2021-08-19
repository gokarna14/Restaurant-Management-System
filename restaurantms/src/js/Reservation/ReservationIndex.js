import React, { useState } from 'react'
import CReservation from './CReservation';
import RReservation from './RReservation';
import UReservation from './UReservation';
import DReservation from './DReservation';


const ReservationIndex =()=>{

    const currentDomain = '/Reservation';
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
            label: "Add Reservation",
            action: ()=>{setDisplay('C')}
        },{
            label: "View Registered Reservation",
            action: ()=>{setDisplay('R')}
        },{
            label: "Update Reservation Info",
            action: ()=>{setDisplay('U')}
        },{
            label: "Delete Reservation Info",
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
            <h2 >Manage Reservation information</h2>
            <hr />
                {buttons}
                {
                        (
                            ()=>{
                                if (booleans.C){
                                    return(
                                        <CReservation></CReservation>

                                    )
                                }
                                else if (booleans.R){
                                    return(
                                            <RReservation></RReservation>
                                    )
                                }
                                else if (booleans.U){
                                    return(
                                            <UReservation></UReservation>
                                    )
                                }
                                else if (booleans.D){
                                    return(
                                            <DReservation></DReservation>
                                    )
                                }
                            }
                        )()
                    }
        </div>
    )
}

export default ReservationIndex;