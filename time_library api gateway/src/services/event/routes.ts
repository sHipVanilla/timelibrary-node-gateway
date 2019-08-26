import { Request, Response } from "express";
import { _getEventById, _getEventsLike } from '../event/EventController'
import { checkSearchParams } from "../../middleware/checks";

export default [
    {
        path: "/api/v1/event",
        method: "get",
        handler: [
            async (req: Request, res: Response) => {
                let result = null;
                if(req.query.id != null) {
                    result = await _getEventById(req.query.id);
                }
                if(req.query.name != null) {
                    result = await _getEventsLike(req.query.name);
                }

                res.status(200).send(result);
            }
        ]
    },
    // {
    //     path: "/api/v1/event",
    //     method: "get",
    //     handler: [
    //         async (req: Request, res: Response) => {
    //             const result = await _getEventsLike(req.params['name']);
    //             res.status(200).send(result);
    //         }
    //     ]
    // }
];