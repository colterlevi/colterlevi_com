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
    console.log(isActive)
    return (
        <div className="App">
            <header className="App-header">
        <nav className={`${styles.navbar}`}>
            <Link to="/">
                <img src="src/assets/colterlevi.png" className={`${styles.logo}`} />
            </Link>
            <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                <li onClick={removeActive}>
                    <Link className={`${styles.navLink}`} to="/about">About</Link>
                </li>
                <li onClick={removeActive}>
                    <Link className={`${styles.navLink}`} to="/projects">Projects</Link>
                </li>
                <li onClick={removeActive}>
                    <Link className={`${styles.navLink}`} to="/contact">Contact</Link>
                </li>
                {/* Add more navigation links as needed */}
            </ul>
                    <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
                        <span className={`${styles.bar}`}></span>
                        <span className={`${styles.bar}`}></span>
                        <span className={`${styles.bar}`}></span>
                    </div>
        </nav>
        </header>
        </div>
    );
}

export default Navbar;
