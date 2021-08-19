import React from 'react'
import Delete from '../del/Delete'


const DResources = ()=>{
    const items = ['MENU', "MenuCategory", 'TABLE_', 'DISH'].map(
        (key)=>{
            return(
                <>
                <hr />
                    <Delete table={key} ></Delete>
                    <hr />
                </>
            )
    }
)


return(
    <div style={{paddingBottom:'100%'}}>
            {items}
    </div>
)
}

export default DResources;