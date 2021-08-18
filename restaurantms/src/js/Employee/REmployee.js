import React, { useState } from 'react'
import Search from '../Search/Search';


const REmployee =()=>{
 
    const [waiter, setWaiter] = useState(false)
    const [chef, setChef] = useState(false)


    return(
        <div>
        <hr />
            <h1>Search for The Registered Employees</h1>
        <hr />
            <div className='inf'>
                <button className={'btn btn-outline-' + (waiter ? 'danger': 'dark')} onClick={()=>{setWaiter(!waiter)}}>
                {(waiter ? 'Hide Search Column: Waiters': 'Search For Registered Waiters')}
                </button>
                <hr />
               {waiter && <Search table={'WAITER'} ></Search> }
            </div>
            <div className='aa'>
            <button className={'btn btn-outline-' + (chef ? 'danger': 'dark')} onClick={()=>{setChef(!chef)}} >
                {(chef ? 'Hide Search Column: Chefs': 'Search For Registered Chefs')}
            </button>
                <hr />
                {chef && <Search table={'CHEF'} ></Search> }
            </div>
        </div>
    )
}

export default REmployee;