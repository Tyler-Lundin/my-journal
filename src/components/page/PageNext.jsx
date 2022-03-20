import styled from 'styled-components'
import {IoIosArrowForward} from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentIndex, setCurrentPage } from '../../app/state/PageSlice'

const PageNext = () => {
    const dispatch = useDispatch()
    const currentIndex = useSelector(state => state.page.value.currentIndex)
    const pageList = useSelector(state => state.page.value.pageList)
    const handleClick = () => {
        if (currentIndex < 99) {
            dispatch(setCurrentIndex(currentIndex + 1))
            dispatch(setCurrentPage(pageList[currentIndex]))
        }
    }
    return (
        <Container onClick={handleClick}>
            <IoIosArrowForward/>
        </Container>
    )
}

export default PageNext

const Container = styled.div`
    height: 60%;
    width: fit-content;
    svg {
        height: 100%;
        width: 100%;
        color: white;
    }
`
