import React from 'react'
import RandomNumberGame from './RandomNumberGame'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './RandomNumberGame.css'

const index = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" >
                <Container>
                    <Navbar.Brand href="#home" align="start">
                        <img
                            alt=""
                            src="./images/protest.png"
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />
                        <span className='tittle'>English Spoken</span>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <h1 className='d-flex justify-content-center heading'>Random Number Game</h1>
            <RandomNumberGame />
        </>
    )
}

export default index