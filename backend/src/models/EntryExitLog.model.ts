import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  DeletedAt,
  HasMany,
  NotNull,
  PrimaryKey,
} from "@sequelize/core/decorators-legacy";
import { EntryExitCameraMap } from "./EntryExitCameraMap.js";

export class EntryExitLog extends Model<
  InferAttributes<EntryExitLog>,
  InferCreationAttributes<EntryExitLog>
> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  @NotNull
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare identifierId: string;

  @Attribute(DataTypes.DATE)
  declare entryTime: Date | null;

  @Attribute(DataTypes.DATE)
  declare exitTime: Date | null; 

  @Attribute(DataTypes.DATE)
  declare invalidatedAt: Date | null;

  @DeletedAt
  declare deletedAt: Date | null;

  @HasMany(() => EntryExitCameraMap, "entryExitId")
  declare entryExitMap: CreationOptional<EntryExitCameraMap[]>;
}
