import styles from "./footer.module.css"
import { Link } from "react-router-dom";
import { SiAdobephotoshop } from "react-icons/si";

import LOGO from "/public/Aliba1.png"


const Footer = () => {
    return (
        
        <footer>
        <div className="footer-container">
            <div className="footer-left">
                <h3></h3>
                <p>inst: al1bekesenta1</p>
                <p>Телефон: +77071594699</p>
                <p>Email: alibekdarhanuly249@gmail.com</p>
            
            </div>
        </div>
        <div className="footer-bottom">
            <p>© 2024 Alibek Darhanuly.</p>
        </div>
    </footer>
    
      


    );
};

export default Footer;