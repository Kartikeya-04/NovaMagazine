import React from 'react';

const Footer = () => {
  return (
    <footer>
        <div className='f-head' >
            <h1>NOVA</h1>
            <p>@all right reserved</p>
        </div>
        <div className='f-text' >
            <h3>Follow Us</h3>
            <div className='f-link' >
                <a href="https://linkedin.com" target={"blank"} >LinkedIn</a>
                <a href="https://instagram.com" target={"blank"} >Instagram</a>
                <a href="https://github.com" target={"blank"} >GitHub</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer;