import styled from "styled-components";
import MiniLogo from "../assets/Mini-Logo.png";
import { AiOutlineMenu } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";

export default function Header() {
    const style = { color: "white", fontSize: "2.4em" }
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <img onClick={() => navigate("/home")} src={MiniLogo} alt="logo" />
            <div>
                <AiOutlineMenu style={style} />
            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    background-color: #0e2f4a;
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    margin-bottom: 70px;

    img {
        height: 60px;
        border-radius: 100%;
        cursor: pointer;
    }

    div {
        position: fixed;
        top: 15px;
        right: 10px;
        z-index: 1;
        cursor: pointer;
    }
`