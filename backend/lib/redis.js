import { Redis } from "@upstash/redis";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve("backend/.env") });

if (!process.env.UPSTASH_REDIS_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
  console.error("❌ Redis URL or Token not found in .env");
  process.exit(1);
}


export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});
