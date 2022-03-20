import styled from 'styled-components'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IoIosTrash } from 'react-icons/io'
// import {BiRename} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import deleteJournal from '../../util/delete/deleteJournal.ts'
import { setListNeedsUpdate, setTitle } from '../../app/state/JournalSlice'
const JournalOptions = (props) => {
    const dispatch = useDispatch()
    const idList = useSelector( state => state.journal.value.idList )

    const handleDelete = () => {
        deleteJournal(idList[props.index])
        dispatch(setListNeedsUpdate(true))
        
    }

    // const handleRename = () => {
    //     dispatch(setTitle())
    // }

    return (
        <Container>
            <BsThreeDotsVertical size={'100%'}/>
            <OptionsMenu>
                {/* <BiRename onClick={handleRename} size={'100%'}/> */}
                <IoIosTrash onClick={handleDelete} size={'100%'}/>
            </OptionsMenu>
        </Container>
    )
}

export default JournalOptions

const Container = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    top: 3%;
    right: 0%;
    z-index: 100;
    color: white;
    :hover > div {
        visibility: visible;
    }

`

const OptionsMenu = styled.div`
    width: 40px;
    height: fit-content;
    position: absolute;
    border-radius: 100%;
    visibility: hidden;
    transition: 500ms;
    :hover {
        visibility: visible;
    }
    svg {
        color: white;
        height: fit-content;
        transition: color 250ms;
        :hover {
            color: black;
        }
    }
`