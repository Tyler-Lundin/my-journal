import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setIDList, setJournalList, setListNeedsUpdate } from '../../app/state/JournalSlice'
import getJournalList from '../../util/get/getJournalList.ts'
import Journal from '../journal/Journal'
import CreateJournal from './CreateJournal'

const Display = () => {
    const dispatch = useDispatch()
    const journalList = useSelector(state => state.journal.value.journalList)
    const listNeedsUpdate = useSelector(state => state.journal.value.listNeedsUpdate)
    const journalsLoadRef = useRef(false)
    
    async function getList () {
        let list = await getJournalList()
        // console.log( list[ 1 ]) // id list
        dispatch(setJournalList(list[0]))
        dispatch(setIDList(list[1]))
    }



    useEffect( ()=> {
        if(!journalsLoadRef.current || listNeedsUpdate) {
            getList()
            journalsLoadRef.current = true
            dispatch(setListNeedsUpdate(false))
        }
    }, [listNeedsUpdate])

    

    return (
        <Container>
            <span/>
                {   
                    journalList.map((journal, index)=> {
                        return <Journal title={journal.Title} key={index} index={index} id={journal.Title}/>
                    })
                }
                <CreateJournal/>
            <span/>
        </Container>
    )
}
export default Display

const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: grid;
    grid-gap: 5rem;
    justify-items: center;
`

