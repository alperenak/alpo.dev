import './index.css'
import React, { useEffect } from 'react'
import Logo from './components/page 1/logo'
import LogoName from './components/page 1/logoName'
import Background from './components/page 1/background'
import Nav from './components/page 1/nav'
import OleoText from './components/page 1/oleoText'
export default function App() {
    useEffect(() => {
        const mp3 = document.getElementById("audio")

        mp3.play()
        setInterval(() => {
            mp3.play()
        }, 100000)
    })
    return (
        <div className="container">
            <audio id="audio" src="/static/lightining.mp3"></audio>
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

