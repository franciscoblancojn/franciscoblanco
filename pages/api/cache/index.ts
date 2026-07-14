import type { NextApiRequest, NextApiResponse } from "next";
import cacheData from "memory-cache";

const KEY_CACHE = "KEY_CACHE";

type ResponseData = {
  save?: string;
  body?: unknown;
  cache?: unknown;
};

export default (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  const ID = (req?.query?.id as string) ?? KEY_CACHE;

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "POST") {
    cacheData.put(
      ID,
      {
        date: new Date().toISOString(),
        body: req.body,
        query: req.query,
        headers: req.headers,
      },
      10000000
    );
    res.statusCode = 200;
    res.json({ save: "ok", body: req.body });
    return;
  }
  const cache = cacheData.get(ID);
  res.statusCode = 200;
  if (req?.query?.clear == "1") {
    cacheData.del(ID);
  }
  res.setHeader("Content-Type", "application/json");
  res.json({ cache });
};
