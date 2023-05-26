import React from 'react'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <title>Space X</title>
                <Nav justify variant='tabs' defaultActiveKey='/fuseur'>
                    <Nav.Item>
                        <Nav.Link href='/crew'>Liste des membres</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey href='/Fuseur'>
                            Liste des fusées
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/history'>History</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/company'>About SpaceX</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/quiz'>QUIZ</Nav.Link>
                    </Nav.Item>
                </Nav>
            </header>
            <main>{children}</main>
            <footer>&copy; 2023 IPSSI SQY</footer>
        </>
    )
}

export default Layout
