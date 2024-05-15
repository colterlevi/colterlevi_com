import { useMemo } from 'react';
import { motion } from 'framer-motion';
import experiences from '../experiences';

const Experience = () => {
    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    const timelineYears = Array.from({ length: 21 }, (_, i) => 2024 - i);

    const getPositionForYear = (year) => {
        const maxYear = 2024;
        const minYear = 2004;
        const totalYears = maxYear - minYear;
        const yearOffset = maxYear - year;
        return (yearOffset / totalYears) * 100; // Return as a percentage of total height
    };

    const enhancedExperiences = useMemo(() => {
        let lastPositions = { left: 0, right: 0 };
        return experiences.map((exp) => {
            const startY = parseInt(exp.startDate, 10);
            const endY = parseInt(exp.endDate, 10);
            const topPosition = getPositionForYear(startY);
            const bottomPosition = getPositionForYear(endY);
            const side = lastPositions.left <= lastPositions.right ? 'left' : 'right';

            if (side === 'left' && topPosition >= lastPositions.left) {
                lastPositions.left = bottomPosition;
            } else if (side === 'right' && topPosition >= lastPositions.right) {
                lastPositions.right = bottomPosition;
            } else {
                // Flip side if the preferred side overlaps
                const alternateSide = side === 'left' ? 'right' : 'left';
                if (alternateSide === 'left') {
                    lastPositions.left = bottomPosition;
                } else {
                    lastPositions.right = bottomPosition;
                }
                exp.side = alternateSide; // Update side
                return exp;
            }

            exp.side = side; // Update side
            return exp;
        });
    }, [experiences]);

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
                    {enhancedExperiences.map((exp, index) => (
                        <motion.div
                            className={`experience-entry ${exp.side}`}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            style={{
                                top: `${getPositionForYear(parseInt(exp.startDate, 10))}%`,
                                height: `${getPositionForYear(parseInt(exp.endDate, 10)) - getPositionForYear(parseInt(exp.startDate, 10))}%`
                            }}
                            key={index}
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
