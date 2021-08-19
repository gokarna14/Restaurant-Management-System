import React, { useState, useEffect } from 'react'
import Information from './Information';
import { animated, useSpring, Spring } from 'react-spring';
import Display from './Display/Display';
import { SearchKeys, columns, dataType } from './db'
import axios from 'axios'




const Welcome =()=>{

    const [showDisplay, setShowDisplay] = useState(false)
    const [gotData, setGotData] = useState([])
    const [show, setShow] = useState(false)
    const [showSearchSegment, setShowSearchSegment] = useState(false)
    


    const styleTopic = useSpring({
        loop: { reverse: true },
        from: { x:200, opacity: 0.5 },
        to: { x:-200, opacity: 1 },
        config: {duration: 5000},
    })

    useEffect(() => {
        showAll();
    }, [])

    const showAll =()=>{
        var sql = 'select o.OrderID, c.fname CustomerFirstName, c.lname CustomerLastName , c.CusID, w.name WaiterName, t.TableNumber, o.completed from ORDER_ o inner join WAITER w on  o.WaiterID = w.WaiterID inner join CUSTOMERS c on c.CusID = o.CusID inner JOIN TABLE_ t on t.TableNumber = o.TableNumber;'
        axios.post('/api/show_data/', {sql:sql}).then(res=>{
            setGotData(res.data)
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    setShowDisplay(true)
    setShowSearchSegment(false)
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
            <hr />
            <div style={{textAlign:'center'}}>
                <h3>Latest 5 Orders</h3>
                <Display gotData={gotData} self={''} db2n={['Order ID', 'Customer First Name', 'Cus Last Name', 'Customer ID', 'Waiter Name', 'Table Number', 'Completed']}></Display>
            </div>
        </div>
    )
}

export default Welcome;