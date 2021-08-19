import React, { useState } from 'react'
import { SearchKeys, columns, dataType } from '../db'
import axios from 'axios'
import Display from '../Display/Display'
import Decorate from '../Display/Decorate'
import ComplexSearch from './ComplexSearch' 

/*
props needed:
    table
*/

const Search =(props)=> {
    const [showDisplay, setShowDisplay] = useState(false)
    const [gotData, setGotData] = useState([])
    const [show, setShow] = useState(false)
    const [showSearchSegment, setShowSearchSegment] = useState(false)
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
        if (e !== null){
            e.preventDefault()
        }
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
                            if(i !== 'sex'){
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

    const showAll =()=>{
        var sql = 'SELECT * FROM ' + info.table
        axios.post('/api/show_data/', {sql:sql}).then(res=>{
            setGotData(res.data)
        }).catch(err=>{
            console.log(err)
        })
    setShowDisplay(true)
    setShowSearchSegment(false)
    }

    return(
        <>
        <button className={'btn btn-' + (show ? 'danger': 'primary')} onClick={()=>{setShow(!show)}}>
            {show ? 'HIDE' : 'SHOW'} Search Segment: {props.table}
        </button>
        {show && <div>
        <div className='aa'>
        <hr />
            <h4>Simple Search: {props.table}</h4>
            <hr />
                <button className='btn btn-secondary' onClick={showAll}>Show All</button>
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
                    <ComplexSearch showSearchSegment={showSearchSegment} setShowSearchSegment={setShowSearchSegment} setShowDisplay={setShowDisplay} table={props.table} ></ComplexSearch>
            </div>
            <div className='inf'>
                {
                    (
                        ()=>{
                            if(showDisplay){
                                return(
                                    <div>
                                        <hr />
                                            <h3 style={{textAlign:'left'}}>SEARCH RESULT : {props.table}</h3>
                                        <hr />
                                        <Display gotData={gotData} db2n={columns[info.table]}></Display>
                                    </div>
                                )
                            }
                        }
                    )()
                }
            <br /><br />
            </div>
        </div>}
        </>
    )
}

export default Search;