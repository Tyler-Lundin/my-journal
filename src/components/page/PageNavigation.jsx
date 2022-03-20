import styled from 'styled-components'
import PagePrevious from './PagePrevious'
import PageCounter from './PageCounter'
import PageNext from './PageNext'
import PageExit from './PageExit'

const PageNavigation = () => {
    

    return(
        <Container>
            <PageExit/>
            <Buttons>
                <PagePrevious/>
                <PageCounter/>
                <PageNext/>
            </Buttons>
        </Container>
    )
}


export default PageNavigation

const Container = styled.div`
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;
    color: white;
    display: grid;
    justify-items: center;
    background-size: 100%;
    background-position: center;
`
const Buttons = styled.div`
    width: 40%;
    height: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    justify-items: center;
`