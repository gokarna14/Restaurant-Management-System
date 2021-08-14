import React, { useState } from 'react'
import { SearchKeys, columns, dataType, keyValue } from '../db'
import swal from 'sweetalert'


const ComplexDel =(props)=>{
    
    const [info, setinfo] = useState({
        table: props.table,
        searchParas: Object.keys(SearchKeys[props.table]),
        keyValue: keyValue[props.table]("")
    })

    

    const searchSegement = Object.keys(info.keyValue).map(
        (i)=>{
            return (
            <div style={{textAlign:'left'}}>
                <label className="form-check-label">{i}</label>
                <input className="form-control" type={dataType[props.table][ i + ' type']} 
                onChange={(e)=>{
                        var temp = info.keyValue
                        temp[i] = e.target.value
                        setinfo(
                        {
                            ...info,
                            keyValue: temp
                        }
                    )
                    }
                    
                 }/>
            </div>
                
            )
        }
    )

    const delReq =()=>{
        var sql = 'DELETE FROM ' + props.table + " WHERE "
        for (var i in info.keyValue){
            if (info.keyValue[i] !== ''){
                sql += ( SearchKeys[props.table][i] + " = '" + info.keyValue[i] + "' and ")
            }
        }
        sql = sql.slice(0, -4)
        if (sql !== 'DELETE FROM CUSTOMERS WH'){
            props.setComplexSql(sql);
            props.setOpenModel(true);
        }
        else{
            swal("Bad Request", "No Input detected", "error");
        }
        
    }


    return(
        <div>
            <form onSubmit={(e)=>{e.preventDefault();delReq();}} style={{paddingLeft:'2%'}} >
                <div style={{padding:'0 50% 0% 0%'}}>
                    <hr />
                    <h3>Input the keywords to delete</h3>
                        <div class="form-row">
                        {searchSegement}
                        <br />
                        <input className='btn btn-outline-danger' type="submit" value='DELETE'/>
                    </div> 
                    
                </div>
                
                <hr />
            </form>
        </div>
    )
}

export default ComplexDel;