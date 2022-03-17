import styled from 'styled-components'
import dark_paper_texture from '../../assets/dark-paper-texture.jpg'
import light_paper_texture from '../../assets/light-paper-texture.jpg'
import {GrNext, GrPrevious} from 'react-icons/gr'

const Page = () => {
    const S = {}
    S.Container = styled.div`
        width: 100vw;
        height: 100vh;
        position: relative;
    `
    S.TextArea = styled.textarea`
        background: none;
        width: 100vw;
        height: 100%;
        position: absolute;
        font-size: 2rem;
    `
    return (
        <S.Container>
            <PageBackground/>
            <S.TextArea/>
            <PageNavigation/>
        </S.Container>
    )
}

const PageBackground = () => {
    const S = {}
    S.Container = styled.div`
        width: 100%;
        height: 100%;
        position: absolute;
    `
    return(
        <S.Container>
            <img src={light_paper_texture} alt='paper texture'/>
        </S.Container>
    )
}

export default Page

const PageNavigation = () => {
    const S = {}
    S.Container = styled.div`
        width: 100vw;
        height: 80px;
        position: absolute;
        bottom: 0;
        background: rgba(255,255,255,0.5);
    `
    S.Buttons = styled.div`
        width: 100%;
        height: 100%;
        position: relative;
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
        position: absolute;
        right: 10%;
        svg {
            height: 80px;
            width: 80px;
        }
    `
    return (
        <S.Container>
            <GrNext/>
        </S.Container>
    )
}

const PagePrevious = () => {
    const S = {}
    S.Container = styled.div`
        position: absolute;
        left: 10%;
        svg {
            height: 80px;
            width: 80px;
        }
    `
    return (
        <S.Container>
            <GrPrevious/>
        </S.Container>
    )
}

const PageCounter = () => {
    const S = {}
    S.Container = styled.div`
        position: absolute;
        width: fit-content;
        left: 50%; top: 50%;
        transform: translate(-50%, -50%);
        font-size: 2rem;
    `
    return (
        <S.Container>
            1 of 99
        </S.Container>
    )
}