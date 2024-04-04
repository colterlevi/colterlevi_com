import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {

    return (
        <motion.div
            className="card"
            initial={{ opacity: 0, scale: .95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .75 }}
        >
            <h1>Contact Colter</h1>
           <div className='subcard'>
                <p>
                    call email or text!
                </p>
            </div>
        </motion.div>
    )
}

export default Contact
