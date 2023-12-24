import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);

`

function Index() {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
            >
                <Container>
                    <h1>Diabetes Prediction</h1>
                    <Link to="/prediction" className="link">Let&apos;s do it</Link>
                </Container>

            </motion.div>
        </AnimatePresence>
    )
}

export default Index
