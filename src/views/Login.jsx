import { auth } from '../util/firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import styled from 'styled-components'

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
  };
  
  
const Login = (props) => {
    const S = {}
    S.Container = styled.div`
        width: 100vw;
        height: 100vh;
    `
    return (
        <S.Container>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        </S.Container>
    )
}

export default Login