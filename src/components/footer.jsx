import { motion } from "framer-motion"
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import styles from './styles/Footer.module.css'

const Footer = () => {

return (
    <motion.div
        className={`${styles.footer}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
    >
        <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    </motion.div>
)
}

export default Footer