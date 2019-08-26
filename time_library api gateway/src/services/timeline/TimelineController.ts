import { getTimelines, getTimelineById } from './providers/TimelineProvider';
import { ResponseEnvelope } from '../../model/responseEnvelope';

export const _getTimelines = async () => {

    const res: ResponseEnvelope = {
        dataAsOf: new Date().getTime(),
        expires: new Date().getTime(),
        cachable: false,
        generationMs: 0,
        data: []
    };

    var startTms = new Date().getTime();

    res.data = await getTimelines();

    res.generationMs = new Date().getTime() - startTms;

    return res;
}

export const _getTimelineById = async (q: string) => {

    const res: ResponseEnvelope = {
        dataAsOf: new Date().getTime(),
        expires: new Date().getTime(),
        cachable: false,
        generationMs: 0,
        data: []
    };

    var startTms = new Date().getTime();

    res.data = await getTimelineById(q);

    res.generationMs = new Date().getTime() - startTms;

    return res;
}