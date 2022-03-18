import {S, C} from "../../style/S"
// use state to store prompt message and response (accept or cancel)\
// read state, update response, read response from loader (function making prompt call)
import { useDispatch, useSelector } from "react-redux"
import { setOpen } from "../../app/state/PromptSlice"
import { setJournalOpen } from "../../app/state/JournalSlice"

const Prompt = (props) => {
    const isOpen = useSelector(state => state.prompt.value.isOpen)    
    const journalOpen = useSelector(state => state.journal.value.isOpen)
    const dispatch = useDispatch()
    const handleResponse = (res) => {
        dispatch(setOpen(!isOpen))
        res === 'y' ?
            dispatch(setJournalOpen(true))
            :
            console.log('return to previous state')
    }

    return (
        <C.Prompt id="prompt">
            {
                isOpen ? 
                <S.ContainerMax>
                    <S.Shadow>
                        <C.Grid>
                            <C.PromptMessage>
                                Open 'Journal'?
                            </C.PromptMessage>
                            <C.PromptResponse onClick={()=>handleResponse('y')}>YES</C.PromptResponse>
                            <C.PromptResponse onClick={()=>handleResponse('n')}>NO</C.PromptResponse>
                        </C.Grid>
                    </S.Shadow>
                </S.ContainerMax>
                :
                <></>
            }
        </C.Prompt>
    )
}


export default Prompt

