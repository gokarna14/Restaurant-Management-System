import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './Search/Search'
import { primaryKey } from './db'
import Create from './Create'


// prpos: mainTable, selectTable = [array], submitFunction, additionalFields(o)

const SelectOptions=(props)=>{
    const [showDisplay, setShowDisplay] = useState(false)
    const [gotData, setGotData] = useState({})
    // const [gotDatat, setGotDatat] = useState([])
    const [FK, setFK] = useState([])
    const [showSearchOption, setShowSearchOption] = useState(false)
    const [te, setTe] = useState('')
    const [additionalFiledInput, setafi] = useState({})


    useEffect(() => {
        getData();
      }, []);

    
    const additionalFields = (props.additionalFields === undefined ? []: props.additionalFields).map(
        (key)=>{
            return(
                <>
                    <label class="input-group-text">{key}</label>
                    <input className="form-control" type="text" onChange={(e)=>{
                        var temp = additionalFiledInput
                        temp[key] = e.target.value
                        setafi(temp)
                    }} />
                </>
            )
        }
    )

    const getData=()=>{
        for(var i in props.selectTable){
            var sql = "SELECT " + primaryKey[props.selectTable[i]] +  " FROM " + props.selectTable[i] + ";"
            axios.post('/api/show_data/', {sql:sql}).then((res)=>{
                var temp = JSON.parse(res.config.data).sql
                temp = temp.slice(7, -1).split(" ")
                var temp2 = gotData;
                var t = []
                for (var w in res.data){
                    t[w] = res.data[w][primaryKey[temp[2]]]
                }
                temp2[temp[2]] = t
                setGotData(temp2)
            }).catch(err=>{
                console.log(err)
            })
        }
        for(var q=0; q<10000000; q++);
        setTe('')
    }

    const here =(n)=>{ 
        return (
            <>
                {
                    gotData[props.selectTable[n]].map(
                        (key)=>{
                            return(
                                <option>
                                    {key}
                                </option>
                            )
                        }
                    )
                }
            </>
        )
    }

    const selects = Object.keys(props.selectTable).map(
        (key)=>{
            return(
                <>
                    <span class="input-group-text">Select {props.selectTable[key]} ID concerned with the {props.mainTable}</span> 
                    <select class="form-control" onChange={(e)=>{
                        var temp = FK
                        if(e.target.value === "--SELECT--"){
                            temp[key] = ''
                        }else{
                            temp[key] = e.target.value
                            }
                        setFK(temp)
                        }}>
                        <option>--SELECT--</option> 
                        
                       { gotData[props.selectTable[key]] === undefined ? '' : here(key)}
                    </select> 
                </>
            )
        }
    )


    return(
        <div>
            <hr />
                <button onClick={()=>{setShowDisplay(!showDisplay)}} className='btn btn-danger' >Create A New {props.mainTable}</button>
            <hr />
                {showDisplay &&
                <>
                    <div className="aa">
                        <form onSubmit={(e)=>{e.preventDefault()}}>
                            <div  class="input-group-prepend" >
                                {selects}
                                {additionalFields}
                            </div>
                            <hr />
                            <div style={{textAlign:'left'}}>
                                <button className='btn btn-success' onClick={()=>{props.submitFunction({table:props.selectTable, FK: FK, mainTable:props.mainTable}, additionalFiledInput); setShowSearchOption(false)}}>
                                    Register a new {props.mainTable} and proceed
                                </button>
                                <form>
                                    <button className='btn btn-danger' type='submit'>DISCARD</button>
                                <hr />                            
                                </form>
                            </div>
                        </form>
                        
                    </div>
                            <div className='inf'>
                            <br /> <hr />
                            <button className={'btn btn-' + (showSearchOption ? 'danger' : 'primary') }  onClick={()=>{setShowSearchOption(!showSearchOption)}}>
                                                {showSearchOption ? 'Hide' : 'Show'} Search for IDs Panel
                                            </button>
                                {
                                    props.selectTable.map(
                                       (key)=>{ return(
                                            <>
                                            <hr />
                                            {showSearchOption && <Search table={key} ></Search>}
                                            </>
                                        )}
                                        
                                    )
                                }
                    </div>
                </>
                }
        </div>
    )
}

export default SelectOptions;