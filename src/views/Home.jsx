import { useSelector } from 'react-redux'
import styled from 'styled-components'
import wood_texture from '../assets/wood-texture.jpg'
import Display from '../components/journal/Display'
import Page from '../components/page/Page'

const Home = () => {
    const isJournalOpen = useSelector(state => state.journal.value.isOpen)

    return (
        <Container>
            <Background>
                <img src={wood_texture} alt='wood texture'/>
            </Background>
            {
                isJournalOpen ? 
                    <Page/>
                    :
                    <Display/>
            }
        </Container>
    )
}

export default Home

const Container = styled.div`
width: 100vw;
height: 100vh;
overflow: hidden;
display: grid;
justify-items: center;
align-items: center;        
`

const Background = styled.div`
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