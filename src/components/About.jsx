import { motion } from "framer-motion"

const About = () => {

    return (
        <motion.div
         className="card"
            initial={{ opacity: 0, scale: .95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .75 }}
        >
            <div>
                <h1>About Colter</h1>
            </div>
            <div className="subcard">
                <p>
                 A talented web developer experienced in front end frameworks and full stack implementation. A decade long career in digital media production developing skills in creativity and problem-solving. Driven by a passion for technology and a deep understanding of user experiences. A full-stack engineer who can assist organizations in addressing creative challenges and developing innovative solutions to better serve their user base.
                </p>
            </div>
        </motion.div>
    )
}

export default About
