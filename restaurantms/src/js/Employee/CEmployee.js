import React, { useState } from 'react'
import Create from '../Create';


const CEmployee =()=>{

    const [waiter, setWaiter] = useState(null)


    return(
        <div>
            <div style={{textAlign:'left'}}>
            <br /><br /><hr />
                <button className='btn btn-outline-dark' onClick={()=>{setWaiter(true)}}>ADD NEW WAITER</button>
                <button className='btn btn-outline-dark' onClick={()=>{setWaiter(false)}}>ADD NEW CHEF</button>
            </div>
            {waiter && <Create table={'WAITER'} ></Create>}
            {!waiter && <Create table={'CHEF'} ></Create>}
        </div>
    )
}

export default CEmployee;