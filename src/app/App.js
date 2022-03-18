import { useState } from 'react';
import styled from 'styled-components'
import Nav from '../components/navigation/Nav';
import Home from '../views/Home'
import Login from '../views/Login';
import { auth } from '../util/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Prompt from '../components/prompt/Prompt';

function App() {
    const [user, setUser] = useState()
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user)
            setUser(user)
        } else {
            setUser(null)
        }
      });
    const S = {}
    S.Container = styled.div`
        width: 100vw;
        height: 100vh;
    `
    return (
        <S.Container>
            <Prompt/>
            <Nav/>
            {
                user ? <Home/> : <Login setUser={setUser}/>
            }            
        </S.Container>
    );
}

export default App;
