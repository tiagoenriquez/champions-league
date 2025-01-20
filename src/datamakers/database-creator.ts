import sequelize from "../connections/database-connection";
import Player from "../models/player";
import Team from "../models/team";

async function createDatabase(): Promise<void> {
  await sequelize.sync();
  Player.associate({ Team });
  Team.associate({ Player });
}

createDatabase();