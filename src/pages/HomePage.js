import { styled } from "styled-components";
import Header from "../components/Header";
import Cow from "../assets/White-cow.png";
import SideBar from "../components/SideBar";
import { CgAdd } from 'react-icons/cg';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const styleA = { color: 'white', fontSize: '30px', position: 'absolute', top: '50%', left: '55%'};
    const styleS = { color: 'white', fontSize: '27px', position: 'absolute', top: '52%', left: '55%'};
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <App>
                <BoxContent onClick={() => navigate("/addAnimal")} color={'#592323'}>
                    <img src={Cow} alt="cow" />
                    <CgAdd
                        style={styleA}
                    />
                    <p>Adicionar Animal</p>
                </BoxContent>
                <BoxContent onClick={() => navigate("/addBirth")} color={'#25272b'}>
                    <img src={Cow} alt="cow" />
                    <CgAdd
                        style={styleA}
                    />
                    <p>Adicionar Nascimento</p>
                </BoxContent>
                <BoxContent onClick={() => navigate("/pastos")} color={'#2b1847'}>
                    <img src={Cow} alt="cow" />
                    <BsSearch
                        style={styleS}
                    />
                    <p>Consultar Pasto</p>
                </BoxContent>
                <BoxContent onClick={() => navigate("/coberturas")} color={'#461a4f'}>
                    <img src={Cow} alt="cow" />
                    <BsSearch
                        style={styleS}
                    />
                    <p>Consultar Cobertura</p>
                </BoxContent>
                <BoxContent  color={'#4f3e16'}>
                    <img src={Cow} alt="cow" />
                    <BsSearch
                        style={styleS}
                    />
                    <p>Consultar Animais</p>
                </BoxContent>
                <BoxContent onClick={() => navigate("/addSale")} color={'#0f3822'}>
                    <img src={Cow} alt="cow" />
                    <CgAdd
                        style={styleA}
                    />
                    <p>Lançar Venda de Animal</p>
                </BoxContent>
                <BoxContent onClick={() => navigate("/addDeath")} color={'#3b3d11'}>
                    <img src={Cow} alt="cow" />
                    <CgAdd
                        style={styleA}
                    />
                    <p>Lançar Morte de Animal</p>
                </BoxContent>
            </App>
            {/* <SideBar /> */}
        </>
    )
}

const App = styled.div`
    min-height: 100vh;
    margin-top: 70px;
`

const BoxContent = styled.div`
    /* width: 100vw; */
    height: 150px;
    background-color: ${(props) => props.color};
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15px;
    position: relative;

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