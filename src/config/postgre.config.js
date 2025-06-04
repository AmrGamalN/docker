import { Client } from "pg";

export const postgre = () => {
  const client = new Client({
    connectionString: process.env.POSTGRE_URL,
  });
  client
    .connect()
    .then(() => console.log("Connected to Postgre"))
    .catch((err) => console.error("Postgre connection error:", err));
};
