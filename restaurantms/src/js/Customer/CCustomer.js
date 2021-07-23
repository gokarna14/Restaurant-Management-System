import React, { useState } from 'react'
import axios from 'axios'

import { SearchKeys, dataType } from '../db';
import Information from '../Information';
import './Customer.css'


const CCustomer =()=>{


    const [custInformation, setCustInformation] = useState(SearchKeys.CUSTOMERS)
    const[cusTypes, setcusTypes] = useState(dataType.CUSTOMERS)

    const inputDetect=(value, key)=>{
        const adder = {...custInformation}
        adder[key] = value
        setCustInformation(adder)
    }

    const fields = Object.keys(custInformation).map(
        (key)=>{
            return(
                <div className="i">
                {
                    (
                        ()=>{
                            if(!['Customer ID'].includes(key)){
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
                                                placeholder={key} 
                                                onChange={(e)=>{inputDetect(e.target.value, key)}} 
                                            >
                                                {cusTypes[key + " select options"]}
                                            </select>
                                        )
                                    }else{
                                            return(
                                                <input  className={cusTypes[key + " class"]}
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


    const addCustomer =(e)=>{
        e.preventDefault()
        console.log(custInformation)
        axios.post('/api/add_customer', custInformation).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        console.log('sent')
    }

    return(
        <div>
            <hr />
            <h2>Add a new customer</h2>
            <hr />
            <div className="aa">
                <form style={{textAlign:'left', padding:'0% 70% 0% 3%'}}>
                    {fields}
                    <br />
                    <input className="btn btn-outline-danger" type="submit" value="ADD" onClick={addCustomer}/>
                </form>
            </div>
            <div className="inf">
                    <Information></Information>
            </div>
            
        </div>
    )
}

export default CCustomer;