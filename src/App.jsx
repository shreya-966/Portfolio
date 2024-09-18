import React, { useState } from "react";
import Top from "./Components/Topbar/Top";
import Intro from "./Components/intro/Intro"
import Testimonials from "./Components/Testimonials/Testimonials"
import Works from "./Components/Works/Works"
import Contact from "./Components/Contact/Contact"
import Menu from "./Components/Menu/Menu"
import Education from "./Components/Education/Education";
import './app.scss'

const App = ()=>{
    const [MenuOpen , setMenuOpen] = useState(false)

    return(
        <>
            <div className="app">
            <Top menuOpen = {MenuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen = {MenuOpen} setMenuOpen={setMenuOpen}/>
                <div className="sections">
                    <Intro/>
                    <Testimonials/>
                    <Education/>
                    <Works/>
                    <Contact/>
                </div>
            </div>
        </>
    )
}

export default App;