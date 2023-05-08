import React from 'react'

export default function Footer() {
  return (
    <footer>
        <img src="/footer-chest.png" alt="" />
        <div className="footer-content">
            <p>Made by <a href="https://github.com/Qnkisa" target='_blank'>Yanislav Angelov</a></p>
            <div className="footer-socials">
                <a href="https://www.instagram.com/" target='_blank'><ion-icon name="logo-instagram"></ion-icon></a>
                <a href="https://discord.com/" target='_blank'><ion-icon name="logo-discord"></ion-icon></a>
                <a href="https://www.facebook.com/" target='_blank'><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="https://www.linkedin.com/" target='_blank'><ion-icon name="logo-linkedin"></ion-icon></a>
            </div>
        </div>
        <img src="/footer-wallet.png" alt="" />
    </footer>
  )
}
