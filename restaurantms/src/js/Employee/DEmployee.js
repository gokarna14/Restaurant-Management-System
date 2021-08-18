import React, { useState } from 'react'
import Delete from '../del/Delete';

const DEmployee =()=>{

    const [waiter, setWaiter] = useState(false)
    const [chef, setChef] = useState(false)


    return(
        <div>
                <div style={{textAlign:'left'}}>
                <br /><br /><hr />
                    <button className='btn btn-outline-dark' onClick={()=>{setWaiter(true)}}>Delete For WAITER</button>
                    <button className='btn btn-outline-dark' onClick={()=>{setWaiter(false)}}>Delete For CHEF</button>
                </div>
                {waiter && <Delete table={'WAITER'} ></Delete>}
                {!waiter && <Delete table={'CHEF'} ></Delete>}
        </div>
    )
}

export default DEmployee;