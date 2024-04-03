import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import styles from './styles/Footer.module.css'

const Footer = () => {

return (
    <div className={`${styles.footer}`}>
        <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className={`${styles.logo}`} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className={`${styles.logo}`} alt="React logo" />
        </a>
    </div>
)
}

export default Footer