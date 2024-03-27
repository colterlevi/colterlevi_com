import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './styles/Navbar.module.css';

const Navbar = () => {
    // adding the states 
    const [isActive, setIsActive] = useState(false);
    //add the active class
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };
    //clean up function to remove the active class
    const removeActive = () => {
        setIsActive(false)
    }
    return (
        <nav className={`${styles.navbar}`}>
            <Link to="/">
                <img src="src/assets/colterlevi.png" className={`${styles.logo}`} />
            </Link>
            <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                {/* Add more navigation links as needed */}
            </ul>
        </nav>
    );
}

export default Navbar;
