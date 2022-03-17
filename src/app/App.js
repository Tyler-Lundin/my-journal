import styled from 'styled-components'
import Home from '../views/Home'

function App() {
    const S = {}
    // app main width / height
    S.Container = styled.div`
        width: 100vw;
        height: 100vh;
    `
    return (
        <S.Container>
            <Home/>
        </S.Container>
    );
}

export default App;
