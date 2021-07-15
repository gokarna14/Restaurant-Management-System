import React, { useState } from 'react'
import Information from '../Information';
import './Customer.css'


const CCustomer =()=>{


    const [custInformation, setCustInformation] = useState({
        "First Name": null,
        "Middle Name": null,
        "Last Name": null,
        "Sex": null,
        "Phone Number": null,
        "Email Address": null,
        "Date of birth": null,
        "Address": null,
    })
    const[types, setTypes] = useState({
        "First Name class": "nav btn btn-outline-dark",
        "Middle Name class": "nav btn btn-outline-dark",
        "Last Name class": "nav btn btn-outline-dark",
        "Sex class": "nav btn btn-outline-dark",
        "Phone Number class": "nav btn btn-outline-dark",
        "Email Address class": "nav btn btn-outline-dark",
        "Date of birth class": "nav btn btn-outline-dark",
        "Address class": "nav btn btn-outline-dark",

        "First Name id": "",
        "Middle Name id": "",
        "Last Name id": "",
        "Sex id": "exampleFormControlSelect1",
        "Phone Number id": "",
        "Email Address id": "",
        "Date of birth id": "",
        "Address id": "",

        "First Name type": "text",
        "Middle Name type": "text",
        "Last Name type": "text",
        "Sex type": "checkbox",
        "Phone Number type": "text",
        "Email Address type": "email",
        "Date of birth type": "date",
        "Address type": "address",

        "Sex select" : true,
        "Sex select options": <><option>Male</option><option>Female</option><option>Other</option></>
    })

    const inputDetect=(value, key)=>{
        const adder = {...custInformation}
        adder[key] = value
        setCustInformation(adder)
    }

    const fields = Object.keys(custInformation).map(
        (key)=>{
            return(
                <div className="i">
                    <label>                    
                        {key}
                    </label>
                        {
                            (
                                ()=>{
                                    if (types[key + " select"]){
                                        return(
                                            <select className={types[key + " class"]}
                                                id={types[key + " id"]}
                                                type={types[key + " type"]} 
                                                placeholder={key} 
                                                onChange={(e)=>{inputDetect(e.target.value, key)}} 
                                            >
                                                {types[key + " select options"]}
                                            </select>
                                        )
                                    }else{
                                            return(
                                                <input  className={types[key + " class"]}
                                                    id={types[key + " id"]}
                                                    type={types[key + " type"]} 
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
    )

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(custInformation);
    }

    return(
        <div>
            <hr />
            <h2>Add a new customer</h2>
            <hr />
            <div className="form">
                <form onSubmit={handleSubmit} style={{textAlign:'left', padding:'0% 70% 0% 3%'}}>
                    {fields}
                    <br />
                    <input className="btn btn-outline-danger" type="submit" value="Submit" />
                </form>
            </div>
            <div className="inf">
                    <Information></Information>
            </div>
            
        </div>
    )
}

export default CCustomer;