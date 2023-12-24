import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

const Main = styled.main`
    height: 100vh;
    width: 100vw;
    background-image: url("/ABCD2.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Layout() {
    return (

        <Main className="layout">
            <Outlet />
        </Main>
    )
}

export default Layout
