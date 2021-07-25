import React, { useState } from 'react'
import { SearchKeys, columns, dataType } from './db'
import axios from 'axios'
import Display from './Display'
import Decorate from './Decorate'
import ComplexSearch from './ComplexSearch'

/*
props needed:
    table
*/

const Search =(props)=> {
    const [showDisplay, setShowDisplay] = useState(false)
    const [gotData, setGotData] = useState([])
    const [info, setinfo] = useState({
        table: props.table,
        key: Object.keys(SearchKeys[props.table])[0],
        value: '',
        keyType: 'text',
        column: Object.keys(columns[props.table])[0],
        sql: '',
        api: "'/api/show_data/'",
        searchKeys: Object.keys(SearchKeys[props.table])
    })


    const typeChange =(value)=>{
        setShowDisplay(false)
        setinfo({
            ...info,  
            key:value,
            keyType: dataType[info.table][value + " type"],
            column: SearchKeys[info.table][value],
            sql: 'SELECT * FROM ' + info.table + ' WHERE ' + SearchKeys[info.table][value] + " = '" + info.value +"'"
        });
    }
    const showMayBeItems=(e)=>{
        e.preventDefault()
        axios.post('/api/show_data/', info).then(res=>{
                setGotData(res.data)
            }).catch(err=>{
                console.log(err)
            })
        setShowDisplay(true)

    }
    const valueChange =(value)=>{
        setShowDisplay(false)
        setinfo({
            ...info, 
            value:value,
            sql: 'SELECT * FROM ' + info.table + ' WHERE ' + info.column + " = '" + value +"'" 
        });
        
    }

    const options = info.searchKeys.map(
        (i)=>{
            return(
                <>
                {
                    (
                        ()=>{
                            if(i != 'sex'){
                            return(
                                <option value={i}>{i}</option>
                            )
                            }
                        }
                        
                    )()
                }
                </>
            )
        }
    )

    return(
        <div>
        <h4>Simple Search</h4>
        <hr />
            <div className="form">
                <form style={{textAlign:'left', padding:'0% 70% 0% 3%'}}>
                    <label className="form-check-label">Search Using</label>
                        <select className="form-control" onChange={(e)=>{typeChange(e.target.value)}}>
                            {options}
                        </select>
                    <label className="form-check-label">Search key</label>
                        <input className="form-control" type={info.keyType} onChange={(e)=>{valueChange(e.target.value)}}/>
                    <br />
                    <input className="btn btn-outline-danger" type="submit" value="Search" onClick={showMayBeItems}/>
                </form>
            </div>
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
                                </div>
                            )
                        }
                    }
                )()
            }
            <ComplexSearch table={props.table} ></ComplexSearch>
        </div>
    )
}

export default Search;