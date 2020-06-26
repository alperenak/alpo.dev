import './index.css'
import React from 'react'
import Logo from './components/page 1/logo'
import LogoName from './components/page 1/logoName'
import Background from './components/page 1/background'
import Nav from './components/page 1/nav'
import OleoText from './components/page 1/oleoText'
export default function App() {
    return (
        <div className="container">
            <header className="header">
                <Background />
                <LogoName />
                <Logo />
                <Nav />
            </header>
            <main className="main">
                {/* <OleoText title={`Full-Stack Developer \n & \n Designer`} position="left" /> */}
                <div className="main-title">
                    <h1> Full-Stack Developer & Designer </h1>
                </div>

            </main>

        </div>
    )
}

