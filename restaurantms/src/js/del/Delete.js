import React, { useState } from 'react'
import Search from '../Search/Search';
import Modal from '../Modal/Modal';
import axios from 'axios';
import ComplexDel from './ComplexDel';
import swal from 'sweetalert';


// props: table, primaryKeyName

const Delete=(props)=>{

    const [gotData, setGotData] = useState([])
    const [searchForCusID, setSearchForCusID] = useState(false)
    const [openModal, setOpenModel] = useState(false);
    const [style1, setStyle1] = useState({position:'sticky', top:'10%'})
    const [delID, setDelID] = useState('')
    const [showComplexDel, setShowComplexDel] = useState(false)
    const [complexSql, setComplexSql] = useState('')
    const [sql, setSQL] = useState('')
    const [showDelAll, setShowDelAll] = useState(false)

    const deleteClicked =()=>{
        setStyle1({})
        setOpenModel(true)
    }

    const backEND=(sql)=>{
        axios.post('/api/execute/', {sql:sql}).then(res=>{
            setGotData(res.data)
            console.log(gotData)
            swal("Done", JSON.stringify(res.data), "success");
        }).catch(err=>{
            console.log(err)
            swal("Bad Request", "ERROR", "error");
        })
        setOpenModel(false)
    }

    const delWithID =()=>{
        setSQL("DELETE FROM " + props.table + " WHERE " + props.primaryKeyName + " = '" + delID + "'")
        backEND(sql)
        closeModal()
    }

    const closeModal =()=>{
        setOpenModel(false)
        setStyle1({position:'sticky', top:'10%'})
        setDelID('')
    }
    
    const complexDel =()=>{
        backEND(complexSql)
    }

    const delAll=()=>{
        var sql = "DELETE FROM " + props.table + ";" 
        axios.post('/api/execute/', {sql:sql}).then(res=>{
            swal("DONE", "All records from " + props.table + " deleted" , "success");
        }).catch(err=>{
            swal("FAILED", "Error Message: " + err , "error");
        })
        setShowDelAll(false)
    }


    return(
        <div>
            <hr />
            {openModal && <Modal complexSql={complexSql} table={props.table} primaryKeyName={props.primaryKeyName} complexDelz={complexDel}  complexDel={showComplexDel} closeModal={closeModal} delID={delID} delWithID={delWithID}></Modal>}
                <div className='inf1' style={style1}>
                    {!showComplexDel && <> 
                        <label className="form-check-label">Enter {props.table} ID to delete</label>
                        <input className="form-control" type="number" value={delID} onChange={(e)=>{setDelID(e.target.value)}}/>
                        <button className='btn btn-outline-danger' onClick={deleteClicked}>DELETE</button> 
                    </>}
                    <hr />
                    <button className='btn btn-primary' onClick={()=>{setSearchForCusID(true);setShowComplexDel(false);setStyle1({position:'sticky', top:'10%'});}} >Search for Customer ID</button>
                    <hr />
                    <button className='btn btn-dark' onClick={()=>{setShowComplexDel(true);setSearchForCusID(false);setStyle1({});}} >Delete with other option</button>
                    <hr />
                    {searchForCusID && <button className='btn btn-danger' onClick={()=>{setSearchForCusID(false)}} >Hide Search Section</button>}
                    <hr />
                    <button className="btn btn-danger" onClick={()=>{setShowDelAll(true)}} >DELETE ALL FROM {props.table} TABLE</button>
                    { showDelAll &&
                        <div>
                            <h1>Warning: This will delete all the data?</h1>
                            <button className='btn btn-danger' onClick={delAll} >Continue</button>
                            <button className='btn btn-success' onClick={()=>{setShowDelAll(false)}} >Cancel</button>
                        </div>

                    }
                </div>
                {searchForCusID && <div>
                                        <br />
                                        <h3>Search for {props.table} ID</h3>
                                        <hr />
                                        <Search table={'CUSTOMERS'}></Search>
                                    </div>}
                {showComplexDel && <div>
                                        <ComplexDel setComplexSql={setComplexSql} table={'CUSTOMERS'} backEND={backEND} deleteClicked={deleteClicked} setOpenModel={setOpenModel} ></ComplexDel>
                                    </div>}
                
        </div>
    )
}

export default Delete;