import React, { useState } from 'react'
import { SearchKeys, columns, dataType } from './db'
import axios from 'axios'
import Display from './Display'
import Decorate from './Decorate'

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


    const delTypeChange =(value)=>{
        setinfo({
            ...info,  
            key:value,
            keyType: dataType[info.table][value + " type"],
            column: SearchKeys[info.table][value]
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
        setinfo({
            ...info, 
            value:value,
            sql: 'SELECT * FROM ' + info.table + ' WHERE ' + info.column + " = '" + value +"'" 
        });
        setShowDisplay(false)
    }

    const options = info.searchKeys.map(
        (i)=>{
            return(
                <option value={i}>{i}</option>
            )
        }
    )

    return(
        <div>
            <div className="form">
                <form style={{textAlign:'left', padding:'0% 70% 0% 3%'}}>
                    <label className="form-check-label">Search Using</label>
                        <select className="form-control" onChange={(e)=>{delTypeChange(e.target.value)}}>
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
        </div>
    )
}

export default Search;