import React from 'react'
import './playground.css'
import ss1 from './images/ss1.png'
import ss2 from './images/ss2.png'
import ss3 from './images/ss3.png'
import ss4 from './images/ss4.png'
import ss5 from './images/ss5.png'
import ss6 from './images/ss6.png'
import ss7 from './images/ss7.png'

function Playground() {
    return (
        <div className="playground">
            <div className="intro_line">
                <p>Welcome to my playground! (Fun  and experimental personal projects)</p>
            </div>
            <div className="pictures">
                <div className="row1">
                    <img src={ss1} width="300px" height="300px" alt=""/>
                    <img src={ss2} width="300px" height="300px"alt=""/>
                    <img src={ss3} width="300px" height="300px" className="ss3" alt=""/>
                </div>
                <div className="row2">
                    <img src={ss4} width="500px" height="300px" alt=""/>
                    <img src={ss5} width="425px" height="300px" alt=""/>
                </div>
                <div className="row3">
                    <img src={ss6} width="310px" height="300px" alt=""/>
                    <img src={ss7} width="610px" height="345px" alt=""/>
                </div>
            </div>
            <div className="email">
                <p>Want to collaborate? <br/>
                   <b> <span>hello@iamoby.com <span/></span> </b> </p>
            </div>
        </div>
    )
}

export default Playground
