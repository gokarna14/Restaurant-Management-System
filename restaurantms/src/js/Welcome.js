import React, { useState, useEffect } from 'react'
import Information from './Information';
import { animated, useSpring} from 'react-spring';
import {sqls, cols, labels} from './db'
import axios from 'axios'
import CustomDisplay from './Display/CustomDisplay';
import OrderIndex from './Order/OrderIndex';


const Welcome =()=>{

    const [gotData, setGotData] = useState([])
    const [gotData1, setGotData1] = useState([])
    const [temp, setTemp] = useState([])
    const [showLatestStatus, setShowLatestStatus] = useState(false)
    const [showOrderDetails, setShowOrderDetails] = useState(false)
    const [orderId, setOrderId] = useState(0)
    const [dis, setDis] = useState(false)


    const styleTopic = useSpring({
        loop: { reverse: true },
        from: { x:-200, opacity: 0.5 },
        to: { x:200, opacity: 1 },
        config: {duration: 5000},
    })

    useEffect(() => {
        for(var i=0; i< sqls.length; i++){
            showAll(sqls[i], i);
        }
        console.log(gotData)
    }, [])

    const showAll =(sql, index)=>{
        axios.post('/api/show_data/', {sql:sql}).then(res=>{
            var t = gotData;
            t[index] = res.data
            setGotData(t)
        }).catch(err=>{
            console.log(err)
        })
    }

    const displays = Object.keys(gotData).map(
        (key)=>{
            return(
                <CustomDisplay
                    gotData={gotData[key]}
                    columns={cols[key]}
                    label={labels[key]}    
                ></CustomDisplay>
            )
        }
    )

    const orderIDReceived =()=>{
        var sql = 'select o.OrderID, c.DishID, d.DishName, d.ChefID, ch.name ChefName, o.CusID, o.WaiterID, o.TableNumber  from CONTAINS c inner join DISH d on c.DishID = d.dishID inner join ORDER_ o on o.OrderID=' + orderId +' inner join CHEF ch on ch.ChefID = d.ChefID;';
        axios.post('/api/show_data/', {sql:sql}).then(res=>{
            setGotData1(res.data)
        }).catch(err=>{
            console.log(err)
        })
        setDis(true)
    }


    return(
        <div style={{paddingBottom:'500px'}}>
            <animated.div style={{
                ...styleTopic
                }}>
                <hr />
                <div style={{textAlign:'center'}}>
                <h1 style={{fontStyle:'italic', fontFamily:'fantasy',fontWeight:'bold'}} >Welcome to Restaurant Management System</h1>
                <img height='200' src="https://tu.edusanjal.com/static/img/tu.png" alt="" />
                <hr />
                <h4>Tribhuwan University</h4>
                <h5>IOE, Pulchowk Campus</h5>
            </div>
            </animated.div>
            <hr />
            <div style={{textAlign:'center'}}>
                <Information normal={''} ></Information>
            </div>
            <div className='aa'>
                <hr />
                <button className='btn btn-warning' onClick={()=>{setShowLatestStatus(!showLatestStatus)}} >Observe latest status</button>
                <hr />
                {showLatestStatus && <>
                    {displays}
                    <hr />
                </>}
            </div>

            <div className='inf'>
                <hr />
                    <button className='btn btn-warning' onClick={()=>{setShowOrderDetails(!showOrderDetails)}} >View order details</button>
                <hr />
                { showOrderDetails && <>
                    <input type="number" placeholder='Enter the OrderID' onChange={(e)=>{setOrderId(e.target.value);setDis(false);}} />
                    <button className='btn btn-info' onClick={orderIDReceived} >DONE</button>
                    <hr />
                {dis && <CustomDisplay
                    gotData={gotData1}
                    columns={[
                        'OrderID', 'DishID', 'DishName', 'ChefID', 'ChefName', 'CusID', 'WaiterID', 'TableNumber'
                    ]}
                    label={'Order Details for Order ID = ' + orderId}    
                ></CustomDisplay>}
                <hr />
                </>}
            </div>


        </div>
    )
}

export default Welcome;