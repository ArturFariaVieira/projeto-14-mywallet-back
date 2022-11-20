import { Router } from 'express';
import { getRegistros, postRegistro, editRegistro, deleteRegistro } from '../controllers/balanceController.js';
import { tokenValidationMiddleware } from '../middlewares/tokenValidationMiddleware.js';
import { balanceValidationMiddleware } from "../middlewares/balanceValidationMiddleware.js"
const balanceRouter = Router();
balanceRouter.use(tokenValidationMiddleware)
balanceRouter.get("/registros", getRegistros);
balanceRouter.post("/registros", balanceValidationMiddleware, postRegistro);
balanceRouter.put("/registros/:id", balanceValidationMiddleware, editRegistro);
balanceRouter.delete("/registros/:id", deleteRegistro);
export default balanceRouter;

