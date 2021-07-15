import React from 'react'
import { animated, useSpring, Spring } from 'react-spring';

// https://www.outlookindia.com/outlooktraveller/public/uploads/articles/explore/feature-platter.jpg
const Information =()=>{

    const members = [
        {
            name: 'Abhay Nepal',
            roll: '075 BEI 003'
        },{
            name: 'Gokarna Adhikari',
            roll: '075 BEI 014'
        },{
            name: 'Kshitiz Dhakal',
            roll: '075 BEI 015'
        },{
            name: 'Love Panta',
            roll: '075 BEI 016'
        }
    ]
    const names = members.map(
        (i)=>{
            return(
                <tr>
                    <td>{i.name}</td>
                    <td>{i.roll}</td>
                </tr>
            )
        }
    )

    const styleTable = useSpring({
        loop: { reverse: true },
        from: { 
            x:-200, 
            background: "#46e891",
                },
        to: { x:0 },
        config: {duration: 5000},
    })
    const styleTopic = useSpring({
        loop: { reverse: true },
        from: { x:0, opacity: 0.5 },
        to: { x:-200, opacity: 1 },
        config: {duration: 5000},
    })

    return(
        <div>
            <animated.div style={{
                ...styleTopic
                }}>
                <h1>DBMS Project, Restaurant Management System</h1>
                <hr />
                <h3 style={{textAlign:'left'}}>Completed By</h3>
                <hr />
            </animated.div>
                    
            <animated.div
                style={{...styleTable}}
            >
                    <table className='table table-dark'>
                        <thead className='bg-danger'>
                            <tr>
                                <th>Name</th>
                                <th>Roll Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {names}
                        </tbody>
                    </table>
            </animated.div>
        </div>
    )
}

export default Information;