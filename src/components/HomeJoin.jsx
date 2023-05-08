import React from 'react'

export default function HomeJoin() {
  return (
    <section className="home-join" id="home-join">
        <div className="home-join-content">
            <h4><span>Come</span> and <span>join</span> us on <span>discord</span></h4>
            <p>Consolidate your crypto investments and manage them in a single location.</p>
            <a href="https://discord.com/" target='_blank'>Join via Discord</a>
            <div className="home-join-currencies">
                <img src="/bitcoin-logo.png" alt="" />
                <img src="/ethereum-logo.png" alt="" />
            </div>
        </div>
    </section>
  )
}
