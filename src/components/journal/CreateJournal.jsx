import styled from 'styled-components'
import { IoIosAddCircle } from 'react-icons/io'
import { setCreateNewTitle, setListNeedsUpdate } from '../../app/state/JournalSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import createJournal from '../../util/create/createJournal.ts'

const CreateJournal = () => {
    const dispatch = useDispatch()
    const createNewTitle = useSelector(state => state.journal.value.createNewTitle)
    const [popupOpen, setPopupOpen] = useState(false)
    function handleChange(e) {
        console.log('handleChange!')
        console.log(createNewTitle)
        dispatch(setCreateNewTitle(e.target.value))
    }
    function handleCreateNew() {
        createJournal(createNewTitle)
        setPopupOpen(false)
        dispatch(setListNeedsUpdate(true))
        dispatch(setCreateNewTitle(''))
    }

    return (
        <>
            <Container onClick={()=>setPopupOpen(true)}>
                <IoIosAddCircle size={'100%'}/>
            </Container>
            {
                popupOpen ? 
                <Popup>
                    <h1>Create Journal {createNewTitle === '' ? '' : `'${createNewTitle}'`} </h1>
                    <TitleInput type={'text'} placeholder='title' maxLength={15} onChange={(e)=>handleChange(e)}/>
                    <ButtonContainer>
                        <NoButton onClick={()=>setPopupOpen(false)}>NO</NoButton>
                        <YesButton disabled={createNewTitle === ''} onClick={handleCreateNew}>YES</YesButton>
                    </ButtonContainer>
                </Popup>
                :
                <></>
            }
        </>
    )
}

export default CreateJournal

const Container = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 1%;
    color: rgba(0,0,0,.3);
    svg{
        transition: 500ms;
        :hover {
            color: black;
        }
    }
`

const Popup = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    background: rgba(0,0,0,.8);
    display: grid;
    align-items: center;
    justify-items: center;
    h1 {
        color: white;
    }
`

const TitleInput = styled.input`
    width: 50vw;
    height: 6rem;
    font-size: 6rem;
    text-align: center;
    
    ::placeholder {
        text-align: center;
    }
`

const YesButton = styled.button`
    border: none;
    font-size: 4rem ;
    margin: 0 12vw;
    background: none;
    outline: none;
    border-bottom: 2px solid rgba(0,0,0,0);

    :enabled {
        color: white;
        :hover {
            border-bottom: 2px solid gold;
        }
    }
    :disabled {
        color: gray;
    }
`

const NoButton = styled.button`
    border: none;
    font-size: 4rem;    
    margin: 0 12vw;
    color: white;
    background: none;
    outline: none;
    border-bottom: 2px solid rgba(0,0,0,0);
    :hover {
        border-bottom: 2px solid gold;
    }
`

const ButtonContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
`