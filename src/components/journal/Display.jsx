import styled from 'styled-components'

const Display = ({children}) => {
    const S = {}
    S.Container = styled.div`
        width: 100%;
        height: 100%;
        overflow-y: auto;
        display: grid;
        grid-gap: 5rem;
        justify-items: center;
    `

    return (
        <S.Container>
            <span/>
            {children}
            <span/>
        </S.Container>
    )
}
export default Display