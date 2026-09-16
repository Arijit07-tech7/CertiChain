import 'dotenv/config';import express from 'express';import cors from 'cors';import helmet from 'helmet';import rateLimit from 'express-rate-limit';
const app=express();app.use(helmet());app.use(cors({origin:process.env.CLIENT_ORIGIN||'http://localhost:5173'}));app.use(express.json({limit:'1mb'}));app.use(rateLimit({windowMs:60_000,max:120,standardHeaders:true,legacyHeaders:false}));
app.get('/api/health',(_,res)=>res.json({ok:true,service:'CertiChain API',time:new Date().toISOString()}));
app.get('/api/verify/:id',(_,res)=>res.status(501).json({error:'Connect verification controller/database before production use.'}));
app.listen(process.env.PORT||4000,()=>console.log(`CertiChain API listening on ${process.env.PORT||4000}`));
