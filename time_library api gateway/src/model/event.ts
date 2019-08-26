import { Group } from './group';
import { Location } from './location';
import { Person } from './person';
import { TimePeriod } from './time-period';

/**
 * This can be used to contain details of some event in the system, including its name
 * and when it took place, as well as the people involved.
 */
export interface Event {
    
    eventId: string;

    eventChildrenEvents?: Event[];
    eventDescription?: string;
    eventGroups?: Group[];
    eventLocations?: Location[];
    eventName?: string;
    eventPeople?: Person[];
    eventPeriod?: TimePeriod;
    eventPublic?: boolean;

    dependentChildrenEventIds?: string[];
    dependentGroupIds?: string[];

}
