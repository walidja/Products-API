import { DataTypes } from "sequelize";

// Create Product model.
export const ProductSchema = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT("medium"),
    },
    image: {
      type: DataTypes.STRING(2048),
    },
    price: {
      type: DataTypes.INTEGER,
    },
    created_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }
