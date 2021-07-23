import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { NavTopics } from './NavTopics';
import { Button, Navbar, NavDropdown } from 'react-bootstrap';

import Decorate from '../Decorate';


const Navbaar = ()=>{ 

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
                    <Decorate displayText={'WELCOME TO RESTAURANT MANAGEMENT SYSTEM'} ></Decorate>
                </Navbar>
                <hr />
        </div>
            ) 
    
}

export default Navbaar;