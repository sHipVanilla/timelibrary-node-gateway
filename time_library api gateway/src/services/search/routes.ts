import { Request, Response } from "express";
import { getPlacesByName, getHistory } from "./SearchController";
import { checkSearchParams } from "../../middleware/checks";

export default [
  {
    path: "/api/v1/search",
    method: "get",
    handler: [
      checkSearchParams, // <-- this line
      async ({ query }: Request, res: Response) => {
        const result = await getPlacesByName(query.q);
        console.log('RES ' + result);
        res.status(200).send(result);
      }
    ]
  }
];