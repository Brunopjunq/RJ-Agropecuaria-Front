import Header from "../components/Header";
import { styled } from "styled-components";

export default function AddDeathPage() {
    return (
        <>
            <Header />
            <App>
                <p>Lançar Morte</p>
                <InputBox>
                    <input 
                    placeholder="Tag do Animal"
                    name="tag"
                    />
                    <input
                    placeholder="Data da Morte"
                    name="date"
                    />
                    <input
                    placeholder="Causa da Morte"
                    name="cause"
                    />
                    <button>Lançar Morte</button>
                </InputBox>
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

const InputBox = styled.form`
    display: flex;
    flex-direction: column;

    input {
        margin-top: 10px;
        width: 250px;
        height: 35px;
        border-radius: 6px;
        border-color: #0e2f4a;
        font-weight: 700;
        font-size: 15px;
        color: #0e2f4a;
        padding-left: 10px;

    }

    button {
        width: 100%;
        height: 30px;
        background: #0e2f4a;
        border-radius: 6px;
        font-weight: 700;
        font-size: 15px;
        line-height: 40px;
        color: #ffffff;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        cursor: pointer;
    }
`