import firebase from "firebase";
import { Timeline } from '../../../model/timeline';

export const getTimelines = async () => {

    var db = firebase.firestore()
    var timelineArr: Timeline[] = [];

    await db.collection('timeline').get().then((snapshot) => {
        snapshot.forEach((doc) => {
            var timeline: Timeline = {
                uniqueId: doc.id.toString(),
                name: doc.get('name')
            };
            timelineArr.push(timeline);
        });
    })
        .catch((err) => {
            console.log('Error getting documents', err);
        });

    return timelineArr;
}

export const getTimelineById = async (query: string) => {

    var db = firebase.firestore()
    var timeline: Timeline = {
        uniqueId: '',
        name: ''
    };

    await db.collection('timeline').doc(query).get().then(
        doc => {
            if (doc.exists) {
                timeline.uniqueId = doc.id;
                timeline.name = doc.get('name');
            }
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });

    return timeline;
}