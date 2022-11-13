        import React from 'react'
        import './Works.css'
        import Dian from "../../img/dian.png";
        import Qase from "../../img/qase.png";
        import Qa from "../../img/qa.png";
        import Cy from "../../img/cy.png";
        import Katalon from "../../img/katalon-studio.png";

        const Works = () => {
        return (
            <div className="works">
                <div className="awesome">
                    <span>Works for All these</span>
                    <span>Brands & Clients</span>
                    <spane>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem sequi labore rem 
                        <br />
                        ismpu is simple
                        <br/>
                        adadada sdfsfs sfsfsfs sfsfsfsfs
                        <br/>
                        lorem ipsum is simple dummy text
                    </spane>
                    <button className="button s-button">Hire Me</button>
                    <div className="blur s-blur1" style={{ background: "#ABF1FF94"}}></div>
                </div>

                {/* right side */}
                <div className="w-right">
                    <div className="w-mainCircle">
                        <div className="w-secCircle">
                            <img src={Dian} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Qase} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Qa} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Cy} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Katalon} alt="" />
                        </div>

                    </div>
                    {/* background Circles */}
                    <div className="w-backCircle blueCircle"></div>
                    <div className="w-backCircle yellowCircle"></div>
                </div>
            </div>
        )
        }

        export default Works
