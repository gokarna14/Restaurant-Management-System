import React, { useState } from 'react'
import { SearchKeys, columns, dataType, keyValue } from './db'
import axios from 'axios'
import Display from './Display'
import Decorate from './Decorate'

/*
props needed:
    table
*/


const ComplexSearch =(props)=> {

    const [showDisplay, setShowDisplay] = useState(false)
    const [gotData, setgotData] = useState([])
    const [showSearchSegment, setShowSearchSegment] = useState(false)
    const [info, setinfo] = useState({
        table: props.table,
        searchParas: Object.keys(SearchKeys[props.table]),
        keyValue: keyValue[props.table]("")
    })
    

    const searchSegement = Object.keys(info.keyValue).map(
        (i)=>{
            return (
            <div style={{textAlign:'left'}}>
                <label className="form-check-label">{i}</label>
                <input className="form-control" type={dataType[props.table][ i + ' type']} onChange={
                    (e)=>{
                        var temp = info.keyValue
                        temp[i] = e.target.value
                        setinfo(
                        {
                            ...info,
                            keyValue: temp
                        }
                    )
                    }
                    
                 }/>
            </div>
                
            )
        }
    )

    const searchReq =(e)=>{
        e.preventDefault()
        var sql = 'SELECT * FROM ' + props.table + " WHERE "
        for (var i in info.keyValue){
            if (info.keyValue[i] !== ''){
                sql += ( SearchKeys[props.table][i] + " = '" + info.keyValue[i] + "' and ")
            }
        }
        sql = sql.slice(0, -4)
        axios.post('/api/show_data/', {sql:sql}).then(res=>{
            setgotData(res.data)
        }).catch(err=>{
            console.log(err)
        })
        setShowDisplay(true)
        console.log(sql)

    }

    const advSearch =()=>{
        setShowSearchSegment(true)
        
    }

    return(
        <div>
        <hr />
        <button className='btn btn-outline-dark' onClick={advSearch} >Perform Advanced Search, with multiple parameters</button>
        <hr />
        <form onSubmit={searchReq} style={{paddingLeft:'2%'}} >
            <div style={{padding:'0 50% 0% 0%'}}>
                {
                    (
                        ()=>{
                            if(showSearchSegment){
                                return (
                                    <>
                                    <h3>Please input in the necessary fields, keywords to search</h3>
                                       <div class="form-row">
                                        {searchSegement}
                                        <br />
                                        <input className='btn btn-outline-danger' type="submit" value='SEARCH'/>
                                    </div> 
                                    </>
                                )
                            }
                        }
                    )()
                }
                
            </div>
            
        </form>
        <hr />
            {
                (
                    ()=>{
                        if(showDisplay){
                            return(
                                <div>
                                    <hr />
                                    <Decorate style={{textAlign:'right'}} displayText={'>  SEARCH RESULT FROM PROVIDED REQUEST  <'} ></Decorate>
                                    <hr />
                                    <Display gotData={gotData} db2n={columns[info.table]}></Display>
                                    <div>
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

export default ComplexSearch;