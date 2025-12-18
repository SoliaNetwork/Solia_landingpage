import React from 'react'

const AboutSection = () => {
  return (
    <>
    <div className="why-container" id="about">
        <div className="why-image">
            <img src="/how-it-works.svg" alt="" />
        </div>
        <div className="why-text">
            <div className="why-topic">
                <h1>Why <span>Solia</span> is different</h1>
            </div>
            <div className="why-content">
                <div className="why-reason">
                    <div className="why-logo">
                        <img src="/solia-Logo-2.svg" alt="" />
                    </div>
                    <p>Decentralized Escrow: Safe, trust less P2P trades with automated protection.</p>
                </div>

                <div className="why-reason">
                    <div className="why-logo">
                        <img src="/solia-Logo-2.svg" alt="" />
                    </div>
                    <p>Real Token Utility: Use $SOLIA for fees, rewards, and payments across the ecosystem.</p>
                </div>

                <div className="why-reason">
                    <div className="why-logo">
                        <img src="/solia-Logo-2.svg" alt="" />
                    </div>
                    <p>Instant Cross-Chain Payments: Built on Solana with upcoming TON integration.</p>
                </div>

                <div className="why-reason">
                    <div className="why-logo">
                        <img src="/solia-Logo-2.svg" alt="" />
                    </div>
                    <p>Fair Mining Model: Simulated mining that distributes real tokens without draining battery.</p>
                </div>

                <div className="why-reason">
                    <div className="why-logo">
                        <img src="/solia-Logo-2.svg" alt="" />
                    </div>
                    <p>Web3 Job Marketplace (Coming Soon): Earn and pay instantly with crypto</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutSection