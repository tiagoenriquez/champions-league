import { Router } from "express";
import PlayerController from "../controllers/player-controller";

const playerRouter = Router();

const prefix = 'players';

playerRouter.get(`/${prefix}/`, PlayerController.all);
playerRouter.get(`/${prefix}/:id`, PlayerController.find);
playerRouter.post(`/${prefix}/`, PlayerController.insert);
playerRouter.put(`/${prefix}/:id`, PlayerController.update);
playerRouter.delete(`/${prefix}/:id`, PlayerController.destroy);

export default playerRouter;