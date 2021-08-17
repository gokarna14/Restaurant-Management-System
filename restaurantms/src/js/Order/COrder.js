import React, { useState } from 'react'
import axios from 'axios'
import Search from '../Search/Search'


const COrder =()=>{
    const [showDisplay, setShowDisplay] = useState(false)
    const [gotData, setGotData] = useState([])
    const [fk, setfk] =useState([])
    const [FK, setFK] = useState('')
    const [showSearchOption, setShowSearchOption] = useState(false)

    const getData=()=>{
        var sql = "SELECT CusID FROM CUSTOMERS;"
        axios.post('/api/show_data/', {sql:sql}).then(res=>{
            setGotData(res.data)
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })

        var temp = []

        for (var i in gotData){
            temp.push(gotData[i]['CusID'])
        }

        setShowDisplay(true)
        setfk(temp)
        console.log(fk)
    }

    const CusidDD = Object.keys(gotData).map(
            (key)=>{
                return (
                    <>
                        <option>{gotData[key]['CusID']}</option>
                    </>
                )
            }
    )


    return(
        <div>
            <hr />
                <button onClick={getData} className='btn btn-danger' >Create A New Order</button>
            <hr />
                {showDisplay &&
                <>
                    <div className="aa">
                        <form onSubmit={(e)=>{e.preventDefault()}}>
                            <div  class="input-group-prepend" >
                                <span class="input-group-text">Select Customer ID</span>
                            </div>
                                <select class="form-control" onChange={(e)=>{if(e.target.value === "--SELECT--"){setFK('')}else{setFK(e.target.value)}}}>
                                    <option>--SELECT--</option> {CusidDD}
                                </select> 
                                <hr />
                                <div style={{textAlign:'left'}}>
                                    <form>
                                        <button type='submit' className='btn btn-outline-danger'>Discard</button>
                                    </form>
                                    <br />
                                    <button  className='btn btn-outline-success'>Register and proceed</button>
                                </div>
                                <hr />
                        </form>
                        
                    </div>
                    <div className='inf'>
                        <button className='btn btn-primary' onClick={()=>{setShowSearchOption(true)}}>Search For CustomerID</button>
                            <br /> <hr />
                            {showSearchOption && 
                            <>
                                <Search table={'CUSTOMERS'} ></Search>
                            </>
                            
                            }
                    </div>
                </>
                }
        </div>
    )
}

export default COrder; 