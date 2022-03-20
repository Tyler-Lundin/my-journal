import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setCurrentPage, setPageList } from '../../app/state/PageSlice'
import light_paper_texture from '../../assets/light-paper-texture.jpg'
import saveJournal from '../../util/save/saveJournal.ts'

const TextArea = () => {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.page.value.currentPage)
    const currentIndex = useSelector(state => state.page.value.currentIndex)
    const journalID = useSelector(state => state.page.value.journalID)
    const journalTitle = useSelector(state => state.journal.value.title)
    const pageList = useSelector(state => state.page.value.pageList)
    
    function handleSave (e) {
        const list_ = [...pageList]
        list_[currentIndex - 1] = e.target.value
        dispatch(setCurrentPage(e.target.value))
        dispatch(setPageList(list_))
        saveJournal(journalID, list_, journalTitle)
    }
    return (
        <Container>
            <Background/>
            <PageTextArea 
                maxLength={1500}
                defaultValue={currentPage}
                onChange={(e)=>handleSave(e)}
                key={currentIndex}
            />
        </Container>
    )
}

export default TextArea

const Container = styled.div`
    width: 100%;
    height: calc(100% - 50px);
    position: absolute;
    z-index: 65;
    bottom: 0;
    box-shadow: 0 0 3px 1px black;
`
const PageTextArea = styled.textarea`
    background: none;
    width: 100%;
    height: 100%;
    font-size: 2rem;
    line-height: 2rem;
    resize: none;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    /* background: url(${light_paper_texture}); */
    position: relative;
    z-index: 20;
    /* overflow-y: hidden; */
    background: rgb(255,255,255);
    background: repeating-linear-gradient(to bottom, white 0, white 1.9rem, black 2rem);
    background-attachment: local ;
    :focus {
        outline: none;
        
    }
`

const Background = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: rgb(255,255,255);
    background: repeating-linear-gradient(to bottom, white 0, white 1.9rem, black 2rem);
    background-attachment: local ;
    z-index: 15;
`