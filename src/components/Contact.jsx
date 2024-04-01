import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {

    return (
        <>
            <h1>Contact Colter</h1>
            <motion.div
                animate={{ x: 500 }}
                transition={{ delay: 1 }}
            >
                <p>
                    call email or text!
                </p>
            </motion.div>
        </>
    )
}

export default Contact
