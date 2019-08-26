import { getUsers } from './providers/LoginProvider';
import { ResponseEnvelope } from '../../model/responseEnvelope';

export const login = async () => {

    const res: ResponseEnvelope = {
        dataAsOf: new Date().getTime(),
        expires: new Date().getTime(),
        cachable: false,
        generationMs: 0,
        data: []
    };

    var startTms = new Date().getTime();

    res.data = await getUsers();

    res.generationMs = new Date().getTime() - startTms;

    return res;
}