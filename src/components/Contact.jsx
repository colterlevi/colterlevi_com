import { useState } from 'react'


const Contact = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Contact Colter</h1>
            <div className="card">
                <p>
                    call email or text!
                </p>
            </div>
        </>
    )
}

export default Contact
