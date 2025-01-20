import { Router } from "express";
import TeamController from "../controllers/team-controller";

const teamRouter = Router();

const prefix = 'teams';

teamRouter.get(`/${prefix}/`, TeamController.all);
teamRouter.get(`/${prefix}/:id`, TeamController.find);
teamRouter.post(`/${prefix}/`, TeamController.insert);
teamRouter.put(`/${prefix}/:id`, TeamController.update);
teamRouter.delete(`/${prefix}/:id`, TeamController.destroy);

export default teamRouter;