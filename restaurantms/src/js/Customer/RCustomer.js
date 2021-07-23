import React, { useState } from 'react'
import Search from '../Search';

const RCustomer =()=>{
    return(
        <div>
            <hr />
                <h1>Search for the Customer Information</h1>
            <hr />
            <Search table={'CUSTOMERS'}></Search>
        </div>
    )
}

export default RCustomer;