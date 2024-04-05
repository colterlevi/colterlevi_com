import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    // Define variants for animations
    const cardVariants = {
        offscreen: { y: 50, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.4, duration: 0.8 }
        }
    };

    // Contact information
    const contacts = [
        { id: 1, type: 'Phone', value: '205-317-0802', link: `tel:205-317-0802` },
        { id: 2, type: 'Email', value: 'cllongshore@gmail.com', link: `mailto:cllongshore@gmail.com` },
        { id: 3, type: 'LinkedIn', value: 'LinkedIn Profile', link: `https://www.linkedin.com/in/cllongshore/` },
        { id: 4, type: 'GitHub', value: 'GitHub Profile', link: `https://github.com/colterlevi` },
    ];

    return (
        <div className='card'>
            <h2>Contact Information</h2>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                className="subcard"
            >
                {contacts.map((contact) => (
                    <motion.div key={contact.id} variants={cardVariants} className="contact-card">
                        <h3>{contact.type}</h3>
                        <p>
                            <a href={contact.link} target="_blank" rel="noopener noreferrer">
                                {contact.value}
                            </a>
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Contact;
