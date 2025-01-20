import { Request, response, Response } from "express";
import TeamService from "../services/team-service";
import Team from "../models/team";

export default class TeamController {
  static async insert(request: Request, response: Response): Promise<void> {
    const httpResponse = await TeamService.insert(Team.build({
      name: request.body.name,
      nationality: request.body.nationality
    }));
    response.status(httpResponse.statusCode).contentType(httpResponse.type).json(httpResponse.content);
  }

  static async all(request: Request, response: Response): Promise<void> {
    const httpResponse = await TeamService.all();
    response.status(httpResponse.statusCode).contentType(httpResponse.type).json(httpResponse.content);
  }

  static async find(request: Request, response: Response): Promise<void> {
    const httpResponse = await TeamService.find(parseInt(request.params.id));
    response.status(httpResponse.statusCode).contentType(httpResponse.type).json(httpResponse.content);
  }

  static async update(request: Request, response: Response): Promise<void> {
    const httpResponse = await TeamService.update(Team.build({
      id: parseInt(request.params.id),
      name: request.body.name,
      nationality: request.body.nationality
    }));
    response.status(httpResponse.statusCode).contentType(httpResponse.type).json(httpResponse.content);
  }

  static async destroy(request: Request, response: Response): Promise<void> {
    const httpResponse = await TeamService.destroy(parseInt(request.params.id));
    response.status(httpResponse.statusCode).contentType(httpResponse.type).json(httpResponse.content);
  }
}