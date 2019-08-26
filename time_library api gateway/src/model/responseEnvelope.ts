/** 
 * Standardized response envelope for the REST calls.
*/
export interface ResponseEnvelope {
    dataAsOf: number;
    expires: number;
    cachable: Boolean;
    generationMs: number;
    data: Object;
}