import { getEventById, getEventsByIds, getEventsLike } from './providers/EventProvider';
import { getGroupsByIds } from '../group/providers/GroupProvider';
import { ResponseEnvelope } from '../../model/responseEnvelope';

export const _getEventById = async (q: string) => {

    const res: ResponseEnvelope = {
        dataAsOf: new Date().getTime(),
        expires: new Date().getTime(),
        cachable: false,
        generationMs: 0,
        data: []
    };

    var eventObject:any;

    var startTms = new Date().getTime();

    eventObject = await getEventById(q); //Retrieves initial event object with corresponding dependency ids

    if(eventObject.dependentGroupIds.length>0) {
        eventObject.eventGroups = await getGroupsByIds(eventObject.dependentGroupIds); //Resolves group ids
    }

    if(eventObject.dependentChildrenEventIds.length>0) {
        eventObject.eventChildrenEvents = await getEventsByIds(eventObject.dependentChildrenEventIds);
    }

    console.log('loggy '+await eventObject.eventGroups);

    res.data = eventObject;

    res.generationMs = new Date().getTime() - startTms;

    console.log('FINAL RETURN');

    return res;
}

export const _getEventsLike = async (q: string) => {

    const res: ResponseEnvelope = {
        dataAsOf: new Date().getTime(),
        expires: new Date().getTime(),
        cachable: false,
        generationMs: 0,
        data: []
    };

    var returnData:any;

    var startTms = new Date().getTime();

    returnData = await getEventsLike(q);

    res.data = returnData;

    res.generationMs = new Date().getTime() - startTms;

    return res;
}