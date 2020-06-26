import './index.css'
import React from 'react'
import Logo from './components/page 1/logo'
import LogoName from './components/page 1/logoName'
import Background from './components/page 1/background'
import Nav from './components/page 1/nav'
export default function App() {
    return (
        <div className="container">
            <Background />
            <LogoName />
            <Logo />
            <Nav/>
        </div>
    )
}

