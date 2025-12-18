import React from 'react'

const HowItWorksSection = () => {
  return (
    <>
    <div className="how-container" id="how-it-works">
        <div className="how-topic">
            <h1>How <span>Solia</span> works</h1>
        </div>
        <div className="how-grid">

            <div className="grid">
                <div className="grid-topic">
                    <h3>Log in/Sign up</h3>
                </div>
                <div className="grid-text">
                    <p>Sign up instantly and access your mining and trading dashboard.</p>
                </div>
            </div>

            <div className="grid">
                <div className="grid-topic">
                    <h3>Connect Wallet</h3>
                </div>
                <div className="grid-text">
                    <p>Securely link Phantom, Solflare for payments, rewards, and P2P trades.</p>
                </div>
            </div>

            <div className="grid">
                <div className="grid-topic">
                    <h3>Trade/Earn Using Solia</h3>
                </div>
                <div className="grid-text">
                    <p>Use $SOLIA to pay fees, trade in the P2P marketplace, or access the upcoming freelance marketplace.</p>
                </div>
            </div>

            <div className="grid">
                <div className="grid-topic">
                    <h3>Invite & Earn</h3>
                </div>
                <div className="grid-text">
                    <p>Share your unique referral link and earn bonus mining rewards from every friend who joins.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HowItWorksSection