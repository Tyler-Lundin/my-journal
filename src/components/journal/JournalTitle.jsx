import styled from 'styled-components'

const JournalTitle = (props) => {
    
   
    return (
        <Container>
            {props.title}
        </Container>
    )
}

export default JournalTitle


const Container = styled.div`
position: absolute;
width: 100%;
height: fit-content;
color: rgba(255,255,255,0.7);
font-size: 4rem;
text-align: center;
top: 15%; 
overflow-wrap: break-word;
`