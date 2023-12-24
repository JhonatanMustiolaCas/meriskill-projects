import styled from "@emotion/styled"

const Container = styled.div`
    text-align: center;
    margin-top: 4px;
    background-color: red;
    color: white;
    font-weight: bold;
    padding: 3px;
    text-transform: uppercase;
`

function Error({ children }) {
    return (
        <Container className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase">
            {children}
        </Container>
    )
}

export default Error