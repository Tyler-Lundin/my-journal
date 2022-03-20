import { useSelector } from 'react-redux'
import styled from 'styled-components'

const PageCounter = () => {
    const currentIndex = useSelector(state => state.page.value.currentIndex)
    return (
        <Container>
            {currentIndex} / 99
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    font-size: 1.3rem;
    height: 100%;
    text-align: center;
    display: grid;
    align-items: center;
`

export default PageCounter