// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cacheData from 'memory-cache';

const KEY_CACHE = "KEY_CACHE"

export default (req, res) => {
  if (req.method === 'POST') {
    cacheData.put(KEY_CACHE, req.body);
    res.statusCode = 200
    res.json({ save:"ok" })
  } 
  const cache = cacheData.get(KEY_CACHE);
  res.statusCode = 200
  res.json({ cache })
}
