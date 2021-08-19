import React from 'react'
import Search from '../Search/Search';


const RResources = ()=>{

    const items = ['MENU', "MenuCategory", 'TABLE_', 'DISH'].map(
            (key)=>{
                return(
                    <>
                    <hr />
                        <Search table={key} ></Search>
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

export default RResources;