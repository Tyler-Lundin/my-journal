import styled from 'styled-components'
export const S = {}
export const C = {}
export const Z = {}

S.ContainerFill = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
`
S.ContainerMax = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
`

S.Shadow = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
`

C.Prompt = styled.div`
    position: absolute;
    top: 0;
    z-index: 99;
`

C.PromptMessage = styled.h1`
    font-size: 4rem;
    color: white;
    text-align: center;
    padding: 5vh;
`

C.PromptResponse = styled.button`
    background: none;
    border: none;
    width: 40vw;
    height: 20vh;
    color: white;
    font-size: 5rem;
    border-radius: 15px;
    :hover {
        outline: 5px white solid;
    }
`
C.Grid = styled.div`
    position: absolute;
    width: 100%;
    height: fit-content;
    display: grid;
    align-items: center;
    align-content: center;
    justify-items: center;
    top: 50%;
    transform: translateY(-50%);
`