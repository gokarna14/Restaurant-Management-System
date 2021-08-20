import React, { useEffect, useState } from 'react'
import { useTransition, animated } from 'react-spring'


// props: gotdata

const CustomDisplay=(props)=>{

 
    
    const tableCols = props.columns.map(
        (i)=>{
            return(
                <th>{i}</th>
            )
        }
    )

    const rowRender2 =(n)=> props.columns.map(
        (keys)=>{
            return(
                <td>
                    {props.gotData[n][keys]}
                </td>
            )
        }
    )

    const rowRender = (props.gotData.length > 0 ? [...props.gotData.keys()] : []).map(
        (index)=>{
            return(
                <tr>
                    {rowRender2(index)}
                </tr>
            )
        }
    )


   return(
    <>
        <h3>{props.label}</h3>
        <div style={{padding:'10%% 10% 10% 10%'}}>
            {
                (
                    ()=>{
                        if(!(props.gotData.length > 0)){
                            return(
                                <div>
                                    <h2>No data found</h2>
                                </div>
                            )
                        }
                        else{
                            return(
                                <div>
                                        
                                    <div className="table table-primary">
                                        <thead>
                                            <tr>
                                                {tableCols}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rowRender}
                                        </tbody>
                                    </div>
                                </div>
                            )
                        }
                    }
                )()
            }
        </div>
        </>
   )
}

export default CustomDisplay;