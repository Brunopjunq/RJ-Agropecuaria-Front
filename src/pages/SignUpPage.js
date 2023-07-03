import styled from "styled-components";
import Logo from '../assets/Logo.png';
import { Link } from "react-router-dom";

export default function SignUpPage() {
    return (
        <App>
            <LogoBox>
                <img src={Logo} alt="Logo" />  
            </LogoBox>
            <InputBox>
                <input 
                placeholder="E-mail"
                name="email"
                />
                <input
                placeholder="Senha"
                name="password"
                />
                <input
                placeholder="Repita a senha"
                name="password2"
                />
                <button>Cadastrar</button>
                <LinkBox to="/">
                    Já está inscrito? Faça login
                </LinkBox>
            </InputBox>
        </App>
    )
}

const App = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const LogoBox = styled.div`
    display: flex;
    margin-bottom: 70px;
    
    img {
        height: 230px;
    }
`

const InputBox = styled.div`
    display: flex;
    flex-direction: column;

    input {
        margin-top: 10px;
        width: 200px;
        height: 25px;
        border-radius: 6px;
        border-color: #0e2f4a;
        font-weight: 500;
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

const LinkBox = styled(Link)`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #0e2f4a;
    margin-top: 5px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`