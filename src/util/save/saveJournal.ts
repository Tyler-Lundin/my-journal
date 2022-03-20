import { doc, updateDoc} from 'firebase/firestore'
import {auth, db} from '../firebase'

async function saveJournal (journalID, pageList, title) {
    const docRef = doc(db, 'users', auth.currentUser.uid, 'journals', journalID);
    await updateDoc(docRef, {
        Title: title,
        Pages: pageList
    })
 
}

export default saveJournal