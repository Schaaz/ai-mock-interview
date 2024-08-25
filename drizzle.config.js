/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-mock-interview-db_owner:GScwUN9WOTV2@ep-yellow-river-a1l9707i.ap-southeast-1.aws.neon.tech/ai-mock-interview-db?sslmode=require',
    }
  };