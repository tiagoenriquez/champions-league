import { StatusCodes } from "http-status-codes";
import Player from "../models/player";
import HTTPResponse from "../models/response";
import PlayerRepository from "../repositories/player-repository";
import TeamRepository from "../repositories/team-repository";

export default class PlayerService {
  static async insert(player: Player): Promise<HTTPResponse> {
    const otherPlayer = await PlayerRepository.findByName(player.name);
    if (otherPlayer) return new HTTPResponse('Repeated player', StatusCodes.BAD_REQUEST);
    const team = await TeamRepository.find(player.teamId);
    if (!team) return new HTTPResponse('Team not found', StatusCodes.BAD_REQUEST);
    await PlayerRepository.insert(player);
    return new HTTPResponse('Registered player', StatusCodes.CREATED);
  }

  static async all(): Promise<HTTPResponse> {
    const players = await PlayerRepository.all();
    if (!players.length) return new HTTPResponse('No players', StatusCodes.NO_CONTENT);
    return new HTTPResponse(players);
  }

  static async find(id: number): Promise<HTTPResponse> {
    const player = await PlayerRepository.find(id);
    if (!player) return new HTTPResponse('Not found', StatusCodes.NOT_FOUND);
    return new HTTPResponse(player);
  }

  static async update(player: Player): Promise<HTTPResponse> {
    const otherPlayer = await PlayerRepository.findByName(player.name);
    if (otherPlayer && otherPlayer.id !== player.id) {
      return new HTTPResponse('Repeated player', StatusCodes.BAD_REQUEST);
    }
    const team = await TeamRepository.find(player.teamId);
    if (!team) return new HTTPResponse('Team not found', StatusCodes.BAD_REQUEST);
    await PlayerRepository.update(player);
    return new HTTPResponse('Updated player');
  }

  static async destroy(id: number): Promise<HTTPResponse> {
    const player = await PlayerRepository.find(id);
    if (!player) return new HTTPResponse('Not found', StatusCodes.NOT_FOUND);
    await PlayerRepository.destroy(id);
    return new HTTPResponse('deleted player');
  }
}