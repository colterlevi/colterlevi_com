import { useState } from 'react'


const About = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Aboout Colter</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                 A talented web developer experienced in front end frameworks and full stack implementation. A decade long career in digital media production developing skills in creativity and problem-solving. Driven by a passion for technology and a deep understanding of user experiences. A full-stack engineer who can assist organizations in addressing creative challenges and developing innovative solutions to better serve their user base.
                </p>
            </div>
        </>
    )
}

export default About
