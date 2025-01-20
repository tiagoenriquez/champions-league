import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../connections/database-connection";
import TeamInterface from "../interfaces/team-interface";

interface TeamAttributesCreator extends Optional<TeamInterface, "id"> {}

class Team extends Model<TeamInterface, TeamAttributesCreator> implements TeamInterface {
  id!: number;
  name!: string;
  nationality!: string;

  static associate(models: any) {
    Team.hasMany(models.Player, { foreignKey: 'teamId', as: 'players' });
  }
}

Team.init({
  name: DataTypes.STRING,
  nationality: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Team'
});

export default Team;