import React, { useState } from 'react'
import Update from '../Update/Update'

const UEmployee =()=>{
    const [waiter, setWaiter] = useState(false)
    const [chef, setChef] = useState(false)


    return(
        <div>
        <hr />
            <h1>Update for The Registered Employees</h1>
        <hr />
            <div className='inf'>
                <button className={'btn btn-outline-' + (waiter ? 'danger': 'dark')} onClick={()=>{setWaiter(!waiter)}}>
                {(waiter ? 'Hide Update Column: Waiters': 'Update For Registered Waiters')}
                </button>
                <hr />
               {waiter && <Update table={'WAITER'} ></Update> }
            </div>
            <div className='aa'>
            <button className={'btn btn-outline-' + (chef ? 'danger': 'dark')} onClick={()=>{setChef(!chef)}} >
                {(chef ? 'Hide Update Column: Chefs': 'Update For Registered Chefs')}
            </button>
                <hr />
                {chef && <Update table={'CHEF'} ></Update> }
            </div>
        </div>
    )
}

export default UEmployee;