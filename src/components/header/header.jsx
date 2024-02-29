import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { SiAdobephotoshop } from "react-icons/si";

const Header = () => {
  return (
    <div className={styles.wrapper} >
      <div> 
        <img className={styles.photo} src="/public/Aliba1.png" alt="Logo" />
        </div>
      <ul>
        <li>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/catalog" className={styles.link}>
            Catalog
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contacts" className={styles.link}>
            Contacts
          </Link>
        </li>
      </ul>

      <div>
        <Link to="/cart" className={styles.link}>
          <SiAdobephotoshop size="60" color="#DEFAFD" />     
        </Link>
      </div>
    </div>
  );
};

export default Header;
