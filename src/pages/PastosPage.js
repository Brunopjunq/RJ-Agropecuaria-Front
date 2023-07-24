import Header from "../components/Header";
import { styled } from "styled-components";

export default function PastosPage() {
    return (
        <>
            <Header />
            <App>
                <p>Pastos</p>
                <PastoBox>
                    <h3>Pasto 1</h3>
                </PastoBox>
                <PastoBox>
                    <h3>Pasto 2</h3>
                </PastoBox>
            </App>
        </>
    )
}

const App = styled.div`
    width: 100vw;
    min-height: 100vh;
    margin-top: 70px;
    background-color: #060945;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding-top: 40px;

    p {
        font-size: 30px;
        color: white;
        font-weight: 700;
        margin-bottom: 25px;
    }
`

const PastoBox = styled.div`
    width: 80%;
    min-height: 40px;
    background-color: white;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: 5px;
    border-radius: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-bottom: 15px;
    cursor: pointer;

    h3 {
        font-size: 20px;
        font-weight: 500;
        color: #0e2f4a;
    }

`