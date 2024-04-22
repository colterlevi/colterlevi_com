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
        <div className="App">
            <header className={`${styles.header}`}>
        <nav className={`${styles.navbar}`}>
            <Link to="/">
                        <img src="src/assets/Colter-Edit-1x1-6-sm.jpg" className={`${styles.logo}`} />
            </Link>
            <div className={`${styles.mainMenu}`}>    
                <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                    <li onClick={removeActive}>
                        <Link className={`${styles.navLink}`} to="/about">About</Link>
                    </li>
                    <li onClick={removeActive}>
                        <Link className={`${styles.navLink}`} to="#experience">Experience</Link>
                    </li>
                    <li onClick={removeActive}>
                        <Link className={`${styles.navLink}`} to="/projects">Projects</Link>
                    </li>
                    <li onClick={removeActive}>
                        <Link className={`${styles.navLink}`} to="/blog">Blog</Link>
                    </li>
                    <li onClick={removeActive}>
                        <Link className={`${styles.navLink}`} to="/contact">Contact</Link>
                    </li>
                    {/* Add more navigation links as needed */}
                </ul>
            </div>
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
