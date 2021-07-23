import React, { useState } from 'react'
import { SearchKeys, CusTypes, custColNames, custDB2N } from '../db'
import axios from 'axios'
import Search from '../Search'


const DCustomer =()=>{

    return(
        <div>
            <hr />
                <h1>Here you can delete CUSTOMERS Information</h1>
            <hr />
            <Search table={'CUSTOMERS'}></Search>
        </div>
    )
}

export default DCustomer;