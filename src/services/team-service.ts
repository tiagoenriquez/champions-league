import { StatusCodes } from "http-status-codes";
import HTTPResponse from "../models/response";
import Team from "../models/team";
import TeamRepository from "../repositories/team-repository";
import TeamInterface from "../interfaces/team-interface";
import PlayerRepository from "../repositories/player-repository";

export default class TeamService {
  static async insert(team: Team): Promise<HTTPResponse> {
    const otherTeam = await TeamRepository.findByName(team.name);
    if (otherTeam) return new HTTPResponse('Repeated team', StatusCodes.BAD_REQUEST);
    await TeamRepository.insert(team);
    return new HTTPResponse('Registered team', StatusCodes.CREATED);
  }

  static async all(): Promise<HTTPResponse> {
    const teams = await TeamRepository.all();
    if (teams.length === 0) return new HTTPResponse('No teams', StatusCodes.NO_CONTENT);
    return new HTTPResponse(teams);
  }

  static async find(id: number): Promise<HTTPResponse> {
    const team = await TeamRepository.find(id);
    if (!team) return new HTTPResponse('Not found', StatusCodes.NOT_FOUND);
    return new HTTPResponse(team);
  }

  static async update(team: Team): Promise<HTTPResponse> {
    const otherTeam = await TeamRepository.findByName(team.name);
    if (otherTeam && otherTeam.id !== team.id) return new HTTPResponse('Repeated team', StatusCodes.BAD_REQUEST);
    await TeamRepository.update(team);
    return new HTTPResponse('updated team');
  }

  static async destroy(id: number): Promise<HTTPResponse> {
    const team = await TeamRepository.find(id)
    if (!team) return new HTTPResponse('Not Found', StatusCodes.NOT_FOUND);
    const players = await PlayerRepository.findByTeam(id);
    if (players.length) return new HTTPResponse('Team with registered players', StatusCodes.BAD_REQUEST);
    await TeamRepository.destroy(id);
    return new HTTPResponse('deleted team');
  }
}