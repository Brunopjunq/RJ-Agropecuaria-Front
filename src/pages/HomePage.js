import { styled } from "styled-components";
import Header from "../components/Header";

export default function HomePage() {
    return (
        <>
            <Header />
            <App>

            </App>
        </>
    )
}

const App = styled.div`
    width: 100vw;
    min-height: 100vh;
    margin-top: 80px;
`