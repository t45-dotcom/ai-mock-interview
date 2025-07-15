

/** @type { import("drizzle-kit").Config } */
import * as dotenv from 'dotenv';
dotenv.config({path: '.env.local'}); // Load environment variables from .env.local file
const DB_PATH = process.env.NEXT_PUBLIC_DRIZZLE_DB_URL;


export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_hOAgon7FCaE1@ep-flat-cake-a8nljnu0.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require',
    },
};
