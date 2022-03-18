import styled from 'styled-components'
import {IoIosMenu} from 'react-icons/io'
import { useState } from 'react'

const Nav = () => {
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)
    const S = {}
    S.Container = styled.div`
        position: relative;
    `
    return (
        <S.Container>
            <OpenNav isNavMenuOpen={isNavMenuOpen} setIsNavMenuOpen={setIsNavMenuOpen}/>
            <NavMenu isNavMenuOpen={isNavMenuOpen} setIsNavMenuOpen={setIsNavMenuOpen}/>
        </S.Container>
    )
}

export default Nav

const OpenNav = (props) => {
    const {isNavMenuOpen, setIsNavMenuOpen} = props
    function handleClick() {
        setIsNavMenuOpen(!isNavMenuOpen)
    }
    const S = {}
    S.Container = styled.div`
        width: 50px;
        height: 50px;
        position: absolute;
        z-index: 100;
        right: 5px;
        svg {
            color: white;
            transition: 500ms;
            :hover {
                color: orange;
            }
        }
    `
    return (
        <S.Container onClick={handleClick}>
            <IoIosMenu size='100%'/>
        </S.Container>
    )
}

const NavMenu = (props) => {
    const {isNavMenuOpen} = props
    const S = {}
    S.Container = styled.div`
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        right: ${props=> !props.isNavMenuOpen ? '100%' : '-100%' };
        background: blue;
    `
    return (
        <S.Container>

        </S.Container>
    )
}