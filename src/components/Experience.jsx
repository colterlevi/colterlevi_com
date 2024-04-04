import { motion } from "framer-motion"

const Experience = () => {

    return (
        <motion.div
            className="card"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <div>
                <h1>Work History</h1>
            </div>
            <div className="subcard">
                <h3>Snappy Kraken</h3>
                <p>New York, NY | 05/2023 - 12/2023</p>
                <h4>Software Engineer - Convos - Contract</h4>
                <ul>
                    <li>Designed, developed, and tested new features and full stack CRUD operations for Convos' web application using React.ts, Ruby on Rails, ActiveStorage, PostgreSQL, and GraphQL.</li>
                    <li>Resolved bugs and worked with the design team to implement UI features and changes.</li>
                    <li>Contributed to code reviews, provided and received feedback to enhance code quality and team communication.</li>
                </ul>
                <br />
            <hr />
                <br />
                <h3>Freelance Audio/Video Producer</h3>
                <p>New York, NY | 02/2017 - 10/2022</p>
                <ul>
                    <li>The Conference Forum - Collaborated with the Executive Director and Senior Marketing Manager to create video, photo, motion graphics, and audio assets for high level Pharma and biotech conferences.</li>
                    <li>Blinkist - Consulted with the Head of Content Development on a new creative audio storytelling format.</li>
                    <li>Food & Wine - Worked under Executive Director of Video Programming producing 3 installments of the "Hungry Yet" YouTube series.</li>
                </ul>
                <br />
            <hr />
                <br />
                <h3>Iron Tribe Fitness</h3>
                <p>Birmingham, AL | 11/2015 - 02/2017</p>
                <h4>Videographer and Media Specialist</h4>
                <ul>
                    <li>Orchestrated the 2016 Athlete of the Year campaign with the VP of Marketing.</li>
                    <li>Conducted monthly meetings with the marketing team, president, and CEO to select featured members for each month.</li>
                    <li>Arranged travel for self and crew to the chosen candidate's location, ingested, and edited the resulting footage for YouTube and social platforms.</li>
                    <li>Additionally, handled all video and media creation for the organization.</li>
                </ul>
            </div>
        </motion.div>
    )
}

export default Experience
