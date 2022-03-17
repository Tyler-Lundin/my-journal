import styled from 'styled-components'
import wood_texture from '../assets/wood-texture.jpg'
import Display from '../components/journal/Display'
import Journal from '../components/journal/Journal'
import Page from '../components/page/Page'

const Home = () => {
    const S = {}
    S.Container = styled.div`
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        display: grid;
        justify-items: center;
        align-items: center;        
    `
    return (
        <S.Container>
            <Background/>
            <Display>
                <Journal/>
                <Journal/>
            </Display>
            <Page/>
        </S.Container>
    )
}

const Background = () => {
    const S = {}
    S.Container = styled.div`
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        top: 0; left: 0;
        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    `
    return (
        <S.Container>
            <img src={wood_texture} alt='wood texture'/>
        </S.Container>
    )
}

export default Home