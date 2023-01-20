import React from 'react';
import "./index.css"

function Footer() {
    return ( 
        <footer className="footer-container">
            <div className='footer-bodyContainer'>
                <div className="footer-body">
                    <h2 className="footer-h2">Contact Info</h2>
                    <div className='footer-linkContainer'>
                        <a className="footer-link" href='mailto:joshgumperz@gmail.com' rel="noopener noreferrer" target="_blank">joshgumperz@gmail.com</a>
                        <a className="footer-link" href='https://github.com/JoshGumperz' rel="noopener noreferrer" target="_blank">https://github.com/JoshGumperz</a>
                        <a className="footer-link" href='https://www.linkedin.com/in/josh-gumperz-8706a8185/' rel="noopener noreferrer" target="_blank">https://www.linkedin.com/in/josh-gumperz-8706a8185/</a>
                    </div>
                </div>
            </div>
        </footer>
     );
}

export default Footer;