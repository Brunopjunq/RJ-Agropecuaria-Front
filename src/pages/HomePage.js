import { styled } from "styled-components";
import Header from "../components/Header";
import Cow from "../assets/White-cow.png";

export default function HomePage() {
    return (
        <>
            <Header />
            <App>
                <BoxContent color={'#592323'}>
                    <img src={Cow} />
                    <p>Adicionar Animal</p>
                </BoxContent>
                <BoxContent color={'#25272b'}>
                    <img src={Cow} />
                    <p>Adicionar Nascimento</p>
                </BoxContent>
                <BoxContent color={'#2b1847'}>
                    <img src={Cow} />
                    <p>Consultar Pasto</p>
                </BoxContent>
                <BoxContent color={'#461a4f'}>
                    <img src={Cow} />
                    <p>Consultar Cobertura</p>
                </BoxContent>
                <BoxContent color={'#4f3e16'}>
                    <img src={Cow} />
                    <p>Consultar Animais</p>
                </BoxContent>
                <BoxContent color={'#0f3822'}>
                    <img src={Cow} />
                    <p>Lançar Venda de Animal</p>
                </BoxContent>
                <BoxContent color={'#3b3d11'}>
                    <img src={Cow} />
                    <p>Lançar Morte de Animal</p>
                </BoxContent>
            </App>
        </>
    )
}

const App = styled.div`
    width: 100vw;
    min-height: 100vh;
    margin-top: 70px;
`

const BoxContent = styled.div`
    width: 100vw;
    height: 150px;
    background-color: ${(props) => props.color};
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15px;

    p {
        color: white;
        font-weight: 700;
        cursor: pointer;
    }

    img {
        height: 75px;
        cursor: pointer;
    }
    
`