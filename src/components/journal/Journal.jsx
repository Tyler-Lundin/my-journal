import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setJournalOpen, setTitle } from '../../app/state/JournalSlice'
import JournalBackground from './JournalBackground'
import JournalTitle from './JournalTitle'
import { setCurrentPage, setJournalID, setPageList } from '../../app/state/PageSlice'
import JournalOptions from './JournalOptions'


const Journal = (props) => {
    const dispatch = useDispatch()
    const journalList = useSelector(state => state.journal.value.journalList)
    const idList = useSelector(state => state.journal.value.idList)
    const handleClick = () => {
        dispatch(setJournalOpen(true))
        dispatch(setPageList(journalList[props.index].Pages))
        dispatch(setTitle(journalList[props.index].Title))
        dispatch(setCurrentPage(journalList[props.index].Pages[0]))
        dispatch(setJournalID(idList[props.index]))
    }
    return (
        <BiggerContainer>
            <JournalOptions index={props.index}/>
            
            <Container onClick={handleClick}>
                <JournalBackground/>
                <JournalTitle title={props.title}/>
            </Container>
        </BiggerContainer>
    )
}

export default Journal

const BiggerContainer = styled.div`
    width: 500px;
    height: 600px;
    position: relative;
    display: grid;
    justify-items: center;
`

const Container = styled.div`
    width: 400px;
    height: 600px;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px 5px black;
    user-select: none;
    transition: 2s;
    transform-origin: top;
    :hover {
        transform: scale(110%);
        box-shadow: 0 0 20px 8px black;
        
    }
`


