import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    const timelineYears = Array.from({ length: 17 }, (_, i) => 2024 - i); // [2024, 2023, ..., 2008]

    const experiences = [
        {
            title: 'Snappy Kraken',
            role: 'Software Engineer - Convos - Contract',
            link: 'https://getconvos.com/',
            location: 'New York, NY',
            startDate: '2023',
            endDate: '2023',
            details: [
                'Designed, developed, and tested new features for Convos\' web application using React.ts, Ruby on Rails, and GraphQL.',
                'Resolved bugs and collaborated with the design team on UI features.',
                'Contributed to code reviews and team communication enhancements.'
            ]
        },
        {
            title: 'Freelance Audio/Video Producer',
            location: 'New York, NY',
            startDate: '2017',
            endDate: '2022',
            details: [
                'The Conference Forum - Collaborated with the Executive Director and Senior Marketing Manager to create video, photo, motion graphics, and audio assets for high level Pharma and biotech conferences.',
                'Blinkist - Consulted with the Head of Content Development on a new creative audio storytelling format.',
                'Food & Wine - Worked under the Executive Director of Video Programming, producing 3 installments of the "Hungry Yet" YouTube series.'
            ]
        },
        {
            title: 'Iron Tribe Fitness',
            role: 'Videographer and Media Specialist',
            link: 'https://irontribefitness.com/',
            location: 'Birmingham, AL',
            startDate: '2015',
            endDate: '2017',
            details: [
                'Orchestrated the 2016 Athlete of the Year campaign with the VP of Marketing.',
                'Conducted monthly meetings with the marketing team, president, and CEO to select featured members for each month.',
                'Arranged travel for self and crew to the chosen candidate\'s location, ingested, and edited the resulting footage for YouTube and social platforms.',
                'Handled all video and media creation for the organization.'
            ]
        },
        {
            title: 'The University of Alabama',
            role: 'Telecommunication & Film, BS; Histoery, BA',
            link: 'https://www.ua.edu/',
            location: 'Tuscaloosa, AL',
            startDate: '2008',
            endDate: '2012',
            details: [
                'Double majored in film and history wiht a minor in creative writing.'
            ]
        }
        // Add more experiences as needed
    ];

    const getPositionForYear = (year) => {
        const maxYear = 2024;
        const minYear = 2008;
        const totalYears = maxYear - minYear;
        const yearOffset = maxYear - year;
        return (yearOffset / totalYears) * 100; // Return as a percentage of total height
    };

    return (
        <div className='card'>
            <h2>History</h2>
            <div className='subcard'>
        <div className="experience-container">
            <div className="timeline">
                {timelineYears.map((year) => (
                    <div key={year} className="timeline-mark" style={{ top: `${getPositionForYear(year)}%` }}>
                        {year}
                    </div>
                ))}
            </div>
            {experiences.map((exp, index) => {
                const startY = parseInt(exp.startDate, 10);
                const endY = parseInt(exp.endDate, 10);
                const topPosition = getPositionForYear(endY);
                const bottomPosition = getPositionForYear(startY);

                return (
                    <motion.div
                        className={`experience-entry ${index % 2 === 0 ? 'left' : 'right'}`}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ top: `${topPosition}%`, height: `${bottomPosition - topPosition}%` }}
                        key={exp.title}
                    >
                        {exp.link ? (
                            <a href={exp.link} target="_blank" rel="noopener noreferrer"><h3>{exp.title}</h3></a>
                        ) : (
                            <h3>{exp.title}</h3>
                        )}
                        <h4>{exp.role}</h4>
                        <p>{exp.location} | {exp.startDate} - {exp.endDate}</p>
                        <ul>
                            {exp.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                    </motion.div>
                );
            })}
        </div>
            </div>
        </div>
    );
};

export default Experience;
