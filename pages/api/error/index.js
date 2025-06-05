export default (req, res) => {
  
  res.statusCode = 500
  res.json({ error:"error",message:"message of error" })
}
