import { useSelector } from 'react-redux'
import styled from 'styled-components'
import wood_texture from '../assets/wood-texture.jpg'
import Display from '../components/journal/Display'
import Page from '../components/page/Page'

const Home = () => {
    const isJournalOpen = useSelector(state => state.journal.value.isOpen)

    return (
        <Container>
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
background: url(${wood_texture}); 
background-size: 100%;
`

