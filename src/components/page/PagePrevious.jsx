import styled from 'styled-components'
import {IoIosArrowBack} from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentIndex, setCurrentPage } from '../../app/state/PageSlice'

const PagePrevious = () => {
    const dispatch = useDispatch()
    const currentIndex = useSelector(state => state.page.value.currentIndex)
    const pageList = useSelector(state => state.page.value.pageList)
    const handleClick = () => {
        if (currentIndex > 1) {
            dispatch(setCurrentIndex(currentIndex - 1))
            console.log(pageList[currentIndex - 2])
            dispatch(setCurrentPage(pageList[currentIndex - 2]))
        }
    }
    return (
        <Container onClick={handleClick}>
            <IoIosArrowBack/>
        </Container>
    )
}

export default PagePrevious

const Container = styled.div`
    height: 60%;
    width: fit-content;
    svg {
        height: 100%;
        width: 100%;
        color: white;
    }
`