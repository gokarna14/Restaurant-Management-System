import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { NavTopics } from './NavTopics';
import { Button, Navbar, NavDropdown } from 'react-bootstrap';
import { animated, useSpring } from 'react-spring';


const Navbaar = ()=>{ 

    const styleSquare = useSpring({
        loop: true,
        from: { rotateZ: 0 },
        to: { rotateZ: 180 },
      })
    const styleCircle1 = useSpring({
        loop: { reverse: true },
        from: { x: 0 },
        to: { x: 380 },
    })
    const styleCircle2 = useSpring({
        loop: { reverse: true },
        from: { x: 0 },
        to: { x: -380 },
    })

    const navItems = NavTopics.map(
        (i)=>{
            return (
                <Link className={i.class} to={i.path} style={{textDecoration:'none'}}>
                    <Button variant={i.variant}>
                       {i.label}
                    </Button>
                </Link>
            )
        }
    )

    return (
        <div>
            <Navbar expand="lg" bg="dark" fixed="top" className="navbar navbar-expand bg-">
                    {navItems}
                    <animated.div
                        style={{
                            width: 50,
                            height: 50,
                            backgroundColor: '#ff0000',
                            borderRadius: 10,
                            ...styleSquare,
                        }}
                        />
                    <animated.div
                        style={{
                            width: 30,
                            height: 30,
                            backgroundColor: '#46e891',
                            borderRadius: 20,
                            ...styleCircle1,
                        }}
                        />
                    <Button variant='danger'>Welcome to Restaurant Management System</Button>
                    <animated.div
                        style={{
                            width: 30,
                            height: 30,
                            backgroundColor: '#46e891',
                            borderRadius: 20,
                            ...styleCircle2,
                        }}
                        />
                    <animated.div
                        style={{
                            width: 50,
                            height: 50,
                            backgroundColor: '#ff0000',
                            borderRadius: 10,
                            ...styleSquare,
                        }}
                        />
                </Navbar>
                <hr />
        </div>
            ) 
    
}

export default Navbaar;