import { styled } from "styled-components";
import { AiOutlineMenu } from 'react-icons/ai'

export default function SideBar() {
    const style = { color: "white", fontSize: "2.4em" }

    return (
        <Container>
            <SideBarBox >
                <div>
                    <AiOutlineMenu style={style} />
                </div>
                <Title>
                    <p>RJ Agropecuária</p>
                </Title>
                <ItemBox>
                    <p>HOME</p>
                    <p>COBERTURAS</p>
                    <p>FAZENDAS</p>
                    <p>PASTOS</p>
                </ItemBox>
            </SideBarBox>
        </Container> 
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
    display: flex;
    align-items: right;
    justify-content: right;
    position: fixed;
    top: 0px;
    left: 0px;
`

const SideBarBox = styled.div`
    width: 75%;
    height: 100vh;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #0e2f4a;
    position: relative;

    div {
        position: absolute;
        top: 15px;
        left: 10px;
        z-index: 1;
        cursor: pointer;
    }
`

const Title = styled.div`
    border-bottom: 1px solid white;
    width: 100%;
    height: 45px;
    margin-top: 10px;
    display: flex;
    justify-content: center;

    p {
        color: white;
        font-weight: 700;
        font-size: 22px;
        padding-left: 10px;
    }
`

const ItemBox = styled.div`
    width: 100%;
    height: 35px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    
    p {
        font-size: 20px;
        font-weight: 700;
        color: white;
        padding-bottom: 50px;
        cursor: pointer;

        &:hover {
            color: gray;
        }
    }
`