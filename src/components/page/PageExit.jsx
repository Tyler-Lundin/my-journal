import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import {IoIosCloseCircleOutline} from 'react-icons/io'
import { setJournalOpen } from '../../app/state/JournalSlice'
import { setCurrentIndex } from '../../app/state/PageSlice'


const PageExit = () => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(setJournalOpen(false))
        dispatch(setCurrentIndex(1))
    }
    return(
        <Container onClick={handleClick}>
            <IoIosCloseCircleOutline/>
        </Container>
    )
}

export default PageExit

const Container = styled.div`
    width: fit-content;
    height: 100%;
    position: absolute;
    display: grid;
    align-items: center;
    left: 1%;
    svg {
        height: 80%;
        width: 80%;
        color: white;
        transition: 300ms;
        :hover {
            color: lightgreen;
        }
    }
`