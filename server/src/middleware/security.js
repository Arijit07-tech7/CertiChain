export function requireRole(...roles){return (req,res,next)=>{const role=req.headers['x-role'];if(!roles.includes(role))return res.status(403).json({error:'Forbidden'});req.role=role;next()}}
