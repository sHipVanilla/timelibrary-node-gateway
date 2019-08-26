import { Event } from "./event";

export interface User {
    uniqueId: string;
    userName: string;
    event?: Event;
}