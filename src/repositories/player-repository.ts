import Player from "../models/player";
import Team from "../models/team";

export default class PlayerRepository {
  static async insert(player: Player) {
    await player.save();
  }

  static async findByTeam(teamId: number): Promise<Player[]> {
    return await Player.findAll({ where: { teamId } });
  }

  static async findByName(name: string): Promise<Player | null> {
    return await Player.findOne({ where: { name } });
  }

  static async all(): Promise<Player[]> {
    return await Player.findAll({ include: { model: Team, as: 'team' } });
  }

  static async find(id: number): Promise<Player | null> {
    return await Player.findByPk(id, { include: { model: Team, as: 'team' } });
  }

  static async update(player: Player): Promise<void> {
    await Player.update(player.get(), { where: { id: player.id } });
  }

  static async destroy(id: number): Promise<void> {
    await Player.destroy({ where: { id } });
  }
}