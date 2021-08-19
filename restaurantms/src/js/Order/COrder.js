import React, { useState } from 'react'
import axios from 'axios'
import Search from '../Search/Search'
import SelectOptions from '../SelectOptions'
import { primaryKey } from '../db'
import swal from 'sweetalert'


const COrder =()=>{

    const [info, setInfo] = useState({})
    const [formShow, setFormShow] = useState(true)
    const [afterNewOrder, setAfterNewOrder] = useState(false)
    const [selectTables, setST] =  useState(['CUSTOMERS', 'WAITER'])
    const[showAddDish, setShowAddDish] = useState(false)


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
        setAfterNewOrder(true)

    }

    return(
        <>
        <div>
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
        </div>
        <div style={{textAlign:'left', marginTop: (formShow ? '20%' : '0') }} >
            <div>
                <button className='btn btn-primary' onClick={()=>{setShowAddDish(!showAddDish)}}>ADD FOOD ITEMS TO THE ORDER</button>
                    {/* { showAddDish && <div>
                    <br />
                        <Search table={'ORDER_'} ></Search>
                    </div>} */}
                {
                    showAddDish &&
                    <>
                        <div>
                                <SelectOptions submitFunction={submitFunction} mainTable={'CONTAINS'} selectTable={['DISH', 'ORDER_']}  ></SelectOptions>
                        </div>
                    </>
                }
            </div>
        </div>


        </>
    )
}

export default COrder;  