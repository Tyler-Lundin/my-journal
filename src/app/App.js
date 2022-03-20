import { useState } from 'react';
import styled from 'styled-components'
import Home from '../views/Home'
import Login from '../views/Login';
import { auth } from '../util/firebase'
import { onAuthStateChanged } from 'firebase/auth'

function App() {
    const [user, setUser] = useState()
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
            setUser(null)
        }
      });
   
    return (
        <Container>
            {
                user ? <Home/> : <Login setUser={setUser}/>
            }            
        </Container>
    );
}

export default App;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`