import { addDoc, collection } from 'firebase/firestore'
import {auth, db} from '../firebase'

async function createJournal (JournalTitle: string) {
    const collRef = collection(db, 'users', auth.currentUser.uid, 'journals');
    await addDoc(collRef, {
        Pages: Array(99).fill(''),
        Title: JournalTitle
    })
}

export default createJournal