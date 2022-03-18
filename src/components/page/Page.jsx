import styled from 'styled-components'
import dark_paper_texture from '../../assets/dark-paper-texture.jpg'
import light_paper_texture from '../../assets/light-paper-texture.jpg'
import wood_texture from '../../assets/wood-texture.jpg'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

const Page = () => {
    const S = {}
    S.Container = styled.div`
        width: 100vw;
        height: 100vh;
        position: relative;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    `
    return (
        <S.Container>
            <PageNavigation/>
            <TextArea/>
        </S.Container>
    )
}

const TextArea = () => {
    const S = {}
    S.Container = styled.div`
        width: 100%;
        height: calc(100% - 50px);
        position: absolute;
        z-index: 65;
        bottom: 0;
        box-shadow: 0 0 3px 1px black;
    `
    S.TextArea = styled.textarea`
        background: none;
        width: 100%;
        height: 100%;
        font-size: 2rem;
        resize: none;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        background: url(${light_paper_texture});
    `
    return (
        <S.Container>
            <S.TextArea/>
        </S.Container>
    )
}

export default Page

const PageNavigation = () => {
    const S = {}
    S.Container = styled.div`
        width: 100%;
        height: 50px;
        position: absolute;
        top: 0;
        color: white;
        display: grid;
        justify-items: center;
        background-size: 100%;
        background-position: center;
    `
    S.Buttons = styled.div`
        width: 40%;
        height: 100%;
        position: relative;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        align-items: center;
        justify-items: center;
    `
    return(
        <S.Container>
            <S.Buttons>
                <PagePrevious/>
                <PageCounter/>
                <PageNext/>
            </S.Buttons>
        </S.Container>
    )
}

const PageNext = () => {
    const S = {}
    S.Container = styled.div`
        height: 60%;
        width: fit-content;
        svg {
            height: 100%;
            width: 100%;
            color: white;
        }
    `
    return (
        <S.Container>
            <IoIosArrowForward/>
        </S.Container>
    )
}

const PagePrevious = () => {
    const S = {}
    S.Container = styled.div`
        height: 60%;
        width: fit-content;
        svg {
            height: 100%;
            width: 100%;
            color: white;
        }
    `
    return (
        <S.Container>
            <IoIosArrowBack/>
        </S.Container>
    )
}

const PageCounter = () => {
    const S = {}
    S.Container = styled.div`
        width: 100%;
        font-size: 1.3rem;
        height: 100%;
        text-align: center;
        display: grid;
        align-items: center;
    `
    return (
        <S.Container>
            1 / 99
        </S.Container>
    )
}
