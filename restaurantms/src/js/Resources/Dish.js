import React, { useState } from 'react'
import Create from '../Create';
import SelectOptions from '../SelectOptions';
import { primaryKey, SearchKeys } from '../db'
import swal from 'sweetalert'
import axios from 'axios'



const Dish = ()=>{

    const [info, setInfo] = useState({})
    const [formShow, setFormShow] = useState(true)
    const [selectTables, setST] =  useState(['CHEF', 'MenuCategory'])
    const [additionalFields, setAF] = useState(
        [
            'Dish Name',
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
                <SelectOptions
                create={true} 
                mainTable={'DISH'} 
                selectTable={selectTables} 
                submitFunction={submitFunction}
                additionalFields = {additionalFields}
                ></SelectOptions>
        </div>
    )
}

export default Dish;