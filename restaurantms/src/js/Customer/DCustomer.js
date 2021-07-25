import React, { useState } from 'react'
import Search from '../Search'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Modal from '../Modal/Modal';
import Delete from '../Delete'

const DCustomer =()=>{

    const [srarchForCusID, setSearchForCusID] = useState(false)
    const [openModal, setOpenModel] = useState(false);
    const [style1, setStyle1] = useState({position:'sticky', top:'10%'})


    const deleteClicked =()=>{
        setStyle1({})
        setOpenModel(true)
    }

    const closeModal =()=>{
        setOpenModel(false)
        setStyle1({position:'sticky', top:'10%'})
    }

    return(
        <div>
            <hr />
            {/* <div>
                <Delete></Delete>
            </div> */}
            {openModal && <Modal closeModal={closeModal} ></Modal>}
                <div className='inf1' style={style1}>
                    <label className="form-check-label">Enter Customer ID to delete</label>
                    <input className="form-control" type="number"/>
                    <button className='btn btn-outline-danger' onClick={deleteClicked}>DELETE</button>
                    <hr />
                    <button className='btn btn-primary' onClick={()=>{setSearchForCusID(true);}} >Search for Customer ID</button>
                    <hr />
                    {srarchForCusID && <button className='btn btn-danger' onClick={()=>{setSearchForCusID(false)}} >Hide Search Section</button>}
                </div>
                {srarchForCusID && <div>
                                        <br />
                                        <h3>Search for Customer ID</h3>
                                        <hr />
                                        <Search table={'CUSTOMERS'}></Search>
                                    </div>}
        </div>
    )
}

export default DCustomer;