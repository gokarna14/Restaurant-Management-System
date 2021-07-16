import React, { useEffect, useState } from 'react'
import axios from 'axios' 

const Examples =()=>{

    const [rows, setRows] = useState([])
    const [show, setShow] = useState(false)
    const [tableHeading, settableHeading] = useState([])
    const [temp, setTemp] = useState(0)

    useEffect(()=>{
        axios.get('/api/customers/').then(res=>{
            console.log(res.data);
            setRows(res.data);
        }).catch(err=>{
            console.log(err)
        })
    }, [])

    const getData =()=>{
        setShow(true);
        settableHeading(Object.keys(rows[0]))
        console.log(rows[0].addressLine1)
    }

    const tableRows = tableHeading.map(
        (head)=>{
            return (
                <th scope="col">{head}</th>
            )
        }
    )
    
    const rowRender2 =(n)=> tableHeading.map(
        (head)=>{
            return (
            <td>
                {rows[n][head]}
            </td>
            )
        }
    )
    

    const rowRender = [...rows.keys()].map(
        (key)=>{
            return (
                <tr>
                    {rowRender2(key)}
                </tr>
            )
        }
    )

    return(
        <div>
            <button onClick={getData} >Get Data From NodeJS</button>
            
            {
                (
                    ()=>{
                        if (show){
                            return(
                                <table className="table table-danger">
                                    <thead>
                                        <tr>
                                            {tableRows}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rowRender}
                                    </tbody>
                                </table>
                            )
                        }
                    }
                )()
            }
            
        </div>
    )
}

export default Examples;