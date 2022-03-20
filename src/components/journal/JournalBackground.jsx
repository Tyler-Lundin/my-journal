import styled from 'styled-components'
import journal_texture from '../../assets/journal-texture.jpg'


const JournalBackground = () => {
    
    return (
        <Container>
            <img src={journal_texture} draggable='false' alt='journal texture'/>
        </Container>
    )
}

export default JournalBackground

const Container = styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        img {
            object-fit: cover;
            width: 102%;
            
        }
    `