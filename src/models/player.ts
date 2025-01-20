import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../connections/database-connection";
import Team from "./team";

interface PlayerInterface {
  id?: number;
  name: string;
  nationality: string;
  teamId: number;
  team?: Team;
}

interface PlayerAttributesCreator extends Optional<PlayerInterface, 'id'> {}

class Player extends Model<PlayerInterface, PlayerAttributesCreator> implements PlayerInterface {
  id!: number;
  name!: string;
  nationality!: string;
  teamId!: number;
  team!: Team;

  static associate(models: any) {
    Player.belongsTo(models.Team, { foreignKey: 'teamId', as: 'team' });
  }
}

Player.init({
  name: DataTypes.STRING,
  nationality: DataTypes.STRING,
  teamId: {
    type: DataTypes.INTEGER,
    references: {
      model: Team,
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Player'
});

export default Player;