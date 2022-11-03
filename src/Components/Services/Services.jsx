import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './CV.pdf'

const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
          <span>Skill</span>
          <span>Services</span>
          <spane>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem sequi labore rem 
            <br />
            ismpu is simple
          </spane>

          <a href={Resume} download>
          <button className="button s-button">Download CV</button>
          </a>

          <div className="blur s-blur1" style={{ background: "#ABF1FF94"}}></div>
      </div>

      {/* right side */}
        <div className="cards">
           <div style={{left: '14rem'}}>
            <Card
            emoji = {HeartEmoji}
            heading = {'Quality Assurance'}
            detail ={'Cypress, Katalon, Jira, Qase.io,  '}
            />
           </div>

           {/* Second card */}
           <div style={{ top: "12rem", left: "-4rem"}}>
            <Card
                emoji={Glasses}
                heading = {'Perogramming'}
                detail ={'PHP, JavaScript, CSS, React,  '}
            />
           </div>

            {/* 3 */}
            <div style={{ top: "19rem", left: "12rem"}}>
            <Card
                emoji={Humble}
                heading = {'Design'}
                detail ={'Photoshop, Autocad, AI'}
            />
           </div>
           <div className="blur s-blur2" style={{bacground: "var(--purple)" }}></div>
        </div>
    </div>
  )
}

export default Services
