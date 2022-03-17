import styled from 'styled-components'
import {useState} from 'react'
import journal_texture from '../../assets/journal-texture.jpg'


const Journal = () => {
    const S = {}
    S.Container = styled.div`
        width: 400px;
        height: 600px;
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 0 10px 5px black;
        user-select: none;
        transform: scale(100%);
        transition: .6s;
        :hover {
            transform: scale(110%);
            box-shadow: 0 0 20px 8px black;
        }
    `
    return (
        <S.Container>
            <JournalBackground/>
            <JournalTitle/>
        </S.Container>
    )
}

const JournalBackground = () => {
    const S = {}
    S.Container = styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        img {
            object-fit: cover;
            width: 100%;
            
        }
    `
    return (
        <S.Container>
            <img src={journal_texture} draggable='false' alt='journal texture'/>
        </S.Container>
    )
}


const JournalTitle = () => {
    const S = {}
    S.Container = styled.div`
        position: absolute;
        width: 100%;
        height: fit-content;
        color: rgba(255,255,255,0.7);
        font-size: 6rem;
        text-align: center;
        top: 15%; 
        overflow-wrap: break-word;
    `
    return (
        <S.Container>
            gym
        </S.Container>
    )
}

export default Journal

