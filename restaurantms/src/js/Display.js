import React, { useEffect, useState } from 'react'
import axios from 'axios' 


const Display=(props)=>{

    // const [gotData, setgotData] = useState(props.gotData)
    // useEffect(() => {
    //     setfound(props.gotData.length > 0)
    //   });
    
    console.log(props.gotData)
    console.log(props.gotData.length > 0)
    
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
                        {props.gotData[n][keys].substring(0,9)}
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
       <div>
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
                                   <h2>Matching data</h2>
                                   <table className="table table-danger">
                                    <thead>
                                        <tr>
                                            {tableCols}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rowRender}
                                    </tbody>
                                </table>
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