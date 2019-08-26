import { Request, Response } from "express";
import { _getTimelines, _getTimelineById } from '../timeline/TimelineController'
import { checkSearchParams } from "../../middleware/checks";

export default [
    {
        path: "/api/v1/timeline",
        method: "get",
        handler: [
            async (req: Request, res: Response) => {
                const result = await _getTimelines();
                res.status(200).send(result);
            }
        ]
    },
    {
        path: "/api/v1/timeline/:id",
        method: "get",
        handler: [
            async (req: Request, res: Response) => {
                console.log(req.params['id'])
                const result = await _getTimelineById(req.params['id']);
                res.status(200).send(result);
            }
        ]
    },
];