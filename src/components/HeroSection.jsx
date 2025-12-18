import React from 'react'
import "../App.css";

const HeroSection = () => {
  return (
    <>
    <div className="hero-container" id="home">
        <div className="hero-texts">
            <div className="hero-contain">
                <div className="hero-topic">
                    <h1>The Future of Decentralized Work & Trade</h1>
                    </div>
                 <div className="hero-content">
                    <p>Solia is a decentralized platform that combines P2P escrow, cross
                        chain payments, mining rewards, and a Web3 job marketplace letting 
                        users trade, work, and get paid instantly.
                        </p>
                        </div>
                <div className="hero-links">
                    <div className="link-one">
                        <img src="/goggle-playstore.svg" alt="" />
                    </div>
                    <div className="link-two">
                        <img src="/apple-store.svg" alt="" />
                    </div>
                </div>
            </div>    
        </div>

        <div className="hero-image">
                 <img src="./hero-image.svg" alt="hero-image" />
        </div>
    </div>
    </>
  )
}

export default HeroSection