import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {

    return (
        <motion.div
            className="card"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <h1>Contact Colter</h1>
            <motion.div
                className='subcard'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <p>
                    call email or text!
                </p>
            </motion.div>
        </motion.div>
    )
}

export default Contact
