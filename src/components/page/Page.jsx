import styled, {keyframes} from 'styled-components'
import PageNavigation from './PageNavigation'
import TextArea from './TextArea'


const Page = () => {

    return (
        <Container>
            <PageNavigation/>
            <TextArea/>
        </Container>
    )
}

export default Page


const onLoadAnimation = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
`



const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    animation: ${onLoadAnimation} 200ms forwards ;
`
