import { collection, getDocs } from "firebase/firestore"
import { db, auth } from "../firebase"


async function getJournalList () {
    const journalList:any[] = []
    const idList:string[] = []
    const collRef = collection(db, 'users', auth.currentUser.uid, 'journals')
    const collSnapshot= await getDocs(collRef)
    collSnapshot.forEach( (document) => {
        journalList.push(document.data())
        idList.push(document.id)
    })
    console.log(journalList)
    return ([journalList, idList])
}

export default getJournalList