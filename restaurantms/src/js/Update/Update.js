import React, { useState } from 'react'
import { SearchKeys, dataType, primaryKey, dontIncludeInFrom } from '../db'
import axios from 'axios'
import swal from 'sweetalert'



const Update = (props) =>{

    const [sql, setSQL] = useState('')
    const [id, setID] = useState('')
    const [nextStep, setNextStep] = useState(false)
    const [changedValues, setChangedValues] = useState({})
    const [setValues, setSetValues] = useState({})
    const [whereValues, setWhereValues] = useState({})
    const [confirmIDUpdate, setcidu] = useState(false)
    const [multipleUpdate, setMultipleUpdate] = useState(false)

    const idUpdate =(e)=>{
        e.preventDefault()
        setMultipleUpdate(false)
        if (id !== ''){ 
            setNextStep(true)
        }
    }

    const changed =(value, key)=>{
        setcidu(false)
        if (value === ''){
            var temp = changedValues;
            delete temp[key];
            setChangedValues(temp);
        }
        else{
            temp = {}
            temp[key] = value
            setChangedValues(
                {
                    ...changedValues,
                    ...temp
                }
            )
        }
    }
    const changedSet =(value, key)=>{
        if (value === ''){
            var temp = setValues;
            delete temp[key];
            setSetValues(temp);
        }
        else{
        temp = {}
        temp[key] = value
        setSetValues(
            {
                ...setValues,
                ...temp
            }
        )
        }
    }

    const changedWhere =(value, key)=>{
        if (value === ''){
            var temp = whereValues;
            delete temp[key];
            setWhereValues(temp);
        }
        else{
        temp = {}
        temp[key] = value
        setWhereValues(
            {
                ...whereValues,
                ...temp
            }
        )
        }
    }

    const backendProcess =(sql)=>{
        
    }

    const applyChanges=(e)=>{
        e.preventDefault()
        var sql = 'UPDATE ' + props.table + ' SET '
        for (var i in changedValues){
            sql += (SearchKeys[props.table][i] + " = '" + changedValues[i] + "', ") 
        }
        sql = sql.slice(0, -2)
        sql += " WHERE " + primaryKey[props.table] + "= '" + id + "'"
        axios.post('/api/execute/', {sql:sql}).then(res=>{
            swal('DONE', 'Operation Successful with:\n' + JSON.stringify(res.data.message).slice(2, -1), 'success')
        }).catch(err=>{
            console.log(err)
            swal('Failed', err, 'Error')
        })
    }

    const multipleUpSubmit=(e)=>{
        e.preventDefault()
        var sql = 'UPDATE ' + props.table + ' SET '
        for (var i in setValues){
            sql += (SearchKeys[props.table][i] + " = '" + setValues[i] + "', ") 
        }
        sql = sql.slice(0, -2)
        sql += " WHERE "
        for (i in whereValues){
            sql += (SearchKeys[props.table][i] + " = '" + whereValues[i] + "' AND ") 
        }
        sql = sql.slice(0, -4)
        console.log(setValues)
        console.log(whereValues)
        console.log(sql)
        axios.post('/api/execute/', {sql:sql}).then(res=>{
            swal('DONE', 'Operation Successful with:\n' + JSON.stringify(res.data.message).slice(2, -1), 'success')
        }).catch(err=>{
            console.log(err)
            swal('Failed', err, 'Error')
        })
    }


    const renderChangedValues=Object.keys(changedValues).map(
        (key)=>{
            return(
                <div>
                    "{key}"" will be changed to "{changedValues[key]}""
                </div>
            )
        }
    )

    const fields = Object.keys(SearchKeys[props.table]).map(
        (key)=>{
            return(
                <>
                   {!dontIncludeInFrom[props.table].includes(key) && <div class="input-group mb-3">
                   <div class="input-group-prepend">
                        <span class="input-group-text">{key}</span>
                    </div>
                        { key !== 'Sex' && <input  class="form-control"  type={dataType[props.table][key + " type"]} onChange={(e)=>{changed(e.target.value, key)}} />}
                        { key === 'Sex' && <input type='text' maxLength="1" placeholder='M or F or O' onChange={(e)=>{changed(e.target.value, key)}}/>}
                    </div>}
                </>
            )
        }
    )

    const mulUpFields = Object.keys(SearchKeys[props.table]).map(
        (key)=>{
            return(
                <>
                   {!dontIncludeInFrom[props.table].includes(key) && <div class="input-group mb-3">
                   <div class="input-group-prepend">
                        <span class="input-group-text">{key} = </span>
                    </div>
                        { key !== 'Sex' && <input  class="form-control"  type={dataType[props.table][key + " type"]} onChange={(e)=>{changedSet(e.target.value, key)}} />}
                        { key === 'Sex' && <input type='text' maxLength="1" placeholder='M or F or O' onChange={(e)=>{changedSet(e.target.value, key)}}/>}
                    </div>}
                </>
            )
        }
    )
    const conditionField = Object.keys(SearchKeys[props.table]).map(
        (key)=>{
            return(
                <>
                   {!dontIncludeInFrom[props.table].includes(key) && <div class="input-group mb-3">
                   <div class="input-group-prepend">
                        <span class="input-group-text">{key} = </span>
                    </div>
                        { key !== 'Sex' && <input  class="form-control"  type={dataType[props.table][key + " type"]} onChange={(e)=>{changedWhere(e.target.value, key)}} />}
                        { key === 'Sex' && <input type='text' maxLength="1" placeholder='M or F or O' onChange={(e)=>{changedWhere(e.target.value, key)}}/>}
                    </div>}
                </>
            )
        }
    )


    return(
        <div>
            <div className='updateWithID'>
                <form onSubmit={idUpdate} >
                    <div class="input-group-prepend">
                        <label>
                            Enter the ID of the data you want to change
                        </label>
                    </div>
                        <input type="number" name="" id="" onChange={(e)=>{setID(e.target.value)}} />
                        <input type="submit" value="DONE"/>
                
                </form>
                {nextStep && <form onSubmit={(e)=>{e.preventDefault(); if(Object.keys(changedValues).length !== 0){setcidu(true)}}}>
                    <hr />
                    <label>Enter the Changes you want to apply</label>
                    {fields}
                    <input type="submit" value='APPLY' />
                </form>}
                {
                    confirmIDUpdate && <div style={{borderStyle:'dashed'}}>
                    <hr />
                       <h5>The row in {props.table} with ID = {id} will encounter following changes:</h5> 
                        <p>{renderChangedValues}</p>
                        <button className='btn btn-danger' onClick={applyChanges}>CONTINUE</button>
                        <button className='btn btn-primary' onClick={()=>{setcidu(false); setNextStep(false);}}>DISCARD</button>
                        <br /><hr />
                    </div>
                }
            </div>
            <div className="updateWithQuery">
                <h2>OR</h2>
                <button className='btn btn-dark' onClick={()=>{setMultipleUpdate(true);setcidu(false); setNextStep(false);}} >Perform Multiple Updates</button>
                <hr />
                {multipleUpdate && <>
                    <h3>MULTIPLE UPDATE SECTION</h3>
                    <hr />
                   <form onSubmit={multipleUpSubmit}>
                    <div className='aa'> 
                        <h3>
                            UPDATE {props.table} SET
                        </h3>
                        <p>Set the values of attributes to be changed to</p>
                            {mulUpFields}
                    </div>
                    <div className='inf'>
                        <h3>
                            WHERE
                        </h3>
                        <p>Provide the condition</p>
                        {conditionField}
                    </div>
                    <input type="submit" value="UPDATE" onc className='btn btn-outline-dark' />
                </form> 
                </>
                }
            </div>
            
                <br />
        </div>
    )
}

export default Update;