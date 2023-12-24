import styled from "@emotion/styled";


const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem 2rem;
    backdrop-filter: blur(10px);
    @media screen and (min-width: 992px) {
        width: 80%;
        backdrop-filter: blur(20px);
    }
`

const Input = styled.input`
    max-width: 700px;
    padding: 12px;
    margin: 0;
    height: 40px;
    outline: none;
    border: none;
    background: rgba(0,0,0, .3);
    backdrop-filter: blur(30px);
    text-align: center;
    color: white;
    font-size: 18px;
    &:focus{
        background: rgba(0,0,0, .5);
    }
    &:focus::placeholder {
        color: transparent;
    }
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 12px 0;
    box-sizing: border-box;
    @media screen and (min-width: 992px) {
        justify-content: space-between;
        flex-direction: row;
    }
    label {
        transition: all .3s ease;
        border-bottom: 2px solid transparent;
    }
    &:hover > label {
        border-bottom-color: black;
    }
`

const FormPrediction = () => {
    return (
        <Container>
            <h1>Fill out this form</h1>
            <InputContainer>
                <label htmlFor="pregnacies">Pregnancies</label>
                <Input
                    id="pregnancies"
                    name="pregnancies"
                    type="number"
                    step="0.001"
                    placeholder="0.00" />
            </InputContainer>
            <InputContainer>
                <label htmlFor="glucose">Glucose</label>
                <Input
                    id="glucose"
                    name="glucose"
                    type="number"
                    step="0.001"
                    placeholder="0.00" />
            </InputContainer>
            <InputContainer>
                <label htmlFor="bloodPressure">Blood Pressure</label>
                <Input
                    id="bloodPressure"
                    name="bloodPressure"
                    type="number"
                    step="0.001"
                    placeholder="0.00" />
            </InputContainer>
            <InputContainer>
                <label htmlFor="skinThickness">Skin Thickness</label>
                <Input
                    id="skinThickness"
                    name="skinThickness"
                    type="number"
                    step="0.001"
                    placeholder="0.00" />
            </InputContainer>
            <InputContainer>
                <label htmlFor="insulin">Insulin</label>
                <Input
                    id="insulin"
                    name="insulin"
                    type="number"
                    step="0.001"
                    placeholder="0.00" />
            </InputContainer>
            <InputContainer>
                <label htmlFor="bmi">BMI</label>
                <Input
                    id="bmi"
                    name="bmi"
                    type="number"
                    step="0.001"
                    placeholder="0.00" />
            </InputContainer>
            <InputContainer>
                <label htmlFor="diabetesPedigreeFunction">Diabetes Pedigree Function</label>
                <Input
                    id="diabetesPedigreeFunction"
                    name="diabetesPedigreeFunction"
                    type="number"
                    step="0.001"
                    placeholder="0.00" />
            </InputContainer>
            <InputContainer>
                <label htmlFor="age">Age</label>
                <Input
                    id="age"
                    name="age"
                    type="number"
                    step="0.001"
                    placeholder="0.00" />
            </InputContainer>
        </Container>
    )
}

export default FormPrediction