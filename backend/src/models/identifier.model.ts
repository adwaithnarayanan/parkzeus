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
  NotNull,
  PrimaryKey,
} from "@sequelize/core/decorators-legacy";

export class Identifier extends Model<
  InferAttributes<Identifier>,
  InferCreationAttributes<Identifier>
> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  @NotNull
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare identifierId: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare licensePlate: string;

  @Attribute(DataTypes.STRING)
  declare parkingId: string;

  @Attribute(DataTypes.STRING)
  declare organizationName: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare vehicleType: string;

  @Attribute(DataTypes.STRING)
  declare ownerName: string | null | undefined;

  @Attribute(DataTypes.STRING)
  declare ownerEmail: string | null | undefined;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare type: string;

  @Attribute(DataTypes.STRING)
  declare validFrom: string | undefined;

  @Attribute(DataTypes.STRING)
  declare validUpTo: string | undefined;
}