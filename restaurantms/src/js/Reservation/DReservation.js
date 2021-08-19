import React, { useState } from 'react'
import Delete from '../del/Delete'

const DReservation =()=>{


    return(
        <div>
            <Delete table={'RESERVATION'} primaryKeyName ={'CusID'} ></Delete>
        </div>
    )
}

export default DReservation;