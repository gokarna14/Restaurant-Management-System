import React, { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert';


import { SearchKeys, dataType, dontIncludeInFrom } from './db';
import Information from './Information';
import '../css/create.css'


const Create =(props)=>{

    const [custInformation, setCustInformation] = useState({})
    const[cusTypes, setcusTypes] = useState(dataType[props.table])

    const inputDetect=(value, key)=>{
        if (cusTypes[key + " select"] && value==='--Select--'){
            return;
        }
        const adder = {...custInformation}
        key = SearchKeys[props.table][key]
        adder[key] = value
        setCustInformation(adder)
    }

    const fields = Object.keys(SearchKeys[props.table]).map(
        (key)=>{
            return(
                <div className="i">
                {
                    (
                        ()=>{
                            if(!dontIncludeInFrom[props.table].includes(key)){
                                return(
                                    <div>
                                    <label>                    
                        {key}
                    </label>
                        {
                            (
                                ()=>{
                                    if (cusTypes[key + " select"]){
                                        return(
                                            <select className={cusTypes[key + " class"]}
                                                id={cusTypes[key + " id"]}
                                                type={cusTypes[key + " type"]} 
                                                onChange={(e)=>{inputDetect(e.target.value, key)}} 
                                            >
                                                {cusTypes[key + " select options"]}
                                            </select>
                                        )
                                    }else{
                                            return(
                                                <input  className={cusTypes[key + " class"]}
                                                    required={cusTypes[key + " required"]}
                                                    id={cusTypes[key + " id"]}
                                                    type={cusTypes[key + " type"]} 
                                                    placeholder={key} 
                                                    onChange={(e)=>{inputDetect(e.target.value, key)}} 
                                                    />
                                            )
                                        }
                                    }
                            )()
                        }
                                    </div>
                                )
                            }
                        }
                    )()
                }
                </div>
                )
                
        }
    )

    const addSQL=(adder)=>{
        var sql = 'INSERT INTO ' + adder.table + " ("
        for(var i in adder){
            if ( i !== 'table')
                sql += (i + ",")
        }
        sql = sql.slice(0, -1)
        sql += ") VALUES ("
        for(i in adder){
            if ( i !== 'table')
                sql += ( "'" + adder[i] + "',")
        }
        sql = sql.slice(0, -1)
        sql += ")"
        adder.sql = sql
        return adder;
    }

    const addCustomer =(e)=>{
        e.preventDefault()
        var adder = {...custInformation}
        adder.table = [props.table]
        adder = addSQL(adder);
        console.log(adder)
        axios.post('/api/add', adder).then(res=>{
            console.log("HEREEE")
            console.log(res.data)
        }).catch(err=>{
            console.log("ERROR HERE")
            console.log(err)
            console.log(adder)
        })
        swal("DONE", "New Customer Recorded", "success");
        
    }

    return(
        <div>
            <hr />
            <h2>Add a new customer</h2>
            <hr />
            <div className="aa">
                <form style={{textAlign:'left', padding:'0% 70% 0% 3%'}} onSubmit={addCustomer}>
                    {fields}
                    <br />
                    <input className="btn btn-outline-danger" type="submit" value="ADD"/>
                </form>
            </div>
            <div className="inf">
                    <Information></Information>
            </div>
            
        </div>
    )
}

export default Create;