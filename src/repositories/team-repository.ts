import Team from "../models/team";

export default class TeamRepository {
  static async insert(team: Team): Promise<void> {
    await team.save();
  }

  static async all(): Promise<Team[]> {
    return await Team.findAll();
  }

  static async findByName(name: string): Promise<Team | null> {
    return await Team.findOne({ where: { name } });
  }

  static async find(id: number): Promise<Team | null> {
    return await Team.findByPk(id);
  }

  static async update(team: Team): Promise<void> {
    await Team.update(team.get(), { where: { id: team.id } });
  }

  static async destroy(id: number): Promise<void> {
    await Team.destroy({ where: { id } });
  }
}