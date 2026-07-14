import type { NextApiRequest, NextApiResponse } from "next";
import cacheData from "memory-cache";

const KEY_CACHE = "KEY_CACHE";

type ResponseData = {
  save?: string;
  body?: unknown;
  cache?: unknown;
};

export default (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  if (req.method === "POST") {
    cacheData.put(KEY_CACHE, req.body, 1000000);
    res.statusCode = 200;
    res.json({ save: "ok", body: req.body });
    return;
  }
  const cache = cacheData.get(KEY_CACHE);
  res.statusCode = 200;
  res.json({ cache });
};
