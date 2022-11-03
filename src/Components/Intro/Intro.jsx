import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import ades from '../../img/ades.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">

        <div className="i-name">
          <span>Hy! I am</span>
          <span>Ade Saputra</span>
          <span>Website ini masih tahap pengembangan
          </span>
        </div>

        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <a href="https://github.com/adesaputraa"><img src={Github} alt="" /></a>
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={ades} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{ top: '-4%', left: '68%' }}>
          <FloatingDiv image={Crown} txt1='Quality' txt2='Assurance' />
        </div>
        <div style={{top: '18rem', left: '0rem'}}>
          <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
        </div>
        {/* blur divs */}
        <div className="blur" style={{ background: 
        "rgb(238 210 255)" }}></div>
        <div className="blur"
        style={{
          background: '#C1F5FF',
          top: '17rem',
          width: '21rem',
          height: '11rem',
          left: '-9rem'
        }}
        ></div>
      </div>
    </div>
    
  )
}

export default Intro
