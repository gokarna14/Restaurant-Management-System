import React from 'react'
import Update from '../Update/Update'


const UResources = ()=>{
    const items = ['MENU', "MenuCategory", 'TABLE_', 'DISH'].map(
        (key)=>{
            return(
                <>
                <hr />
                    <Update table={key} ></Update>
                    <hr />
                </>
            )
    }
)


return(
    <div>
            {items}
    </div>
)
}

export default UResources;