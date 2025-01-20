import { Request, Response } from "express";
import PlayerService from "../services/player-service";
import Player from "../models/player";

export default class PlayerController {
  static async insert(request: Request, response: Response): Promise<void> {
    const httpResponse = await PlayerService.insert(Player.build({
      name: request.body.name,
      nationality: request.body.nationality,
      teamId: request.body.team_id
    }));
    response.status(httpResponse.statusCode).contentType(httpResponse.type).json(httpResponse.content);
  }

  static async all(request: Request, response: Response): Promise<void> {
    const httpResponse = await PlayerService.all();
    response.status(httpResponse.statusCode).contentType(httpResponse.type).json(httpResponse.content);
  }

  static async find(request: Request, response: Response): Promise<void> {
    const httpResponse = await PlayerService.find(parseInt(request.params.id));
    response.status(httpResponse.statusCode).contentType(httpResponse.type).json(httpResponse.content);
  }

  static async update(request: Request, response: Response): Promise<void> {
    const httpResponse = await PlayerService.update(Player.build({
      id: parseInt(request.params.id),
      name: request.body.name,
      nationality: request.body.nationality,
      teamId: request.body.team_id
    }));
    response.status(httpResponse.statusCode).contentType(httpResponse.type).json(httpResponse.content);
  }

  static async destroy(request: Request, response: Response): Promise<void> {
    const httpResponse = await PlayerService.destroy(parseInt(request.params.id));
    response.status(httpResponse.statusCode).contentType(httpResponse.type).json(httpResponse.content);
  }
}