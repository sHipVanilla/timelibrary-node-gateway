import { Person } from './person';

/**
 * WIP: A `Group` can hold many people, and should have a name.
 */
export interface Group {

    groupId: string;

    groupName?: string;
    // groupPeople?: Person[];
    // groupSubGroup?: Group;
}
