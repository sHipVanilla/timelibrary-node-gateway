import firebase from "firebase";
import { Group } from '../../../model/group';

export const getGroupById = async (query: string) => {

    var db = firebase.firestore()
    var group: Group = {
        groupId: '',
        groupName: ''
    };

    var groupIds: string[];

    // await db.collection('group').doc(query).get().then(
    //     doc => {
    //         if (doc.exists) {
    //             event.eventId = doc.id;

    //             event.eventDescription = doc.get('description');

    //             groupIds = [...doc.get('groups')];
    //             groupIds.forEach((val) => {
    //                 var group: Group = {
    //                     groupId: val,
    //                     groupName: ''
    //                 }
    //                 event.eventGroups.push(group);

    //             }
    //                 // db.collection('group').doc(val).get().then(doc => {

    //                 //     console.log('11111111111111111');
    //                 //     var group: Group = {
    //                 //         groupId: doc.id,
    //                 //         groupName: doc.get('name')
    //                 //     }
    //                 //     event.eventGroups.push(group);
    //                 //     console.log('AA ' + event.eventGroups)
    //                 // })
    //             )
    //             event.eventName = doc.get('name');
    //         }
    //     })
    //     // .then(() => test(groupIds))
    //     .catch((err) => {
    //         console.log('Error getting documents', err);
    //     });
    console.log('RETURNNNNNNNNNNNNNNN');

    return await group;
}

export const getGroupsByIds = async (query: string[]) => {

    var db = firebase.firestore()

    var groupArray: Group[] = [];

    for await(const group of query) {
        console.log('here');

        await db.collection('group').doc(group).get().then(
            doc => {

                if(doc.exists) {
                    var group: Group = {
                        groupId: doc.id,
                        groupName: doc.get('name')
                    };
                    groupArray.push(group);
                }
            }).catch((err) => {
                console.log('Error getting documents', err);
        });
    }

    console.log(groupArray)

    return groupArray;
}