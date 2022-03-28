import { config } from "dotenv";
config();

export const database = {
  connectionLimit: 10,
  host: process.env.DATABASE_HOST || "198.50.211.237",
  user: process.env.DATABASE_USER || "flashpoi_euro",
  password: process.env.DATABASE_PASSWORD || "Javieroca123-",
  database: process.env.DATABASE_NAME || "flashpoi_remesafintech",
};

export const port = process.env.PORT || 4000;
