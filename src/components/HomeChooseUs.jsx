import React from 'react'

export default function HomeChooseUs() {
  return (
    <section className="home-choose-us" id="home-choose-us">
        <div className="home-choose-us-helper">
            <h3>Why choose us</h3>
            <div className="home-choose-us-grid">
                <div className="home-choose-us-grid-helper">
                    <div className="home-choose-us-div">
                        <div className="home-choose-us-div-top">
                            <div className="choose-us-icon">
                                <ion-icon name="flash-outline"></ion-icon>
                            </div>
                            <p>Cutting-Edge Technology</p>
                        </div>
                        <div className="home-choose-us-div-bottom">
                            <p>Smart contracts enable automated, transparent, and trustless interactions, revolutionizing traditional financial systems.</p>
                        </div>
                    </div>
                    <div className="home-choose-us-div">
                        <div className="home-choose-us-div-top">
                            <div className="choose-us-icon">
                                <ion-icon name="wallet-outline"></ion-icon>
                            </div>
                            <p>Strong Value Proposition</p>
                        </div>
                        <div className="home-choose-us-div-bottom">
                            <p>Strong community support and partnerships drive market demand, increasing the value of your investment.</p>
                        </div>
                    </div>
                </div>
                <img src="/good-wizard1.png" alt="" />
                <div className="home-choose-us-grid-helper">
                    <div className="home-choose-us-div">
                        <div className="home-choose-us-div-top">
                            <div className="choose-us-icon">
                                <ion-icon name="glasses-outline"></ion-icon>
                            </div>
                            <p>Transparent Governance</p>
                        </div>
                        <div className="home-choose-us-div-bottom">
                            <p>Token holders gain voting rights on proposals, contributing to the project's growth and aligning with their interests.</p>
                        </div>
                    </div>
                    <div className="home-choose-us-div">
                        <div className="home-choose-us-div-top">
                            <div className="choose-us-icon">
                                <ion-icon name="shield-outline"></ion-icon>
                            </div>
                            <p>Elite Security Measures</p>
                        </div>
                        <div className="home-choose-us-div-bottom">
                            <p>Stringent identity verification and KYC procedures ensure a trusted and compliant platform.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
