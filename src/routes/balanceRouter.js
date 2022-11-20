import { Router } from 'express';
import  {getRegistros, postRegistro}  from '../controllers/balanceController.js';
import { tokenValidationMiddleware } from '../middlewares/tokenValidationMiddleware.js';
import { balanceValidationMiddleware } from "../middlewares/balanceValidationMiddleware.js"
const balanceRouter = Router();
balanceRouter.use(tokenValidationMiddleware)
balanceRouter.get("/registros",  getRegistros);
balanceRouter.post("/registros", balanceValidationMiddleware, postRegistro );
export default balanceRouter;

