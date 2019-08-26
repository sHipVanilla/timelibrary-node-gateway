import firebase from "firebase";
import { Event } from '../../../model/event';
import { Group } from '../../../model/group';

export const getEventById = async (query: string) => {

    var db = firebase.firestore()
    var event: Event = {
        eventId: '',
        eventChildrenEvents: [],
        eventDescription: '',
        eventGroups: [],
        eventLocations: [],
        eventName: '',
        eventPeople: [],
        eventPublic: false,

        dependentChildrenEventIds: [],
        dependentGroupIds: []
    };
    var eventIds: string[] = [];
    var groupIds: string[] = [];
    var locationIds: string[] = [];
    var peopleIds: string[] = [];

    await db.collection('event').doc(query).get().then(
        doc => {
            if (doc.exists) {
                event.eventId = doc.id;

                eventIds = [...doc.get('events')];

                if (eventIds.length > 0) {
                    eventIds.forEach((val) => {
                        // var childEvent: Event = {
                        //     eventId: val,
                        //     // eventDescription: '',
                        //     // eventName: ''
                        // }
                        if (event.dependentChildrenEventIds != null)
                        event.dependentChildrenEventIds.push(val);
                            // event.eventChildrenEvents.push(childEvent);
                    })
                }

                event.eventDescription = doc.get('description');

                groupIds = [...doc.get('groups')];
                groupIds.forEach((val) => {
                    // var group: Group = {
                    //     groupId: val,
                    //     //groupName: ''
                    // }
                    if (event.dependentGroupIds != null)
                    event.dependentGroupIds.push(val);
                        // event.eventGroups.push(group);
                }

                )
                event.eventName = doc.get('name');
            }
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
    return await event;
}

export const getEventsByIds = async (query: string[]) => {
    
    var db = firebase.firestore()

    var eventArray: Event[] = [];

    for await(const group of query) {
        console.log('here');

        await db.collection('event').doc(group).get().then(
            doc => {

                if(doc.exists) {
                    var event: Event = {
                        eventId: doc.id,
                        eventDescription: doc.get('description'),
                        eventName: doc.get('name')
                    };
                    eventArray.push(event);
                }
            }).catch((err) => {
                console.log('Error getting documents', err);
        });
    }

    console.log(eventArray)

    return eventArray;
}

export const getEventsLike = async (query: string) => {

    var db = firebase.firestore()
    var event: Event = {
        eventId: '',
        eventChildrenEvents: [],
        eventDescription: '',
        eventGroups: [],
        eventLocations: [],
        eventName: '',
        eventPeople: [],
        eventPublic: false
    };
    var groupIds: string[];

    await db.collection('event').where('name', '==', query).get().then(
        snapshot => {
            if (snapshot) {
                snapshot.forEach(doc => {
                    console.log('test ' + doc.id);
                });
            }
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });
    return await event;
}

export const createEvent = async (query: Event) => {

    var db = firebase.firestore()
    var returnId = '';

    await db.collection('event').add(query).then(
        snapshot => {
            if(snapshot) {
                console.log(snapshot.id);
                returnId = snapshot.id;
            }
        }
    ).catch((err) => {
            console.log('Error creating document', err);
    });

    return returnId;
}

export const updateEvent = async (id: string, query: Event) => {

    var db = firebase.firestore()

    await db.collection('event').doc(id).update(query).then(()=> {
        console.log('document updated')
    }
    ).catch((err) => {
            console.log('Error creating document', err);
    });

    return id + ' updated';
}