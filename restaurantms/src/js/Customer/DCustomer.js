import React, { useState } from 'react'
import Delete from '../del/Delete'

const DCustomer =()=>{


    return(
        <div>
            <Delete table={'CUSTOMERS'} primaryKeyName ={'CusID'} ></Delete>
        </div>
    )
}

export default DCustomer;