import React, { useState } from 'react'
import SelectOptions from '../SelectOptions'
import swal from 'sweetalert'
import { primaryKey } from '../db'
import axios from 'axios'
import { SearchKeys } from '../db'



const CReservation =()=>{

    const [selectTables, setST] =  useState(['CUSTOMERS', 'TABLE_'])
    const [additionalFields, setAF] = useState(
        [
            'Reservation Date',
            'Reservation Time'
        ]
    )


    const submitFunction=(info, addFields)=>{
        console.log(addFields)
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
            for (i in addFields){
                sql += SearchKeys[info.mainTable][i] + ', '
            }
            sql = sql.slice(0, -2)
            sql += ") VALUES ("
            for (i=0; i<info['FK'].length; i++){
                sql += "'" + info['FK'][i] + "',"
            }
            for (i in addFields){
                sql += "'" + addFields[i] + "',"
            }
            sql = sql.slice(0, -1)
            sql += ");"
            // console.log(sql)
            axios.post('/api/add', {sql:sql}).then((res)=>{
                swal('DONE', 'NEW ' + info.mainTable + ' REGISTERED', 'success')
            }).catch(err=>{
                console.log(err)
            })
        }

    }


    return(
        <div>
            <hr />
                <h1>Search for the Reservation Information</h1>
            <hr />
            <SelectOptions type={{'Reservation Time':'time', 'Reservation Date': 'date' }} additionalFields = {additionalFields} submitFunction={submitFunction} mainTable={'RESERVATION'} selectTable={selectTables} ></SelectOptions>
        </div>
    )
}

export default CReservation;