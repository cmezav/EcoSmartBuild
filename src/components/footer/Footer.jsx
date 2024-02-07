import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container flexSB'>
          <div className='legal'>
            <p>
              2024 © <span>EcoSmartBuild</span>
            </p>
          </div>
          <div className='links flexSB'>
            <li>Donar</li>
            <li>Ayuda</li>
            <li>Contáctanos</li>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
