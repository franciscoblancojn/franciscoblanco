// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cacheData from "memory-cache";

const KEY_CACHE = "KEY_CACHE";
export default (req, res) => {
  const ID = req?.query?.id ?? KEY_CACHE;
  // 🔹 Permitir CORS
  res.setHeader("Access-Control-Allow-Origin", "*"); // o especifica tu dominio si quieres restringir
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // 🔹 Manejar preflight (OPTIONS)
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
  res.headers = { "Content-Type": "application/json" };
  res.json({ cache }, { headers: { "Content-Type": "application/json" } });
};
