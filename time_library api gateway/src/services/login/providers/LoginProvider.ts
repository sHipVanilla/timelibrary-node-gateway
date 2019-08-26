import firebase from "firebase";
import { User } from '../../../model/user';

export const getUsers = async () => {

    var db = firebase.firestore()
    var userArr:User[] = [];

    await db.collection('users').get().then((snapshot) => {
        snapshot.forEach((doc) => {
            var user:User = {
                uniqueId: doc.id.toString(),
                userName: doc.get('userName'),
                event: doc.get('events')
            };
            userArr.push(user);
        });
    })
        .catch((err) => {
            console.log('Error getting documents', err);
        });

    return userArr;
}