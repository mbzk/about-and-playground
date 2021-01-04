import React from 'react'
import './about.css'
import girl from './images/girl.png'
function About() {
    return (
        // main 
        <div className='about_main'>

            <div className="paragraph">
                <div className="main_paragraph">
                    <h1>Hello, I am Oby</h1>
                    
                    <p className="mainP">Design fanatic. Music Maniac. Plaintain-lover. stretch-enthusiast.Always in wanderLust.
                        Eggs and Ketchup.Mylifeisameme.lavendar
                        Motivationalspeaker.AspiringArtdirector.
                        Nigerian.Worked in three countries and still counting.Ambitious.Alignandkerning.write
                        shortstories.AvidReader.willdesignformoney
                    </p>
                </div>   

                <div className="anchor_paragraph">

                    <p className="line">Currently based in Toronto, open to relocations </p>  
                    <a href="#"> View Resume</a> 
                
                </div>
            </div>  
           
            <div className="picture">
                <img src={girl} alt=""/>
            </div>      
        </div>
    )
}

export default About
