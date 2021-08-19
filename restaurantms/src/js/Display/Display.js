import React, { useEffect, useState } from 'react'
import { useTransition, animated } from 'react-spring'


// props: gotdata

const Display=(props)=>{

 
    
    const tableCols = (props.gotData.length > 0 ? Object.keys(props.gotData[0]) : []).map(
        (i)=>{
            return(
                <th>{props.db2n[i]}</th>
            )
        }
    )

    const rowRender2 =(n)=> (props.gotData.length > 0 ? Object.keys(props.gotData[0]) : []).map(
        (keys)=>{
            if (keys === 'dob' && props.gotData[n][keys] !== null ){
                return(
                    <td>
                        {props.gotData[n][keys].substring(0,8) + (parseInt(props.gotData[n][keys].substring(8,10)) + 1)}
                    </td>
                )
            }
            else{
              return (
            <td>
                {props.gotData[n][keys]}
            </td>
            )  
            }
            
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
   )
}

export default Display;