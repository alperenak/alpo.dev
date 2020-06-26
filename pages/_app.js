import './index.css'
import React from 'react'
import Logo from './components/page1/logo'
import LogoName from './components/page1/logoName'
import Background from './components/page1/background'
export default function App() {
    return (
        <div>
            <Background />
            <LogoName />
            <Logo />
        </div>
    )
}

