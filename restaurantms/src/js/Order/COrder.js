import React, { useState } from 'react'
import axios from 'axios'
import Search from '../Search/Search'
import SelectOptions from '../SelectOptions'
import { primaryKey } from '../db'
import swal from 'sweetalert'


const COrder =()=>{

    const [info, setInfo] = useState({})
    const [formShow, setFormShow] = useState(true)
    const [selectTables, setST] =  useState(['CUSTOMERS', 'WAITER'])

    const submitFunction=(info)=>{
        var valid = (info['FK'].length  === info['table'].length && !(info['FK'].includes('') || info['table'].includes('')))
       // setFormShow(!valid)
        if(!valid){
            swal('ERROR', 'PLEASE PROVIDE ALL THE INPUT', 'error')
        }
        else{
            var sql = 'INSERT INTO ' + info.mainTable + " ("
            for (var i=0; i<info['FK'].length; i++){
                sql += primaryKey[info['table'][i]] + ', '
            }
            sql = sql.slice(0, -2)
            sql += ") VALUES ("
            for (i=0; i<info['FK'].length; i++){
                sql += "'" + info['FK'][i] + "',"
            }
            sql = sql.slice(0, -1)
            sql += ");"
            console.log(sql)
            axios.post('/api/add', {sql:sql}).then((res)=>{
                swal('DONE', 'NEW ' + info.mainTable + ' REGISTERED', 'success')
            }).catch(err=>{
                console.log(err)
            })
        }

    }

    return(
        <>
            { formShow &&
                <div>
                    <SelectOptions submitFunction={submitFunction} mainTable={'ORDER_'} selectTable={selectTables} ></SelectOptions>
                </div>
            }
            {!formShow &&
            <div>
                <hr />
                        <button className='btn btn-dark' onClick={()=>{setFormShow(true)}}>
                            Register Another Order
                        </button>
                <hr />
            </div>
            }
            <div>
                <button>Add a new DISH</button>
            </div>
        </>
    )
}

export default COrder;  