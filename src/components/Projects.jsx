import { useState } from 'react'


const Projects = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Colter's Projects</h1>
            <div className="card">
                <h2>
                    This button is my project.
                </h2>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    )
}

export default Projects
