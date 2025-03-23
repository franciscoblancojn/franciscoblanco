// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cacheData from 'memory-cache';


export default (req, res) => {
  
  if (req.method === 'POST') {
    cacheData.put(req?.query?.id, req.body,1000000000000);
    res.statusCode = 200
    res.json({ save:"ok", body:req.body })
    return;
  } 
  const cache = cacheData.get(req?.query?.id);
  res.statusCode = 200
  res.json({ cache })
}
