import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const [selectedExperience, setSelectedExperience] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);

    const Modal = ({ isVisible, title, content, onClose }) => {
        return (
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-backdrop"
                    >
                        <motion.div className="modal-content"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                        >
                            <button onClick={onClose}>Close</button>
                            <h3>{title}</h3>
                            {content}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    };
    
    const handleCardClick = (exp) => {
        setSelectedExperience(exp);
        setIsModalVisible(true);
        console.log(exp)
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedExperience({});
    };

    const timelineYears = Array.from({ length: 11 }, (_, i) => 2024 - i); // Generates years in descending order

    const experiences = [
        {
            title: 'Snappy Kraken',
            link: 'https://getconvos.com/',
            location: 'New York, NY',
            startDate: '2023',
            endDate: '2023',
            role: 'Software Engineer - Convos - Contract',
            details: [
                'Designed, developed, and tested new features for Convos\' web application using React.ts, Ruby on Rails, and GraphQL.',
                'Resolved bugs and collaborated with the design team on UI features.',
                'Contributed to code reviews and team communication enhancements.'
            ]
        },
        {
            title: 'Freelance Audio/Video Producer',
            link: 'https://colterlevi.com/',
            location: 'New York, NY',
            startDate: '2017',
            endDate: '2022',
            details: [
                'The Conference Forum - Collaborated with the Executive Director and Senior Marketing Manager to create video, photo, motion graphics, and audio assets for high level Pharma and biotech conferences.',
                'Blinkist - Consulted with the Head of Content Development on a new creative audio storytelling format.',
                'Food & Wine - Worked under Executive Director of Video Programming producing 3 installments of the "Hungry Yet" YouTube series.'
            ]
        },
        {
            title: 'Iron Tribe Fitness',
            link: 'https://irontribefitness.com/',
            location: 'Birmingham, AL',
            role: 'Videographer and Media Specialist',
            startDate: '2015',
            endDate: '2017',
            details: [
                'Orchestrated the 2016 Athlete of the Year campaign with the VP of Marketing.',
                'Conducted monthly meetings with the marketing team, president, and CEO to select featured members for each month.',
                'Arranged travel for self and crew to the chosen candidate\'s location, ingested, and edited the resulting footage for YouTube and social platforms.',
                'Additionally, handled all video and media creation for the organization.'
            ]
        }
        // Additional experiences as needed
    ];

    // Reverse the calculation for positioning
    const getPositionForYear = (year) => {
        const maxYear = 2024;
        const yearOffset = maxYear - year;
        const totalYears = maxYear - 2014;
        return (yearOffset / totalYears) * 100; // Return as percentage of total width
    };

    console.log(selectedExperience)

    return (
        <div className="experience-container">
            <div className="timeline">
                {timelineYears.map((year) => (
                    <div key={year} className="timeline-mark" style={{ left: `${getPositionForYear(year)}%` }}>
                        <span className="year-label">{year}</span>
                    </div>
                ))}
            </div>
            {experiences.map((exp) => {
                const position = getPositionForYear(parseInt(exp.endDate, 10));
                return (
                    <motion.div
                        className="experience-entry"
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ left: `${position}%` }}
                        key={exp.title}
                        onClick={() => handleCardClick(exp)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                            <h3>{exp.title}</h3>
                        {selectedExperience && (
                            <Modal
                                isVisible={isModalVisible}
                                title={selectedExperience.title}
                                content={
                                    <div>
                                        {exp.link ? (
                                            <a href={exp.link} target="_blank" rel="noopener noreferrer"><h3>{exp.title}</h3></a>
                                        ) : (
                                            <h3>{exp.title}</h3>
                                        )}
                                        <p>{`${selectedExperience.startDate} - ${selectedExperience.endDate}`}</p>
                                        <h4>{selectedExperience.role}</h4>
                                        {/* <ul>
                                            {selectedExperience.details.map((detail, index) => (
                                                <li key={index}>{detail}</li>
                                            ))}
                                        </ul> */}

                                    </div>
                                }
                                onClose={closeModal}
                            />
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
};

export default Experience;
