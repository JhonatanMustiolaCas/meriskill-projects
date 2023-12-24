import styled from "@emotion/styled";
import { Form, useActionData } from "react-router-dom";
import AnimationLayout from "../components/AnimationLayout";
import FormPrediction from "../components/FormPrediction";
import Error from "../components/Error";
import ResultDisplay from "../components/ResultDisplay";

const ButtonSubmit = styled.input`
    background-color: rgb(17, 216, 223);
    padding: 1rem 2rem;
    font-size: 18px;
    margin-top: 1rem;
    color: black;
    text-transform: uppercase;
    font-weight: 900;
    cursor: pointer;
    transition: all .2s ease;
    border: none;
    &:hover {
        background-color: black;
        color: white;
    }
`

function Prediction() {

    const actionData = useActionData();

    return (
        <>
            {actionData && Object.keys(actionData.result).length > 0 ? (
                <ResultDisplay
                    result={actionData.result.data.result}
                    accuracy={actionData.result.data.accuracy}
                />
            ) : (
                <Form
                    style={{ width: "100%" }}
                    method="post"
                >
                    {actionData && actionData.errors.length && actionData.errors.map((error, i) => <Error key={i}>{error}</Error>)}
                    <AnimationLayout>
                        <FormPrediction />
                        <ButtonSubmit
                            type="submit"
                            value="Send" />
                    </AnimationLayout>
                </Form>
            )}

        </>
    )
}
export default Prediction
