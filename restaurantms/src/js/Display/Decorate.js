import React from 'react'
import { animated, useSpring } from 'react-spring';
import { Button, Navbar, NavDropdown } from 'react-bootstrap';


const Decorate =(props)=>{
    const styleSquare = useSpring({
        loop: true,
        from: { rotateZ: 0 },
        to: { rotateZ: 180 },
      })
    const styleCircle1 = useSpring({
        loop: { reverse: true },
        from: { x: 0 },
        to: { x: 430 },
    })
    const styleCircle2 = useSpring({
        loop: { reverse: true },
        from: { x: 0 },
        to: { x: -430 },
    })

    return(
        <div className="navbar navbar-expand bg-">
        
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
                    <Button variant='danger'>{props.displayText}</Button>
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
        </div>
    )
}

export default Decorate;