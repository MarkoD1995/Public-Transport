import { Router } from "express";
import { TransportController } from "../api/transport.controller";



const router = Router();

router.get('/transportCalculation', TransportController.calculateTransportTime);


export const TransportRouter = router;
