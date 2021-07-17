import React, { useState } from 'react'
import { DelKeys, CusTypes, custColNames, custDB2N } from '../db'
import axios from 'axios'
import Display from '../Display'


const DCustomer =()=>{

    const [rows, setRows] = useState([])
    const [showDisplay, setShowDisplay] = useState(false)
    const [gotData, setGotData] = useState([])
    const [delInfo, setDelInfo] = useState({
        key: 'First Name',
        value: '',
        delKeyType: 'text',
        column: 'fname',
        sql: '',
        api: "'/api/show_data/'"
    })


    const delTypeChange =(value)=>{
        setDelInfo({
            ...delInfo,  
            key:value,
            delKeyType: CusTypes[value + " type"],
            column: custColNames[value]
        });
    }
    const showMayBeDelItems=(e)=>{
        e.preventDefault()
        console.log('Successfully Got the requested Data to delete')
        axios.post('/api/show_data/', delInfo).then(res=>{
                setGotData(res.data)
            }).catch(err=>{
                console.log(err)
            })
        setShowDisplay(true)

    }
    const delValueChange =(value)=>{
        setDelInfo({
            ...delInfo, 
            value:value,
            sql: 'SELECT * FROM CUSTOMERS WHERE ' + delInfo.column + " = '" + value +"'" 
        });
        setShowDisplay(false)
    }

    const options = Object.keys(DelKeys).map(
        (i)=>{
            return(
                <option value={i}>{i}</option>
            )
        }
    )

    return(
        <div>
            <hr />
                <h1>Here you can delete CUSTOMERS Information</h1>
            <hr />
            <div className="form">
                <form style={{textAlign:'left', padding:'0% 70% 0% 3%'}}>
                <label>Delete Using</label>
                <select onChange={(e)=>{delTypeChange(e.target.value)}}>
                    {options}
                </select>
                <label>Delete key</label>
                <input type={delInfo.delKeyType} onChange={(e)=>{delValueChange(e.target.value)}}/>
                    <br />
                    <input className="btn btn-outline-danger" type="submit" value="Search" onClick={showMayBeDelItems}/>
                </form>
            </div>
            {
                (
                    ()=>{
                        if(showDisplay){
                            return(
                                <div>
                                    <h1>Matched Data with given search request</h1>
                                    <Display gotData={gotData} db2n={custDB2N}></Display>
                                </div>
                            )
                        }
                    }
                )()
            }
        </div>
    )
}

export default DCustomer;