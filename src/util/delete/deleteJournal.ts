import { doc, deleteDoc } from 'firebase/firestore'
import {auth, db} from '../firebase'

async function deleteJournal (journalID) {
    const docRef = doc(db, 'users', auth.currentUser.uid, 'journals', journalID)
    await deleteDoc(docRef)
}
    



export default deleteJournal