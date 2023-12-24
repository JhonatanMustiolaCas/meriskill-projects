import { AnimatePresence, motion } from "framer-motion"

function AnimationLayout({ children }) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{
                    scale: 0,
                }}
                animate={{
                    scale: 1,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                }}
                transition={{ duration: 0.2 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default AnimationLayout
