import { motion } from "framer-motion"

const Blog = () => {

    return (
        <motion.div
            className="card"
            initial={{ opacity: 0, scale: .95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .75 }}
        >
            <div>
                <h1>Thoughts</h1>
            </div>
            <div className="subcard">
                <p>
                    list of posts...
                </p>
            </div>
        </motion.div>
    )
}

export default Blog
