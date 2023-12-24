import styled from "@emotion/styled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import AnimationLayout from "./AnimationLayout";
import { Link } from "react-router-dom";

const Container = styled.div`
    
    width: 100%;
    padding: 1rem;
    background: transparent;
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    
    @media screen and (min-width: 992px) {
        width: 60%;
        display: grid;
        padding: 5rem;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 80px 1fr;
    }
`

const H1 = styled.h1`
    grid-column: 1/3;
    @media screen and (min-width: 992px){
        grid-column: 1/3;
    }
`

const ProgressbarContainer = styled.div`
    grid-column: 1/2;
    align-items: center;
    width: 12rem;
`

const ResultContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    grid-column: 2/3;

    span {
        border: 1px solid white;
        font-size: 2rem;
        font-weight: 700;
        padding: 2rem;
        color: white;
    }
`


function ResultDisplay({ result, accuracy }) {
    return (
        <AnimationLayout>
            <Container>
                <H1>Result</H1>
                <ProgressbarContainer>
                    <h2>Accuracy</h2>
                    <CircularProgressbar
                        styles={buildStyles({
                            pathColor: "rgb(17, 216, 223)",
                            trailColor: "#FFF",
                            textColor: "#FFF",
                        })}
                        value={accuracy}
                        text={`${Math.round(accuracy)}%`}
                    />
                </ProgressbarContainer>
                <ResultContainer>
                    <span>
                        {result == "1" ? "Positive" : "Negative"}
                    </span>
                    <Link
                        className="link-blue"
                        to="/prediction"
                    >
                        Take again
                    </Link>
                </ResultContainer>
            </Container>
        </AnimationLayout>
    )
}

export default ResultDisplay
